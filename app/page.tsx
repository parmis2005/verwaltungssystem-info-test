import {
  ArrowRight,
  BadgeCheck,
  BarChart2,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ClipboardList,
  Clock,
  DatabaseZap,
  FileCheck2,
  Files,
  LayoutDashboard,
  Layers,
  Lock,
  MessageSquareText,
  Network,
  Plus,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Target,
  TrendingUp,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

const NAV = [
  { label: "Angebot", href: "#angebot" },
  { label: "Grundlagen", href: "#grundlagen" },
  { label: "Faktoren", href: "#faktoren" },
  { label: "Module", href: "#optimierung" },
  { label: "Prozess", href: "#prozess" },
  { label: "Tools", href: "#tools" },
  { label: "FAQ", href: "#faq" },
];

const FACTORS = [
  {
    Icon: DatabaseZap,
    title: "Saubere Datenbasis",
    text: "Ein gutes Verwaltungssystem bündelt Kundendaten, Dokumente, Aufgaben und Statuswerte strukturiert. Dadurch entstehen weniger Dubletten, weniger Suchaufwand und verlässlichere Entscheidungen.",
  },
  {
    Icon: Workflow,
    title: "Klare Prozesslogik",
    text: "Wiederkehrende Abläufe werden nicht jedes Mal neu improvisiert. Zustände, Verantwortlichkeiten, Freigaben und nächste Schritte sind für alle Beteiligten nachvollziehbar.",
  },
  {
    Icon: Lock,
    title: "Rollen & Sicherheit",
    text: "Nicht jede Person braucht Zugriff auf alles. Berechtigungen, sensible Daten, Änderungsverläufe und sichere Ablage gehören deshalb von Anfang an zur Systemstruktur.",
  },
];

const BASICS = [
  { Icon: LayoutDashboard, title: "Zentrale Übersicht", text: "Wichtige Vorgänge liegen nicht mehr verstreut in Tabellen, E-Mails und einzelnen Tools." },
  { Icon: Zap, title: "Weniger Handarbeit", text: "Routineaufgaben, Erinnerungen und Statuswechsel können standardisiert oder automatisiert werden." },
  { Icon: Target, title: "Klare Zuständigkeit", text: "Jeder Vorgang hat einen Status, eine verantwortliche Person und den nächsten Schritt." },
  { Icon: TrendingUp, title: "Skalierbare Abläufe", text: "Wenn mehr Kunden, Dokumente oder Anfragen dazukommen, bleibt die Verwaltung steuerbar." },
];

const OFFER = [
  {
    Icon: ShieldCheck,
    title: "Prozessanalyse",
    text: "Wir prüfen bestehende Abläufe, Engpässe, Rollen und Datenquellen. Daraus entsteht eine klare Prioritätenliste statt einer unübersichtlichen Wunschliste.",
  },
  {
    Icon: Layers,
    title: "Systemstruktur",
    text: "Wir planen Module, Datenfelder, Rechte, Statuslogik und Verknüpfungen so, dass das System zum echten Arbeitsalltag passt.",
  },
  {
    Icon: Workflow,
    title: "Umsetzung",
    text: "Wir entwickeln zentrale Funktionen für Kontakte, Aufgaben, Dokumente, Rechnungen, Termine und interne Freigaben.",
  },
  {
    Icon: BarChart2,
    title: "Betreuung & Auswertung",
    text: "Wir machen Fortschritte, offene Aufgaben, Engpässe und Nutzungsverhalten sichtbar und entwickeln das System gezielt weiter.",
  },
];

const SECONDARY_FACTORS = [
  { Icon: Smartphone, label: "Mobile nutzbar" },
  { Icon: Lock, label: "Rollen & Rechte" },
  { Icon: Clock, label: "Fristen & Wiedervorlagen" },
  { Icon: Files, label: "Dokumentenlogik" },
  { Icon: RefreshCw, label: "Automationen" },
  { Icon: MessageSquareText, label: "Klare Kommunikation" },
];

const MODULES = [
  { n: "01", title: "Kunden & Kontakte", text: "Kontaktdaten, Verlauf, Ansprechpartner, Notizen und Aufgaben werden an einem Ort gepflegt." },
  { n: "02", title: "Dokumente", text: "Verträge, Nachweise, Vorlagen und Dateien sind auffindbar, versionierbar und sauber zugeordnet." },
  { n: "03", title: "Aufgaben & Fristen", text: "Wiedervorlagen, interne To-dos, Termine und Eskalationen bleiben für Teams sichtbar." },
  { n: "04", title: "Angebote & Rechnungen", text: "Angebote, Rechnungen, Zahlungsstatus und Freigaben können strukturiert vorbereitet werden." },
  { n: "05", title: "Reporting", text: "Kennzahlen zeigen offene Vorgänge, Durchlaufzeiten, Umsatz, Auslastung und Engpässe." },
];

const OPERATIONS = [
  { Icon: UsersRound, title: "Akzeptanz im Team", text: "Ein System wirkt nur, wenn es im Alltag verständlich bleibt. Deshalb achten wir auf klare Masken, sinnvolle Pflichtfelder und kurze Wege." },
  { Icon: Network, title: "Schnittstellen", text: "Bestehende Tools müssen nicht immer ersetzt werden. Gute Systeme verbinden Kalender, Formulare, Dateien oder CRM-Daten dort, wo es Nutzen bringt." },
  { Icon: BadgeCheck, title: "Datenpflege", text: "Klare Regeln für Felder, Statuswerte und Verantwortlichkeiten verhindern, dass das System nach kurzer Zeit wieder unübersichtlich wird." },
];

const PRACTICE = [
  { Icon: BriefcaseBusiness, title: "Dienstleister", text: "Anfragen, Kunden, Angebote, Termine und Projektstände lassen sich zentral steuern." },
  { Icon: ClipboardList, title: "Vereine & Bildung", text: "Mitglieder, Kurse, Nachweise, Dokumente und Fristen bleiben nachvollziehbar organisiert." },
  { Icon: UsersRound, title: "Backoffice-Teams", text: "Interne Aufgaben, Freigaben und wiederkehrende Verwaltungsprozesse werden transparenter." },
  { Icon: CalendarDays, title: "Vertrieb & Service", text: "Kontaktverlauf, Wiedervorlagen und offene Anliegen sind schneller verfügbar." },
];

const ERRORS = [
  { Icon: Files, title: "Zu viele Insellösungen", text: "Wenn Daten in E-Mails, Tabellen, Chats und Ordnern verteilt sind, entsteht doppelte Arbeit." },
  { Icon: UsersRound, title: "Prozesse nur im Kopf", text: "Abläufe, die nur einzelne Personen kennen, werden bei Wachstum schnell zum Risiko." },
  { Icon: Lock, title: "Rechte zu spät planen", text: "Berechtigungen, sensible Daten und Rollen müssen früh bedacht werden, damit das System sicher bleibt." },
  { Icon: BarChart2, title: "Reporting ignorieren", text: "Ohne Kennzahlen bleiben Engpässe unsichtbar und Verbesserungen werden nach Gefühl priorisiert." },
];

const PROCESS = [
  { n: "01", title: "Analyse", text: "Wir verstehen Abläufe, Rollen, Datenquellen, Engpässe und Ziele, bevor Funktionen geplant werden." },
  { n: "02", title: "Struktur", text: "Wir definieren Module, Datenfelder, Rechte, Statuslogik und die wichtigsten Ansichten für den Alltag." },
  { n: "03", title: "Umsetzung", text: "Wir bauen das System schrittweise, testen echte Arbeitsfälle und verbessern die Bedienung vor dem Start." },
  { n: "04", title: "Betreuung", text: "Nach dem Launch begleiten wir Einführung, Feedback, Auswertung und sinnvolle Erweiterungen." },
];

const TOOLS = [
  {
    Icon: LayoutDashboard,
    name: "Dashboard",
    tag: "Übersicht",
    text: "Offene Vorgänge, Fristen, Aufgaben und Kennzahlen werden auf einen Blick sichtbar.",
    detail: "Ein Dashboard hilft Teams, schnell zu erkennen, was dringend ist, wer zuständig ist und welche Vorgänge Aufmerksamkeit brauchen.",
  },
  {
    Icon: FileCheck2,
    name: "Dokumentenmanagement",
    tag: "Ablage",
    text: "Dateien, Verträge, Nachweise und Vorlagen werden sauber zu Vorgängen oder Kontakten zugeordnet.",
    detail: "Statt Ordner zu durchsuchen, finden Nutzer Dokumente über Kunde, Status, Datum, Kategorie oder verantwortliche Person.",
  },
  {
    Icon: Workflow,
    name: "Workflow-Automation",
    tag: "Prozess",
    text: "Statuswechsel, Erinnerungen, Freigaben und wiederkehrende Aufgaben können automatisch ausgelöst werden.",
    detail: "Automationen reduzieren manuelle Kontrolle und sorgen dafür, dass wichtige Schritte nicht vergessen werden.",
  },
];

const FAQ = [
  { q: "Was ist ein Verwaltungssystem?", a: "Ein Verwaltungssystem ist eine digitale Arbeitsumgebung, in der Daten, Aufgaben, Dokumente, Termine und Prozesse zentral organisiert werden." },
  { q: "Warum bieten wir Verwaltungssysteme an?", a: "Weil viele Teams mit Tabellen, E-Mails und einzelnen Tools wachsen, bis Übersicht und Verantwortlichkeit verloren gehen. Ein passendes System bringt diese Abläufe wieder zusammen." },
  { q: "Warum ist das gut für Unternehmen?", a: "Es spart Zeit, reduziert Fehler, macht Zuständigkeiten sichtbar und schafft eine Grundlage, auf der Prozesse auch bei mehr Kunden, Aufgaben oder Dokumenten stabil bleiben." },
  { q: "Braucht jedes Unternehmen ein eigenes System?", a: "Nicht immer. Wenn Standardtools gut passen, sollten sie genutzt werden. Ein individuelles System lohnt sich, wenn Abläufe spezieller sind oder mehrere Tools dauerhaft verbunden werden müssen." },
  { q: "Ersetzt ein Verwaltungssystem alle vorhandenen Tools?", a: "Nicht zwangsläufig. Oft verbindet es bestehende Werkzeuge oder ersetzt nur die Bereiche, die den Arbeitsfluss ausbremsen." },
  { q: "Wie startet ein Projekt?", a: "Am Anfang steht eine Prozessanalyse. Danach werden die wichtigsten Module priorisiert, damit zuerst der Bereich umgesetzt wird, der den größten Alltagseffekt hat." },
  { q: "Wie wichtig ist Datenschutz?", a: "Sehr wichtig. Rollen, Rechte, Protokolle, sichere Ablage und der Umgang mit sensiblen Daten gehören bereits in die Planung." },
  { q: "Kann das System später erweitert werden?", a: "Ja. Ein sinnvoll aufgebautes Verwaltungssystem startet fokussiert und kann danach um weitere Module, Automationen oder Schnittstellen erweitert werden." },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <LayoutDashboard size={20} strokeWidth={2.2} />
    </span>
  );
}

function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionHeading({
  eyebrow,
  title,
  text,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <div className={`section-heading${compact ? " compact" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Verwaltungssysteme Guide Startseite">
          <BrandMark />
          <span className="brand-copy">SYSTEMGUIDE</span>
        </a>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#kontakt">
          Projekt anfragen
          <ArrowRight size={17} />
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="hero-statement">
            <h1>
              <span>Verwaltungssysteme klar verstehen.</span>
            </h1>
          </div>

          <div className="hero-system-panel" aria-label="Verwaltungssystem Nutzen">
            <div className="system-panel-head">
              <span><LayoutDashboard size={17} /></span>
              <div>
                <strong>Systemzentrale</strong>
                <small>Daten, Rollen und Vorgänge an einem Ort</small>
              </div>
            </div>
            <div className="system-panel-grid">
              {[
                ["8", "Module verbunden"],
                ["1", "Datenbasis"],
                ["0", "verstreute Listen"],
              ].map(([value, label]) => (
                <div className="system-panel-tile" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#angebot">
              Angebot ansehen
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#kontakt">Projekt anfragen</a>
          </div>

          <p className="hero-note">Prozessanalyse. Systemstruktur. Module. Messbare Betreuung.</p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="signal-stage admin-stage">
            <div className="admin-orbit">
              <div className="orbit-ring orbit-ring-one" />
              <div className="orbit-ring orbit-ring-two" />
              <svg className="hub-links" viewBox="0 0 640 500" role="presentation" focusable="false">
                <path d="M320 250L320 72" />
                <path d="M320 250L542 174" />
                <path d="M320 250L522 354" />
                <path d="M320 250L120 356" />
                <path d="M320 250L96 168" />
              </svg>

              <div className="hub-core">
                <span><LayoutDashboard size={30} /></span>
                <strong>Systemzentrale</strong>
                <small>Jeder Vorgang fließt durch eine klare Struktur.</small>
              </div>

              {[
                { Icon: UsersRound, title: "Kunden", detail: "Kontakte & Verlauf", className: "node-a" },
                { Icon: Files, title: "Dokumente", detail: "Ablage & Versionen", className: "node-b" },
                { Icon: CalendarDays, title: "Fristen", detail: "Termine & Erinnerungen", className: "node-c" },
                { Icon: FileCheck2, title: "Freigaben", detail: "Status & Rechte", className: "node-d" },
                { Icon: BarChart2, title: "Reporting", detail: "Zahlen & Engpässe", className: "node-e" },
              ].map(({ Icon, title, detail, className }) => (
                <div className={`module-node ${className}`} key={title}>
                  <Icon size={20} />
                  <div>
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="document-stack">
              <span>Heute</span>
              <strong>12 Vorgänge</strong>
              <div />
              <div />
              <div />
            </div>

            <div className="permissions-panel">
              <Lock size={17} />
              <div>
                <strong>Rollen & Rechte</strong>
                <span>sauber getrennt</span>
              </div>
            </div>

            <div className="workflow-ribbon">
              {["Anfrage", "Prüfung", "Freigabe", "Abschluss"].map((step, index) => (
                <div className="ribbon-step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="metric-strip" aria-label="Verwaltungssystem Kennzahlen">
        {[
          ["Eine Datenbasis", "Kontakte, Dokumente und Aufgaben laufen zentral zusammen"],
          ["Klare Zustände", "Jeder Vorgang hat Status, Verantwortung und nächsten Schritt"],
          ["Weniger Handarbeit", "Routineaufgaben werden standardisiert oder automatisiert"],
          ["Messbare Abläufe", "Engpässe und Fortschritt werden über Kennzahlen sichtbar"],
        ].map(([value, label]) => (
          <div className="metric" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="angebot" className="section dark-band left-heading-section offer-section">
        <SectionHeading
          eyebrow="Unser Angebot"
          title="Wir machen Verwaltungssysteme verständlich, planbar und umsetzbar."
          text="Die Informationen auf dieser Seite zeigen, warum digitale Verwaltungssysteme sinnvoll sind und welche Bausteine dazugehören. Genau daraus entsteht unser Angebot: Wir analysieren, strukturieren, entwickeln und betreuen Systeme, die Verwaltungsarbeit spürbar ordnen."
        />
        <div className="service-grid four">
          {OFFER.map(({ Icon, title, text }) => (
            <article className="service-card compact-card" key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="grundlagen" className="section split-section">
        <div className="split-copy">
          <Eyebrow>Was ist ein Verwaltungssystem?</Eyebrow>
          <h2>Ein zentraler Ort für Daten, Aufgaben und Entscheidungen.</h2>
          <p>
            Ein Verwaltungssystem verbindet Informationen, Zuständigkeiten und Abläufe.
            Statt zwischen Tabellen, Postfächern und Einzeltools zu wechseln, arbeiten Teams mit einer gemeinsamen Struktur.
          </p>
        </div>
        <div className="feature-list">
          {BASICS.map(({ Icon, title, text }) => (
            <article className="feature-item" key={title}>
              <Icon size={20} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="faktoren" className="section left-heading-section">
        <SectionHeading
          eyebrow="System-Faktoren"
          title="Was ein gutes Verwaltungssystem ausmacht."
          text="Nicht die Anzahl der Funktionen entscheidet, sondern ob Daten, Prozesse, Rollen und Auswertungen zusammenpassen. Wir ordnen diese Bereiche so, dass das System im Alltag wirklich getragen wird."
        />
        <div className="service-grid">
          {FACTORS.map(({ Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="signal-list">
          {SECONDARY_FACTORS.map(({ Icon, label }) => (
            <div className="signal-item" key={label}>
              <Icon size={17} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="optimierung" className="section split-section optimization-section left-heading-section">
        <div className="split-copy sticky-copy">
          <Eyebrow>Module & Funktionen</Eyebrow>
          <h2>Welche Bausteine direkt im Arbeitsalltag helfen.</h2>
          <p>
            Ein Verwaltungssystem muss nicht alles auf einmal können. Sinnvoll ist ein modularer Aufbau, der zuerst die größten Engpässe löst und danach erweitert wird.
          </p>
        </div>
        <div className="timeline-list">
          {MODULES.map((item) => (
            <article className="timeline-item" key={item.n}>
              <span>{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band left-heading-section">
        <SectionHeading
          eyebrow="Betrieb & Akzeptanz"
          title="Ein System ist nur gut, wenn es dauerhaft genutzt wird."
          text="Darum planen wir nicht nur Funktionen, sondern auch Datenpflege, Schnittstellen, Rollen und Bedienbarkeit. So bleibt das System nach dem Start verständlich und belastbar."
        />
        <div className="service-grid">
          {OPERATIONS.map(({ Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section left-heading-section practice-heading-section">
        <SectionHeading
          eyebrow="Verwaltung in der Praxis"
          title={"Für Teams, die wiederkehrende Abläufe sauber steuern müssen."}
          text="Verwaltungssysteme sind besonders sinnvoll, wenn mehrere Personen an denselben Vorgängen arbeiten und der aktuelle Stand schnell klar sein muss."
        />
        <div className="service-grid four">
          {PRACTICE.map(({ Icon, title, text }) => (
            <article className="service-card compact-card" key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band left-heading-section error-heading-section">
        <SectionHeading
          eyebrow="Häufige Fehler"
          title={"Was Verwaltungsprozesse unnötig ausbremst."}
          text="Viele Probleme entstehen nicht durch fehlende Motivation, sondern durch unklare Daten, fehlende Verantwortlichkeit und zu viele Insellösungen."
        />
        <div className="service-grid four">
          {ERRORS.map(({ Icon, title, text }) => (
            <article className="service-card compact-card" key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="prozess" className="section process-section">
        <SectionHeading eyebrow="Prozess" title="Unser Ablauf bis zum nutzbaren Verwaltungssystem." compact />
        <div className="process-grid">
          {PROCESS.map((step) => (
            <article className="process-step" key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tools" className="section packages-section">
        <SectionHeading eyebrow="Tools" title="Bausteine, mit denen Verwaltung messbar wird." compact />
        <div className="package-grid">
          {TOOLS.map(({ Icon, name, tag, text, detail }) => (
            <article className="package-card" key={name}>
              <Icon size={25} />
              <h3>{name}</h3>
              <p className="price">{tag}</p>
              <p>{text}</p>
              <details className="tool-details">
                <summary>
                  Details
                  <Plus size={15} />
                </summary>
                <div className="tool-detail-popup">
                  <p>{detail}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <SectionHeading eyebrow="FAQ" title="Antworten auf die wichtigsten Fragen." compact />
        <div className="faq-list">
          {FAQ.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-plus"><Plus size={15} /></span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakt" className="contact-section">
        <div>
          <Eyebrow>Projekt anfragen</Eyebrow>
          <h2>Bereit für eine Verwaltung, die übersichtlich und skalierbar arbeitet?</h2>
          <p>
            Wenn du eure Abläufe nicht nur erklären, sondern konkret digital ordnen möchtest,
            starten wir mit einer sauberen Analyse und einer priorisierten Systemstruktur.
          </p>
        </div>
        <div className="contact-card">
          {["Prozessanalyse", "Systemstruktur", "Module & Betreuung"].map((item) => (
            <div className="contact-choice" key={item}>
              <Check size={17} />
              <span>{item}</span>
            </div>
          ))}
          <a className="primary-button" href="#grundlagen">
            Zum Anfang
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-branding">
            <span className="brand">
              <BrandMark />
              <span className="brand-copy">SYSTEMGUIDE</span>
            </span>
            <span>Prozessanalyse, Systemstruktur und digitale Verwaltung für messbare Entlastung.</span>
          </div>
          <a className="footer-back-to-top" href="#top">
            <LayoutDashboard size={16} />
            Nach oben
          </a>
        </div>
      </footer>
    </main>
  );
}
