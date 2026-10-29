export interface Service {
  slug: string; // used as /diensten/{slug}/
  icon: string;
  tag: string;
  title: string;
  teaser: string;
}

export const services: Service[] = [
  {
    slug: 'huurrecht',
    icon: '🏠',
    tag: 'Huurrecht',
    title: 'Huurrecht & Wonen',
    teaser: 'Huurovereenkomsten, borg, onderhoud, servicekosten, VvE-zaken en burenrecht.',
  },
  {
    slug: 'kooprecht',
    icon: '📄',
    tag: 'Kooprecht',
    title: 'Kooprecht & Consumentenrecht',
    teaser: "Aan- en verkoop van woningen en auto's, wanprestatie, verborgen gebreken, aanneming van werk.",
  },
  {
    slug: 'overheid',
    icon: '🏛️',
    tag: 'Overheid',
    title: 'Overheid & Administratie',
    teaser: 'Vergunningen, bezwaarprocedures en administratieve zaken met gemeenten en instanties.',
  },
];
