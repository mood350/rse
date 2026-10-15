import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Une question sur la RSE, un projet d’accompagnement ou un partenariat ? Écrivez-nous.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Nous écrire"
        crumb="Contact"
        photo="group"
        title="Parlons de votre démarche durable"
        lead="Une question sur la RSE, un projet d’accompagnement ou un partenariat ? Écrivez-nous, nous vous répondons rapidement."
      />
      <section className="section">
        <div className="container contact-grid">
          <Reveal className="head">
            <span className="eyebrow">Coordonnées</span>
            <h2>Restons en contact</h2>
            <ul className="contact-info">
              <li><b>E-mail</b><a href="mailto:tanankouprince@icloud.com">tanankouprince@icloud.com</a></li>
              <li><b>Localisation</b>Lomé, Togo</li>
              <li><b>Réponse</b>Sous 48 heures ouvrées</li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
