'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import type { Item } from '@/lib/quiz';
import { record } from '@/lib/progress';
import AnswerText from './AnswerText';

type Result = 'ok' | 'ko';

type Props = {
  items: Item[];
  backHref: string;
  backLabel: string;
  /** Mode examen blanc : chronomètre, mélange des niveaux, correction à la fin. */
  exam?: { minutes: number; count: number };
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function correctText(item: Item): string {
  if (item.type === 'qcm') return item.options[item.answer];
  if (item.type === 'vf') return item.truth ? 'Vrai' : 'Faux';
  return item.a;
}

function buildExam(items: Item[], count: number) {
  const auto = items.filter((i) => i.type !== 'open');
  const per = Math.ceil(count / 3);
  const picks = [1, 2, 3].flatMap((l) => shuffle(auto.filter((i) => i.level === l)).slice(0, per));
  return shuffle(picks).slice(0, count);
}

export default function Practice({ items, backHref, backLabel, exam }: Props) {
  const [phase, setPhase] = useState<'intro' | 'run' | 'done'>(exam ? 'intro' : 'run');
  const [queue, setQueue] = useState<Item[]>(items);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | boolean | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<Record<string, Result>>({});
  const [secondsLeft, setSecondsLeft] = useState(exam ? exam.minutes * 60 : 0);

  const start = useCallback(
    (list: Item[]) => {
      setQueue(list);
      setIdx(0);
      setPicked(null);
      setRevealed(false);
      setResults({});
      if (exam) setSecondsLeft(exam.minutes * 60);
      setPhase('run');
    },
    [exam],
  );

  const current = queue[idx];

  const commit = useCallback(
    (ok: boolean) => {
      const item = queue[idx];
      if (!item) return;
      const r: Result = ok ? 'ok' : 'ko';
      setResults((prev) => ({ ...prev, [item.id]: r }));
      record(item.id, r);
    },
    [queue, idx],
  );

  const next = useCallback(() => {
    if (idx + 1 >= queue.length) {
      setPhase('done');
      return;
    }
    setIdx(idx + 1);
    setPicked(null);
    setRevealed(false);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [idx, queue.length]);

  const pickQcm = useCallback(
    (i: number) => {
      const item = queue[idx];
      if (!item || item.type !== 'qcm' || picked !== null) return;
      setPicked(i);
      commit(i === item.answer);
    },
    [queue, idx, picked, commit],
  );

  const pickVf = (v: boolean) => {
    const item = queue[idx];
    if (!item || item.type !== 'vf' || picked !== null) return;
    setPicked(v);
    commit(v === item.truth);
  };

  const grade = (ok: boolean) => {
    commit(ok);
    next();
  };

  useEffect(() => {
    if (!exam || phase !== 'run') return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setPhase('done');
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [exam, phase]);

  useEffect(() => {
    if (phase !== 'run') return;
    const onKey = (e: KeyboardEvent) => {
      const item = queue[idx];
      if (!item) return;
      if (item.type === 'qcm' && /^[1-4]$/.test(e.key)) pickQcm(Number(e.key) - 1);
      if (e.key === 'ArrowRight' && item.type !== 'open' && picked !== null) next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, queue, idx, picked, pickQcm, next]);

  // Examen : écran de départ
  if (phase === 'intro' && exam) {
    return (
      <div className="quiz-shell">
        <div className="panel center">
          <h2>{exam.count} questions, {exam.minutes} minutes</h2>
          <p className="muted">Les trois niveaux sont mélangés. La correction s’affiche à la fin.</p>
          <div className="run-actions center-actions">
            <button className="btn sun" onClick={() => start(buildExam(items, exam.count))}>
              Commencer
            </button>
            <Link className="btn ghost" href={backHref}>
              {backLabel}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Résultats
  if (phase === 'done') {
    const good = queue.filter((q) => results[q.id] === 'ok').length;
    const total = queue.length;
    const answered = queue.filter((q) => results[q.id]).length;
    const missed = queue.filter((q) => results[q.id] === 'ko' || (exam && !results[q.id]));
    const pct = total ? Math.round((good / total) * 100) : 0;
    const verdict =
      pct >= 85 ? 'Excellent.' : pct >= 65 ? 'Bon niveau.' : pct >= 40 ? 'Encore un peu de travail.' : 'Relisez le cours, puis réessayez.';
    return (
      <div className="quiz-shell">
        <div className="panel center">
          <div className="big-score">
            {good}<span> / {exam ? total : answered || total}</span>
          </div>
          <p className="muted">{verdict}</p>
          <div className="run-actions center-actions">
            {missed.length > 0 && !exam && (
              <button className="btn sun" onClick={() => start(missed)}>
                Revoir mes erreurs ({missed.length})
              </button>
            )}
            <button className="btn" onClick={() => (exam ? setPhase('intro') : start(items))}>
              Recommencer
            </button>
            <Link className="btn ghost" href={backHref}>
              {backLabel}
            </Link>
          </div>

          {missed.length > 0 && (
            <div className="miss-wrap">
              <h3>À retenir</h3>
              <ul className="miss-list">
                {missed.map((m) => (
                  <li key={m.id}>
                    <b>{m.q}</b>
                    <span>{correctText(m).split('\n').join(' · ')}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (!current) return null;
  const answered = picked !== null;
  const pctDone = Math.round(((idx + (answered ? 1 : 0)) / queue.length) * 100);

  return (
    <div className="quiz-shell">
      <div className="panel">
        <div className="run-top">
          <strong className="count">
            {idx + 1} / {queue.length}
          </strong>
          <div className="run-meta">
            {exam && <span className={`timer${secondsLeft < 60 ? ' low' : ''}`}>{fmt(secondsLeft)}</span>}
            <Link className="quit" href={backHref}>
              Quitter
            </Link>
          </div>
        </div>
        <div className="progress-line" aria-hidden="true">
          <i style={{ width: `${pctDone}%` }} />
        </div>

        <p className="qtext">{current.q}</p>

        {current.type === 'qcm' && (
          <div className="opts" role="group" aria-label="Réponses possibles">
            {current.options.map((o, i) => {
              let cls = 'opt';
              if (answered) {
                if (exam) {
                  if (picked === i) cls += ' picked';
                } else if (i === current.answer) cls += ' good';
                else if (picked === i) cls += ' bad';
              }
              return (
                <button key={i} className={cls} disabled={answered} onClick={() => pickQcm(i)}>
                  <span className="key">{'ABCD'[i]}</span>
                  <span>{o}</span>
                </button>
              );
            })}
          </div>
        )}

        {current.type === 'vf' && (
          <div className="vf-row" role="group" aria-label="Vrai ou faux">
            {[true, false].map((v) => {
              let cls = 'opt';
              if (answered) {
                if (exam) {
                  if (picked === v) cls += ' picked';
                } else if (v === current.truth) cls += ' good';
                else if (picked === v) cls += ' bad';
              }
              return (
                <button key={String(v)} className={cls} disabled={answered} onClick={() => pickVf(v)}>
                  {v ? 'Vrai' : 'Faux'}
                </button>
              );
            })}
          </div>
        )}

        {current.type === 'open' && !revealed && (
          <div className="run-actions">
            <button className="btn" onClick={() => setRevealed(true)}>
              Voir la réponse
            </button>
          </div>
        )}

        {current.type === 'open' && revealed && (
          <>
            <div className="answer-box">
              <AnswerText text={current.a} />
            </div>
            <div className="run-actions">
              <button className="btn" onClick={() => grade(true)}>
                Je savais
              </button>
              <button className="btn ghost" onClick={() => grade(false)}>
                À revoir
              </button>
            </div>
          </>
        )}

        {answered && !exam && current.type === 'qcm' && (
          <div className={`feedback ${picked === current.answer ? 'good' : 'bad'}`}>
            <b>{picked === current.answer ? 'Bonne réponse' : 'Pas tout à fait'}</b>
            <p>{current.explain}</p>
          </div>
        )}

        {answered && !exam && current.type === 'vf' && (
          <div className={`feedback ${picked === current.truth ? 'good' : 'bad'}`}>
            <b>{picked === current.truth ? 'Bonne réponse' : 'Pas tout à fait'}</b>
            <p>
              Cette affirmation est <strong>{current.truth ? 'vraie' : 'fausse'}</strong>.
            </p>
          </div>
        )}

        {current.type !== 'open' && answered && (
          <div className="run-actions">
            <button className="btn sun" onClick={next} autoFocus>
              {idx + 1 >= queue.length ? 'Voir mon résultat' : 'Suivant'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
