import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Photo from '@/components/Photo';
import HeroCards from '@/components/HeroCards';
import Counter from '@/components/Counter';
import { HeroFx, SplitTitle } from '@/components/HeroFx';
import { ODD } from '@/data/odd';
import { ALL_ITEMS } from '@/lib/quiz';
import { SECTIONS } from '@/data/sections';
import { NORMES } from '@/data/normes';

export default function Home() {
  const total = ALL_ITEMS.length;
  const offers = [
    {
      n: '01',
      title: 'Le développement durable',
      sub: '30 minutes pour comprendre l’essentiel',
      body: [
        'Le développement durable répond aux besoins d’aujourd’hui sans compromettre ceux des générations futures. Il repose sur trois piliers : l’économie, le social et l’environnement.',
        'Cette page présente l’histoire du concept, l’Agenda 2030 et les 17 Objectifs de développement durable, avec des exemples concrets pour une entreprise.',
      ],
      cta: 'Pour bien démarrer, commencez par cette première étape.',
      href: '/developpement-durable',
      label: 'LIRE LA PAGE',
      stat: '3 piliers · 17 ODD',
    },
    {
      n: '02',
      title: 'La RSE et les normes',
      sub: 'Les règles du jeu, expliquées simplement',
      body: [
        'La RSE est la contribution volontaire des entreprises aux enjeux du développement durable. Elle s’appuie sur des normes reconnues, comme l’ISO 26000, l’ISO 14001 ou la SA8000.',
        'Vous découvrirez à quoi sert chaque norme, qui peut l’obtenir et comment la reconnaître, des labels aux outils de reporting.',
      ],
      cta: 'Deux pages pour tout comprendre, sans jargon.',
      href: '/rse',
      label: 'DÉCOUVRIR LA RSE',
      stat: `${NORMES.length} normes et labels`,
    },
    {
      n: '03',
      title: 'Passer à l’action',
      sub: '6 étapes pour démarrer dans votre entreprise',
      body: [
        'Intégrer la RSE ne demande pas de tout changer d’un coup. On commence par l’existant, on choisit quelques priorités et on avance pas à pas.',
        'Le guide propose une démarche en six étapes, des outils simples et une liste de contrôle à cocher au fur et à mesure.',
      ],
      cta: 'Prenez le temps de cocher chaque étape.',
      href: '/mise-en-oeuvre',
      label: 'VOIR LE GUIDE',
      stat: '6 étapes · 1 checklist',
    },
    {
      n: '04',
      title: 'S’entraîner',
      sub: 'Un cours, puis des questions du plus facile au plus difficile',
      body: [
        `Pour chacun des ${SECTIONS.length} thèmes, lisez le cours puis testez-vous avec des QCM, des Vrai ou faux et des cartes mémoire.`,
        'Un examen blanc de 30 questions chronométrées permet de se mettre en conditions. Vos résultats restent sur votre appareil.',
      ],
      cta: 'Chaque bonne réponse vous rapproche de la réussite.',
      href: '/apprentissage',
      label: 'COMMENCER L’ENTRAÎNEMENT',
      stat: `${total} questions · ${SECTIONS.length} thèmes`,
    },
  ];

  const themes = [
    { key: 'rse', title: 'RSE', photo: 'team' },
    { key: 'climat', title: 'Climat et énergie', photo: 'solar' },
    { key: 'circulaire', title: 'Économie circulaire', photo: 'waste' },
    { key: 'ess', title: 'Économie sociale et solidaire', photo: 'market' },
    { key: 'avantages', title: 'Avantages de la RSE', photo: 'farmer' },
    { key: 'parties', title: 'Parties prenantes', photo: 'group' },
  ] as const;

  return (
    <>
      {/* HERO */}
      <section className="dj-hero">
        <HeroFx />
        <div className="container dj-hero-inner">
          <div>
            <p className="hero-kicker">Développement durable · RSE · Normes</p>
            <SplitTitle text="Inspirer de nouvelles générations d’entrepreneurs" accent="responsables" />
            <p className="hero-lead">Un portail pour comprendre, appliquer et maîtriser la responsabilité sociétale des entreprises au Togo.</p>
          </div>
          <HeroCards />
        </div>
      </section>

      {/* BANDEAU ODD */}
      <div className="odd-marquee" aria-label="Les 17 Objectifs de développement durable">
        <div className="odd-track">
          {[...ODD, ...ODD].map((o, i) => (
            <span key={i} className="odd-chip" style={{ ['--c' as string]: o.color }} aria-hidden={i >= ODD.length || undefined}>
              <b>{o.n}</b>{o.title}
            </span>
          ))}
        </div>
      </div>

      {/* QU'EST-CE QUE LA RSE */}
      <section className="dj-section">
        <div className="container dj-two">
          <Reveal>
            <h2 className="dj-h2">Qu’est-ce que la RSE ?</h2>
          </Reveal>
          <Reveal>
            <p className="dj-text">
              La RSE, ou responsabilité sociétale des entreprises, est un engagement volontaire : celui de tenir compte des
              personnes et de la planète dans chaque décision, en plus du profit. Une entreprise responsable se demande ce que
              son activité change pour ses salariés, ses clients, ses fournisseurs et son voisinage. Elle réduit ses déchets et
              sa consommation d’énergie, traite équitablement ses équipes et agit avec transparence. Ce n’est pas un luxe
              réservé aux grands groupes : une petite entreprise togolaise peut commencer par des gestes simples. Et ces
              gestes, bien menés, améliorent à la fois la réputation, la confiance et les résultats.
            </p>
            <p className="dj-text">
              Ce site vous accompagne pas à pas : comprendre les notions de base, découvrir les normes en vigueur, puis vous
              entraîner. Il est ouvert à tous, sans prérequis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="dj-section kpi-section">
        <div className="container kpi-grid">
          <Counter to={17} label="Objectifs de développement durable" color="var(--tg-green)" />
          <Counter to={NORMES.length} label="Normes et labels expliqués" color="var(--tg-yellow)" />
          <Counter to={SECTIONS.length} label="Thèmes d’entraînement" color="var(--leaf)" />
          <Counter to={total} label="Questions pour s’exercer" color="var(--tg-red)" />
        </div>
      </section>

      {/* MISSION */}
      <section className="dj-mission-band">
        <Photo name="team" width={2000} />
        <div className="container dj-mission-inner">
          <h3>Guidé par une mission</h3>
          <p>Aider chaque entreprise, grande ou petite, à créer de la valeur tout en respectant les personnes et la planète.</p>
        </div>
      </section>

      {/* OFFRES */}
      <section className="dj-section">
        <div className="container">
          <h2 className="dj-h2">Au programme</h2>
          {offers.map((o) => (
            <Reveal key={o.n}>
              <article className="dj-offer">
                <span className="dj-num">{o.n}</span>
                <div className="dj-offer-body">
                  <h3>{o.title}</h3>
                  <p className="dj-sub">{o.sub}</p>
                  {o.body.map((t) => (
                    <p key={t} className="dj-text">{t}</p>
                  ))}
                  <p className="dj-text">{o.cta}</p>
                  <Link href={o.href} className="dj-btn">
                    {o.label} <span aria-hidden="true">↗</span>
                  </Link>
                  <p className="dj-stat">{o.stat}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* THEMES */}
      <section className="dj-section">
        <div className="container">
          <Reveal>
            <h2 className="dj-h2 tight-h">Thèmes d’entraînement</h2>
            <p className="dj-lead">Des sujets clés pour passer de la théorie à la pratique.</p>
          </Reveal>
          <div className="dj-grid">
            {themes.map((t, i) => (
              <Reveal key={t.key} className="pop" delay={(i % 3) * 110}>
                <Link href={`/apprentissage/${t.key}`} className="dj-photo-card">
                  <Photo name={t.photo} width={900} />
                  <span className="dj-photo-title">{t.title}</span>
                  <span className="dj-photo-more">En savoir plus ↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="dj-all"><Link href="/apprentissage" className="dj-btn">VOIR LES {SECTIONS.length} THÈMES <span aria-hidden="true">↗</span></Link></p>
        </div>
      </section>
    </>
  );
}
