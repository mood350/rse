'use client';

import type { FormEvent } from 'react';

const EMAIL = 'tanankouprince@icloud.com';

/** shortcut: site statique sans serveur, le message part via la messagerie du visiteur (mailto). Brancher un service de formulaire si besoin. */
export default function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get('message')}\n\n${f.get('nom')}${f.get('structure') ? ` (${f.get('structure')})` : ''}\n${f.get('email')}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(String(f.get('sujet')))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-row">
        <label>Nom complet<input name="nom" required autoComplete="name" /></label>
        <label>E-mail<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <label><span>Entreprise ou organisation <span className="muted">(facultatif)</span></span><input name="structure" autoComplete="organization" /></label>
      <label>Sujet
        <select name="sujet" defaultValue="Question sur la RSE">
          <option>Question sur la RSE</option>
          <option>Accompagnement d’une entreprise</option>
          <option>Partenariat</option>
          <option>Signaler une erreur sur le site</option>
          <option>Autre demande</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows={6} required /></label>
      <button type="submit" className="dj-btn">ENVOYER LE MESSAGE <span aria-hidden="true">↗</span></button>
      <p className="muted contact-note">Le bouton ouvre votre messagerie avec le message déjà rempli. Vous pouvez aussi écrire directement à <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </form>
  );
}
