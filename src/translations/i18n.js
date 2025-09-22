import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  it: {
    translation: {
      // NAVBAR
      "home": "Home",
      "works": "Opere eseguite",
      "about": "Chi siamo",
      "contact": "Contatti",
      "language": "Lingua",
  
      // HOME
      "naples_airport": "Aeroporto Internazionale di Napoli",
      "salerno_airport": "Aeroporto Internazionale di Salerno",
      "works_button": "Le nostre opere",
  
      // WORKS
      "works_header": "Opere eseguite",
      "work_at": "Realizzato presso",
      "discover_more": "Di più",

      // CONTACT
      "contact_header": "Contattaci",
      "phone": "Telefono",
      "danilo_name": "Danilo Paulillo",
      "giulio_name": "Giulio Paulillo",
      "danilo_role": "Ingegnere",
      "giulio_role": "Geometra",
      "gd_contact": "Contatta l'azienda",
      "contact_us": "Scrivici o chiamaci per maggiori informazioni",
      "contact_map": "Ci troviamo qui",

      "ascensore_title" : "Ascensore Partenze Landside",
      "ascensore_subtitle" : "Aeroporto Internazionale di Napoli - Capodichino",
      "ascensore_description": "Incarico ricevuto da Ge.S.A.C. S.p.A. per la Direzione Lavori e Coordinamento della Sicurezza in fase di esecuzione.",

      "uffici_airfield_title" : "Manutenzione Straordinaria Uffici Airfield",
      "uffici_airfield_subtitle" : "Aeroporto Internazionale di Napoli - Capodichino",
      "uffici_airfield_description": "Incarico ricevuto da Ge.S.A.C. S.p.A. per la Progettazione Esecutiva, Direzione Lavori e Coordinamento della Sicurezza in fase di esecuzione.",

      "controlroom_hbs_title" : "Ristrutturazione interna Control Room HBS",
      "controlroom_hbs_subtitle" : "Aeroporto Internazionale di Napoli - Capodichino",
      "controlroom_hbs_description": "Incarico ricevuto da Ge.S.A.C. S.p.A. per la Progettazione Esecutiva, Direzione Lavori e Coordinamento della Sicurezza in fase di esecuzione.",

      "condotta_sottomarina_title" : "Condotta Sottomarina",
      "condotta_sottomarina_subtitle" : "Capaccio (SA)",
      "condotta_sottomarina_description": "Incarico ricevuto per la Direzione Operativa di Cantiere",
  
      // ABOUT
      "about_us_header": "Chi siamo",
      "about_us_section1": "è una società di ingegneria che fonda la propria identità sull’innovazione, la competenza tecnica e l’impegno costante verso l’eccellenza. Da anni operiamo nel settore offrendo soluzioni ingegneristiche su misura, capaci di coniugare creatività progettuale, rigore metodologico e padronanza delle tecnologie più avanzate.",
      "about_us_section2": "Ogni incarico rappresenta per noi una sfida unica. Grazie a un approccio analitico e multidisciplinare, siamo in grado di pianificare e sviluppare soluzioni tecniche complesse, superando le aspettative dei nostri clienti e garantendo il rispetto di tempi e budget.",
      "about_us_section3": "Collaboriamo con realtà private e pubbliche, fornendo una gamma completa di servizi che spaziano dalla progettazione alla direzione lavori, fino alla gestione integrata dei cantieri.",
      "about_us_section4": "In un contesto in continua evoluzione, investiamo costantemente nella formazione del nostro team e nell’adozione di strumenti innovativi, con l’obiettivo di anticipare le esigenze del mercato e promuovere una cultura del progresso sostenibile. Il rispetto per l’ambiente e per le persone è al centro di ogni nostra scelta.",
      "about_us_section5": "Guardiamo al futuro con determinazione, consapevoli che il nostro lavoro quotidiano contribuisce a costruire un domani più responsabile, efficiente e tecnologicamente avanzato.",
      "about_us_section6": "Dopotutto,",
      "about_us_catchphrase": "anche i grattacieli nascono da piccoli pezzi di carta.",
    }
  },
  en: {
    translation: {
      "home": "Home",
      "works": "Our works",
      "about": "About us",
      "contact": "Contact",
      "language": "Language",
  
      // HOME
      "naples_airport": "Naples International Airport",
      "salerno_airport": "Salerno International Airport",
      "works_button": "Our works",
  
      // WORKS
      "works_header": "Our works",
      "work_at": "Made at",
      "discover_more": "Discover more",

      // CONTACT
      "contact_header": "Contact us",
      "phone": "Phone",
      "danilo_name": "Danilo Paulillo",
      "giulio_name": "Giulio Paulillo",
      "danilo_role": "Engineer",
      "giulio_role": "Surveyor",
      "gd_contact": "Contact the company",
      "contact_us": "Write or call us for more information",
      "contact_map": "We are here",

      "ascensore_title" : "Landside Departures Elevator",
      "ascensore_subtitle" : "Naples International Airport - Capodichino",
      "ascensore_description": "Assignment received from Ge.S.A.C. S.p.A. for Construction Supervision and Safety Coordination during execution.",

      "uffici_airfield_title" : "Special Maintenance Airfield Offices",
      "uffici_airfield_subtitle" : "Naples International Airport - Capodichino",
      "uffici_airfield_description": "Assignment received from Ge.S.A.C. S.p.A. for Executive Design, Construction Supervision and Safety Coordination during execution.",

      "controlroom_hbs_title" : "Interior renovation Control Room HBS",
      "controlroom_hbs_subtitle" : "Naples International Airport - Capodichino",
      "controlroom_hbs_description": "Assignment received from Ge.S.A.C. S.p.A. for Executive Design, Construction Supervision and Safety Coordination during execution.",

      "condotta_sottomarina_title" : "Submarine pipeline",
      "condotta_sottomarina_subtitle" : "Capaccio (SA)",
      "condotta_sottomarina_description": "Assignment received for Site Operational Management",
  
      // ABOUT
      "about_us_header": "About us",
      "about_us_section1": "is an engineering company that builds its identity on innovation, technical expertise, and a constant commitment to excellence. For years, we have operated in the sector offering tailor-made engineering solutions that combine design creativity, methodological rigor, and mastery of the most advanced technologies.",
      "about_us_section2": "Every assignment represents a unique challenge for us. Thanks to an analytical and multidisciplinary approach, we are able to plan and develop complex technical solutions, exceeding our clients' expectations while ensuring compliance with timelines and budgets.",
      "about_us_section3": "We collaborate with both private and public entities, providing a full range of services from design to construction management, all the way to integrated site supervision.",
      "about_us_section4": "In a constantly evolving context, we continuously invest in training our team and adopting innovative tools, with the aim of anticipating market needs and promoting a culture of sustainable progress. Respect for the environment and for people is at the heart of every decision we make.",
      "about_us_section5": "We look to the future with determination, aware that our daily work helps build a more responsible, efficient, and technologically advanced tomorrow.",
      "about_us_section6": "After all,",
      "about_us_catchphrase": "even skyscrapers were born from some little pieces of paper.",
    }
  }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['it', 'en'],
    resources,
    fallbackLng: 'it',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;