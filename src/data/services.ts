export interface Service {
  slug: string; // used as /diensten/{slug}/
  icon: string;
  tag: string;
  title: string;
  teaser: string;
  testimonial: string;
}

export const services: Service[] = [
  {
    slug: 'huurrecht',
    icon: '🏠',
    tag: 'Huurrecht',
    title: 'Huurrecht & Wonen',
    teaser: 'Huurovereenkomsten, borg, onderhoud, servicekosten, VvE-zaken en burenrecht.',
    testimonial: '"Kreeg mijn borg van €1.500 binnen twee weken terug." — Carlos M.',
  },
  {
    slug: 'kooprecht',
    icon: '📄',
    tag: 'Kooprecht',
    title: 'Kooprecht & Consumentenrecht',
    teaser: "Aan- en verkoop van woningen en auto's, wanprestatie, verborgen gebreken, aanneming van werk.",
    testimonial: '"Duidelijk advies over mijn verbouwingsgeschil." — Anna K.',
  },
  {
    slug: 'overheid',
    icon: '🏛️',
    tag: 'Overheid',
    title: 'Overheid & Administratie',
    teaser: 'Vergunningen, bezwaarprocedures en administratieve zaken met gemeenten en instanties.',
    testimonial: '"Eindelijk iemand die de gemeente-procedures uitlegde." — Marc D.',
  },
];
