export interface ServiceContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  covers: string[];
  process: string[];
  faq: { q: string; a: string }[];
}

export const serviceContent: Record<string, ServiceContent> = {
  huurrecht: {
    slug: 'huurrecht',
    metaTitle: 'Huurrecht Advocaat voor Expats in Den Haag | ExpatEase',
    metaDescription:
      'Hulp bij huurgeschillen in Den Haag en Haaglanden: borg terugvorderen, onderhoudsklachten, servicekosten en VvE-zaken. Advies in het Nederlands, Engels, Spaans en Frans.',
    h1: 'Huurrecht & Wonen voor Expats in The Hague',
    intro:
      'Als expat in Nederland loop je sneller tegen onduidelijke huurcontracten of een lastige verhuurder aan, vaak zonder te weten wat je rechten zijn. ExpatEase helpt je helder en snel, in jouw eigen taal.',
    covers: [
      'Controle en advies bij huurovereenkomsten voor woonruimte',
      'Geschillen tussen huurder en verhuurder (borg, onderhoud, servicekosten)',
      'Advies en bijstand bij VvE-zaken',
      'Burenrecht en overlastkwesties',
    ],
    process: [
      'Korte intake (via het triage-formulier of Spreekuur op vrijdag)',
      'Beoordeling van je huurcontract en de feiten van je situatie',
      'Duidelijk advies over je positie en de te volgen stappen',
      'Indien nodig: formele correspondentie of bemiddeling met de verhuurder',
    ],
    faq: [
      {
        q: 'Hoeveel tijd heeft mijn verhuurder om mijn borg terug te betalen?',
        a: 'Er is geen wettelijke standaardtermijn, maar de verhuurder moet dit binnen een redelijke termijn doen na afloop van de huur en een eindinspectie. Bij onterecht uitstel kunnen wij namens jou aanmanen.',
      },
      {
        q: 'Kan ik als expat zonder BSN al juridisch advies krijgen?',
        a: 'Ja. Een lopend huurgeschil staat los van je inschrijving bij de gemeente. We kunnen direct starten met de beoordeling van je situatie.',
      },
    ],
  },
  kooprecht: {
    slug: 'kooprecht',
    metaTitle: 'Kooprecht & Consumentenrecht Advies voor Expats | ExpatEase',
    metaDescription:
      'Juridisch advies bij aankoop van woningen en auto\'s, verborgen gebreken, wanprestatie en geschillen met aannemers in Nederland.',
    h1: 'Kooprecht & Consumentenrecht',
    intro:
      'Grote aankopen (een huis, een auto, een verbouwing) brengen risico\'s met zich mee die in Nederland anders geregeld zijn dan in je thuisland. Wij vertalen dat naar heldere, werkbare stappen.',
    covers: [
      "Geschillen bij koop en verkoop van onroerend goed en roerende zaken (zoals auto's)",
      'Consumentenrecht, wanprestatie en verborgen gebreken',
      'Aanneming van werk: geschillen met aannemers, verbouwingen en opleveringen',
    ],
    process: [
      'Beoordeling van het koopcontract of de aannemingsovereenkomst',
      'Vaststellen of er sprake is van wanprestatie of een verborgen gebrek',
      'Advies over schriftelijke ingebrekestelling en vervolgstappen',
      'Begeleiding richting oplossing of formele procedure',
    ],
    faq: [
      {
        q: 'Wat als de aannemer het opleverpunt niet binnen de afgesproken termijn oplost?',
        a: 'Na een schriftelijke ingebrekestelling met een redelijke termijn kun je verdere stappen zetten, tot en met het inschakelen van een vervangende partij op kosten van de aannemer.',
      },
    ],
  },
  overheid: {
    slug: 'overheid',
    metaTitle: 'Advies bij Vergunningen & Bezwaarprocedures | ExpatEase',
    metaDescription:
      'Hulp bij vergunningen, bezwaar- en administratieve procedures bij gemeenten en instanties in Regio Haaglanden voor expats.',
    h1: 'Overheid & Administratie',
    intro:
      'Nederlandse bureaucratie is voor iedereen ondoorzichtig, voor expats des te meer. Van vergunningsaanvragen tot bezwaarprocedures: wij zorgen dat je de juiste stappen op tijd zet.',
    covers: [
      'Advies en bijstand bij vergunningen',
      'Bezwaarprocedures bij gemeenten en instanties',
      'Administratieve procedures en correspondentie met overheidsinstanties',
    ],
    process: [
      'Analyse van de beschikking of het besluit waar het om gaat',
      'Toetsing van de bezwaartermijn (vaak maar 6 weken, dus snel schakelen is essentieel)',
      'Opstellen en indienen van een onderbouwd bezwaarschrift',
      'Vertegenwoordiging tijdens een eventuele hoorzitting',
    ],
    faq: [
      {
        q: 'Hoeveel tijd heb ik om bezwaar te maken tegen een besluit van de gemeente?',
        a: 'In de meeste gevallen geldt een termijn van zes weken vanaf de dag na bekendmaking van het besluit. Wacht niet: neem bij twijfel direct contact op.',
      },
    ],
  },
};
