// Service areas in four languages (card texts + detail page content).
// Slugs stay Dutch in every language so URLs line up: /diensten/huurrecht/, /en/diensten/huurrecht/.
import type { Lang } from './index';

export interface ServiceText {
  title: string;
  teaser: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  covers: string[];
  process: string[];
  faq: { q: string; a: string }[];
}

export const serviceSlugs = ["huurrecht", "kooprecht", "overheid"] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

export const serviceTexts: Record<Lang, Record<ServiceSlug, ServiceText>> = {
  "nl": {
    "huurrecht": {
      "title": "Huurrecht & Wonen",
      "teaser": "Huurovereenkomsten, borg, onderhoud, servicekosten, VvE-zaken en burenrecht.",
      "metaTitle": "Huurrecht Advocaat voor Expats in Den Haag | ExpatAid",
      "metaDescription": "Hulp bij huurgeschillen in Den Haag en Haaglanden: borg terugvorderen, onderhoudsklachten, servicekosten en VvE-zaken. Advies in het Nederlands, met vertaling in het Engels, Frans en Spaans.",
      "h1": "Huurrecht & Wonen voor Expats in The Hague",
      "intro": "Als expat in Nederland loop je sneller tegen onduidelijke huurcontracten of een lastige verhuurder aan, vaak zonder te weten wat je rechten zijn. ExpatAid helpt je helder en snel, met de mogelijkheid om te vertalen in het Engels, Frans of Spaans.",
      "covers": [
        "Controle en advies bij huurovereenkomsten voor woonruimte",
        "Geschillen tussen huurder en verhuurder (borg, onderhoud, servicekosten)",
        "Advies en bijstand bij VvE-zaken",
        "Burenrecht en overlastkwesties"
      ],
      "process": [
        "Korte intake (via het contactformulier of het spreekuur op vrijdag)",
        "Beoordeling van je huurcontract en de feiten van je situatie",
        "Duidelijk advies over je positie en de te volgen stappen",
        "Indien nodig: formele correspondentie of bemiddeling met de verhuurder"
      ],
      "faq": [
        {
          "q": "Hoeveel tijd heeft mijn verhuurder om mijn borg terug te betalen?",
          "a": "Er is geen wettelijke standaardtermijn, maar de verhuurder moet dit binnen een redelijke termijn doen na afloop van de huur en een eindinspectie. Bij onterecht uitstel kunnen wij namens jou aanmanen."
        },
        {
          "q": "Kan ik als expat zonder BSN al juridisch advies krijgen?",
          "a": "Ja. Een lopend huurgeschil staat los van je inschrijving bij de gemeente. We kunnen direct starten met de beoordeling van je situatie."
        }
      ]
    },
    "kooprecht": {
      "title": "Kooprecht & Consumentenrecht",
      "teaser": "Aan- en verkoop van woningen en auto's, wanprestatie, verborgen gebreken, aanneming van werk.",
      "metaTitle": "Kooprecht & Consumentenrecht Advies voor Expats | ExpatAid",
      "metaDescription": "Juridisch advies bij aankoop van woningen en auto's, verborgen gebreken, wanprestatie en geschillen met aannemers in Nederland.",
      "h1": "Kooprecht & Consumentenrecht",
      "intro": "Grote aankopen (een huis, een auto, een verbouwing) brengen risico's met zich mee die in Nederland anders geregeld zijn dan in je thuisland. Wij vertalen dat naar heldere, werkbare stappen.",
      "covers": [
        "Geschillen bij koop en verkoop van onroerend goed en roerende zaken (zoals auto's)",
        "Consumentenrecht, wanprestatie en verborgen gebreken",
        "Aanneming van werk: geschillen met aannemers, verbouwingen en opleveringen"
      ],
      "process": [
        "Beoordeling van het koopcontract of de aannemingsovereenkomst",
        "Vaststellen of er sprake is van wanprestatie of een verborgen gebrek",
        "Advies over schriftelijke ingebrekestelling en vervolgstappen",
        "Begeleiding richting oplossing of formele procedure"
      ],
      "faq": [
        {
          "q": "Wat als de aannemer het opleverpunt niet binnen de afgesproken termijn oplost?",
          "a": "Na een schriftelijke ingebrekestelling met een redelijke termijn kun je verdere stappen zetten, tot en met het inschakelen van een vervangende partij op kosten van de aannemer."
        }
      ]
    },
    "overheid": {
      "title": "Overheid & Administratie",
      "teaser": "Vergunningen, bezwaarprocedures en administratieve zaken met gemeenten en instanties.",
      "metaTitle": "Advies bij Vergunningen & Bezwaarprocedures | ExpatAid",
      "metaDescription": "Hulp bij vergunningen, bezwaar- en administratieve procedures bij gemeenten en instanties in Regio Haaglanden voor expats.",
      "h1": "Overheid & Administratie",
      "intro": "Nederlandse bureaucratie is voor iedereen ondoorzichtig, voor expats des te meer. Van vergunningsaanvragen tot bezwaarprocedures: wij zorgen dat je de juiste stappen op tijd zet.",
      "covers": [
        "Advies en bijstand bij vergunningen",
        "Geschillen met de overheid",
        "Administratieve procedures en correspondentie met overheidsinstanties"
      ],
      "process": [
        "Analyse van de beschikking of het besluit waar het om gaat",
        "Toetsing van de bezwaartermijn (vaak maar 6 weken, dus snel schakelen is essentieel)",
        "Opstellen en indienen van een onderbouwd bezwaarschrift",
        "Vertegenwoordiging tijdens een eventuele hoorzitting"
      ],
      "faq": [
        {
          "q": "Hoeveel tijd heb ik om bezwaar te maken tegen een besluit van de gemeente?",
          "a": "In de meeste gevallen geldt een termijn van zes weken vanaf de dag na bekendmaking van het besluit. Wacht niet: neem bij twijfel direct contact op."
        }
      ]
    }
  },
  "en": {
    "huurrecht": {
      "title": "Rent & Housing",
      "teaser": "Rental agreements, deposits, maintenance, service charges, owners' association (VvE) matters and neighbour law.",
      "metaTitle": "Tenancy Law Advice for Expats in The Hague | ExpatAid",
      "metaDescription": "Help with rental disputes in The Hague and Haaglanden: reclaiming your deposit, maintenance complaints, service charges and owners' association (VvE) matters. Advice in Dutch, with translation into English, French and Spanish.",
      "h1": "Rent & Housing for Expats in The Hague",
      "intro": "As an expat in the Netherlands, you are more likely to run into unclear rental contracts or a difficult landlord, often without knowing your rights. ExpatAid helps you clearly and quickly, with translation into English, French or Spanish available.",
      "covers": [
        "Review of and advice on residential rental agreements",
        "Disputes between tenant and landlord (deposit, maintenance, service charges)",
        "Advice and assistance with owners' association (VvE) matters",
        "Neighbour law and nuisance issues"
      ],
      "process": [
        "Short intake (via the contact form or the Friday walk-in hours)",
        "Review of your rental contract and the facts of your situation",
        "Clear advice on your position and the steps to take",
        "If needed: formal correspondence or mediation with the landlord"
      ],
      "faq": [
        {
          "q": "How long does my landlord have to return my deposit?",
          "a": "There is no standard statutory period, but the landlord must do so within a reasonable time after the tenancy ends and a final inspection has taken place. If the delay is unjustified, we can send a formal reminder on your behalf."
        },
        {
          "q": "Can I get legal advice as an expat without a BSN?",
          "a": "Yes. An ongoing rental dispute is separate from your registration with the municipality. We can start assessing your situation right away."
        }
      ]
    },
    "kooprecht": {
      "title": "Purchase & Consumer Law",
      "teaser": "Buying and selling homes and cars, breach of contract, hidden defects, construction contracts.",
      "metaTitle": "Purchase & Consumer Law Advice for Expats | ExpatAid",
      "metaDescription": "Legal advice on buying homes and cars, hidden defects, breach of contract and disputes with contractors in the Netherlands.",
      "h1": "Purchase & Consumer Law",
      "intro": "Large purchases (a house, a car, a renovation) carry risks that are regulated differently in the Netherlands than in your home country. We turn that into clear, workable steps.",
      "covers": [
        "Disputes over buying and selling real estate and movable property (such as cars)",
        "Consumer law, breach of contract and hidden defects",
        "Construction contracts: disputes with contractors, renovations and handovers"
      ],
      "process": [
        "Review of the purchase contract or construction agreement",
        "Establishing whether there is a breach of contract or a hidden defect",
        "Advice on a formal written notice of default and the next steps",
        "Guidance towards a solution or formal proceedings"
      ],
      "faq": [
        {
          "q": "What if the contractor does not fix a snag within the agreed period?",
          "a": "After a formal written notice of default with a reasonable deadline, you can take further steps, up to and including bringing in another party at the contractor's expense."
        }
      ]
    },
    "overheid": {
      "title": "Government & Administration",
      "teaser": "Permits, objection procedures and administrative matters with municipalities and authorities.",
      "metaTitle": "Advice on Permits & Objection Procedures | ExpatAid",
      "metaDescription": "Help for expats with permits, objection and administrative procedures with municipalities and authorities in the Haaglanden region.",
      "h1": "Government & Administration",
      "intro": "Dutch bureaucracy is opaque for everyone, and even more so for expats. From permit applications to objection procedures, we make sure you take the right steps in time.",
      "covers": [
        "Advice and assistance with permits",
        "Disputes with the government",
        "Administrative procedures and correspondence with government bodies"
      ],
      "process": [
        "Analysis of the decision concerned",
        "Checking the objection deadline (often only 6 weeks, so acting quickly is essential)",
        "Drafting and filing a well-founded notice of objection",
        "Representation at any hearing"
      ],
      "faq": [
        {
          "q": "How long do I have to object to a decision by the municipality?",
          "a": "In most cases the deadline is six weeks from the day after the decision was announced. Don't wait: if in doubt, contact us right away."
        }
      ]
    }
  },
  "es": {
    "huurrecht": {
      "title": "Alquiler y vivienda",
      "teaser": "Contratos de alquiler, fianza, mantenimiento, gastos de servicio, comunidades de propietarios (VvE) y relaciones de vecindad.",
      "metaTitle": "Asesoría en alquileres para expats en La Haya | ExpatAid",
      "metaDescription": "Ayuda con conflictos de alquiler en La Haya y Haaglanden: recuperar la fianza, quejas de mantenimiento, gastos de servicio y asuntos de la comunidad de propietarios (VvE). Asesoramiento en neerlandés, con traducción al inglés, francés y español.",
      "h1": "Alquiler y vivienda para expats en La Haya",
      "intro": "Como expat en los Países Bajos es más fácil toparse con contratos de alquiler poco claros o con un casero complicado, a menudo sin saber cuáles son tus derechos. ExpatAid te ayuda de forma clara y rápida, con posibilidad de traducción al inglés, francés o español.",
      "covers": [
        "Revisión y asesoramiento de contratos de alquiler de vivienda",
        "Conflictos entre inquilino y arrendador (fianza, mantenimiento, gastos de servicio)",
        "Asesoramiento y asistencia en asuntos de la comunidad de propietarios (VvE)",
        "Relaciones de vecindad y molestias"
      ],
      "process": [
        "Breve toma de contacto (a través del formulario de contacto o de la consulta de los viernes)",
        "Análisis de tu contrato de alquiler y de los hechos",
        "Asesoramiento claro sobre tu posición y los pasos a seguir",
        "Si hace falta: correspondencia formal o mediación con el arrendador"
      ],
      "faq": [
        {
          "q": "¿Cuánto tiempo tiene mi casero para devolverme la fianza?",
          "a": "No hay un plazo legal fijo, pero el arrendador debe hacerlo en un plazo razonable tras el fin del alquiler y la inspección final. Si el retraso no está justificado, podemos requerírselo en tu nombre."
        },
        {
          "q": "¿Puedo recibir asesoramiento jurídico como expat sin BSN?",
          "a": "Sí. Un conflicto de alquiler en curso no depende de tu inscripción en el ayuntamiento. Podemos empezar a analizar tu situación de inmediato."
        }
      ]
    },
    "kooprecht": {
      "title": "Compraventa y consumo",
      "teaser": "Compra y venta de viviendas y coches, incumplimiento de contrato, vicios ocultos, contratos de obra.",
      "metaTitle": "Asesoría en compraventa y consumo para expats | ExpatAid",
      "metaDescription": "Asesoramiento jurídico en la compra de viviendas y coches, vicios ocultos, incumplimientos y conflictos con constructores en los Países Bajos.",
      "h1": "Compraventa y consumo",
      "intro": "Las compras importantes (una casa, un coche, una reforma) conllevan riesgos que en los Países Bajos se regulan de forma distinta que en tu país. Nosotros lo convertimos en pasos claros y viables.",
      "covers": [
        "Conflictos en la compraventa de inmuebles y bienes muebles (como coches)",
        "Derecho del consumidor, incumplimiento de contrato y vicios ocultos",
        "Contratos de obra: conflictos con constructores, reformas y entregas"
      ],
      "process": [
        "Revisión del contrato de compraventa o de obra",
        "Determinar si hay incumplimiento o un vicio oculto",
        "Asesoramiento sobre el requerimiento formal por escrito y los siguientes pasos",
        "Acompañamiento hacia una solución o un procedimiento formal"
      ],
      "faq": [
        {
          "q": "¿Qué pasa si el constructor no resuelve un defecto de la entrega en el plazo acordado?",
          "a": "Tras un requerimiento formal por escrito con un plazo razonable, puedes dar más pasos, incluso encargar el trabajo a otra empresa a cargo del constructor."
        }
      ]
    },
    "overheid": {
      "title": "Administración y trámites",
      "teaser": "Permisos, recursos y trámites administrativos con ayuntamientos y organismos.",
      "metaTitle": "Asesoría en permisos y recursos administrativos | ExpatAid",
      "metaDescription": "Ayuda para expats con permisos, recursos y procedimientos administrativos ante ayuntamientos y organismos de la región de Haaglanden.",
      "h1": "Administración y trámites",
      "intro": "La burocracia neerlandesa es poco transparente para todos, y aún más para los expats. Desde solicitudes de permisos hasta recursos administrativos: nos aseguramos de que des los pasos correctos a tiempo.",
      "covers": [
        "Asesoramiento y asistencia con permisos",
        "Conflictos con la administración",
        "Procedimientos administrativos y correspondencia con organismos públicos"
      ],
      "process": [
        "Análisis de la resolución o decisión en cuestión",
        "Comprobación del plazo para recurrir (a menudo solo 6 semanas, así que actuar rápido es esencial)",
        "Redacción y presentación de un recurso bien fundamentado",
        "Representación en una posible audiencia"
      ],
      "faq": [
        {
          "q": "¿Cuánto tiempo tengo para recurrir una decisión del ayuntamiento?",
          "a": "En la mayoría de los casos, el plazo es de seis semanas a partir del día siguiente a la notificación de la decisión. No esperes: si tienes dudas, contáctanos enseguida."
        }
      ]
    }
  },
  "fr": {
    "huurrecht": {
      "title": "Location et logement",
      "teaser": "Baux, dépôt de garantie, entretien, charges, copropriété (VvE) et relations de voisinage.",
      "metaTitle": "Conseil en droit locatif pour expatriés à La Haye | ExpatAid",
      "metaDescription": "Aide pour les litiges locatifs à La Haye et à Haaglanden : récupérer votre dépôt de garantie, problèmes d'entretien, charges et questions de copropriété (VvE). Conseil en néerlandais, avec traduction en anglais, français et espagnol.",
      "h1": "Location et logement pour expatriés à La Haye",
      "intro": "En tant qu'expatrié aux Pays-Bas, vous êtes plus exposé à des contrats de location peu clairs ou à un propriétaire difficile, souvent sans connaître vos droits. ExpatAid vous aide de façon claire et rapide, avec une traduction possible en anglais, français ou espagnol.",
      "covers": [
        "Vérification et conseil pour les baux d'habitation",
        "Litiges entre locataire et bailleur (dépôt de garantie, entretien, charges)",
        "Conseil et assistance pour les questions de copropriété (VvE)",
        "Relations de voisinage et nuisances"
      ],
      "process": [
        "Bref premier contact (via le formulaire de contact ou la permanence du vendredi)",
        "Analyse de votre bail et des faits de votre situation",
        "Un avis clair sur votre position et les démarches à suivre",
        "Si nécessaire : correspondance formelle ou médiation avec le bailleur"
      ],
      "faq": [
        {
          "q": "De combien de temps mon propriétaire dispose-t-il pour me rendre mon dépôt de garantie ?",
          "a": "Il n'existe pas de délai légal standard, mais le bailleur doit le faire dans un délai raisonnable après la fin du bail et l'état des lieux de sortie. En cas de retard injustifié, nous pouvons le mettre en demeure en votre nom."
        },
        {
          "q": "Puis-je obtenir un conseil juridique en tant qu'expatrié sans BSN ?",
          "a": "Oui. Un litige locatif en cours ne dépend pas de votre inscription à la commune. Nous pouvons commencer immédiatement à analyser votre situation."
        }
      ]
    },
    "kooprecht": {
      "title": "Achat et consommation",
      "teaser": "Achat et vente de logements et de voitures, inexécution, vices cachés, contrats d'entreprise.",
      "metaTitle": "Conseil en droit de la vente et de la consommation | ExpatAid",
      "metaDescription": "Conseil juridique pour l'achat de logements et de voitures, les vices cachés, l'inexécution et les litiges avec les entrepreneurs aux Pays-Bas.",
      "h1": "Achat et consommation",
      "intro": "Les achats importants (une maison, une voiture, des travaux) comportent des risques réglementés différemment aux Pays-Bas que dans votre pays d'origine. Nous les traduisons en étapes claires et réalisables.",
      "covers": [
        "Litiges liés à l'achat et à la vente de biens immobiliers et mobiliers (comme les voitures)",
        "Droit de la consommation, inexécution du contrat et vices cachés",
        "Contrats d'entreprise : litiges avec des entrepreneurs, travaux de rénovation et réceptions de chantier"
      ],
      "process": [
        "Analyse du contrat de vente ou du contrat d'entreprise",
        "Déterminer s'il y a inexécution ou vice caché",
        "Conseil sur la mise en demeure écrite et les étapes suivantes",
        "Accompagnement vers une solution ou une procédure formelle"
      ],
      "faq": [
        {
          "q": "Que faire si l'entrepreneur ne corrige pas une réserve dans le délai convenu ?",
          "a": "Après une mise en demeure écrite assortie d'un délai raisonnable, vous pouvez aller plus loin, jusqu'à faire appel à une autre entreprise aux frais de l'entrepreneur."
        }
      ]
    },
    "overheid": {
      "title": "Administration et démarches",
      "teaser": "Permis, recours et démarches administratives auprès des communes et des administrations.",
      "metaTitle": "Conseil en permis et recours administratifs | ExpatAid",
      "metaDescription": "Aide aux expatriés pour les permis, recours et procédures administratives auprès des communes et administrations de la région de Haaglanden.",
      "h1": "Administration et démarches",
      "intro": "La bureaucratie néerlandaise est opaque pour tout le monde, et plus encore pour les expatriés. De la demande de permis au recours administratif, nous veillons à ce que vous fassiez les bonnes démarches à temps.",
      "covers": [
        "Conseil et assistance pour les permis",
        "Litiges avec l'administration",
        "Procédures administratives et correspondance avec les administrations"
      ],
      "process": [
        "Analyse de la décision concernée",
        "Vérification du délai de recours (souvent 6 semaines seulement, il faut donc agir vite)",
        "Rédaction et dépôt d'un recours motivé",
        "Représentation lors d'une éventuelle audition"
      ],
      "faq": [
        {
          "q": "De combien de temps est-ce que je dispose pour contester une décision de la commune ?",
          "a": "Dans la plupart des cas, le délai est de six semaines à compter du lendemain de la publication de la décision. N'attendez pas : en cas de doute, contactez-nous tout de suite."
        }
      ]
    }
  }
};

export const servicesFor = (lang: Lang) => serviceSlugs.map((slug) => ({ slug, ...serviceTexts[lang][slug] }));
