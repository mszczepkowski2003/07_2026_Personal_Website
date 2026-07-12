import type { Project } from "@/lib/types";

/**
 * SINGLE SOURCE OF TRUTH FOR PROJECTS.
 * To add a project, append an object here — no template/component changes needed.
 * The /projects grid and /projects/[slug] detail page both read from this array.
 *
 * Text fields carry both languages as { en, pl }. Structural fields (slug,
 * techStack, links.url, stat values, demo.kind/status) stay language-agnostic
 * so routes and metrics can never drift between languages.
 */
export const projects: Project[] = [
  {
    slug: "churn-prediction",
    title: {
      en: "End-to-End Churn Prediction",
      pl: "Kompleksowa predykcja rezygnacji klientów",
    },
    oneLiner: {
      en: "From a Snowflake-schema database to a Dockerized FastAPI service — a full ML lifecycle for telco churn.",
      pl: "Od bazy w schemacie Snowflake po skonteneryzowaną usługę FastAPI — pełny cykl życia ML dla rezygnacji w telekomunikacji.",
    },
    featured: true,
    mainLanguage: "Polish",
    techStack: [
      "Python",
      "PostgreSQL",
      "TensorFlow",
      "XGBoost",
      "Scikit-Learn",
      "FastAPI",
      "Docker",
      "Optuna",
      "Quarto",
    ],
    overview: {
      en: "A business-oriented, end-to-end machine learning pipeline designed to identify customers likely to cancel their telco services. The project covers consolidating six raw datasets into a PostgreSQL database, advanced preprocessing with custom Scikit-Learn estimators, extensive EDA, rigorous hyperparameter tuning, and deployment via a Dockerized REST API.",
      pl: "Zorientowany biznesowo, kompleksowy potok (end-to-end) uczenia maszynowego stworzony w celu identyfikacji klientów z potencjałem do rezygnacji z usług telekomunikacyjnych. Projekt obejmuje konsolidację sześciu surowych zbiorów danych w bazie PostgreSQL, zaawansowany preprocessing z wykorzystaniem własnych estymatorów Scikit-Learn, szczegółową eksplorację danych (EDA), rygorystyczne dostrajanie hiperparametrów oraz wdrożenie w postaci skonteneryzowanego API REST (Docker).",
    },
    stats: [
      {
        value: 0.94,
        decimals: 2,
        label: { en: "Peak model AUC", pl: "Szczytowe AUC modelu" },
      },
      {
        value: 300,
        label: { en: "Optuna trials run", pl: "Uruchomionych prób Optuna" },
      },
      {
        value: 20,
        suffix: "%",
        label: {
          en: "Observations recovered",
          pl: "Odzyskanych obserwacji",
        },
      },
      {
        value: 80,
        suffix: "%",
        label: { en: "Weak trials pruned", pl: "Odrzuconych słabych prób" },
      },
    ],
    approach: [
      {
        heading: {
          en: "Data Architecture & Engineering",
          pl: "Architektura i inżynieria danych",
        },
        points: [
          {
            en: "Designed a PostgreSQL database with a Snowflake schema to consolidate 6 raw datasets.",
            pl: "Zaprojektowałem bazę PostgreSQL w schemacie Snowflake, konsolidując 6 surowych zbiorów danych.",
          },
          {
            en: "Built custom Scikit-Learn transformers for a leak-proof pipeline across training and inference.",
            pl: "Zbudowałem własne transformatory Scikit-Learn dla odpornego na wycieki pipeline'u — spójnego w treningu i inferencji.",
          },
          {
            en: "Used KNN and Iterative imputation to recover ~20% of the data (1,400+ observations) that would otherwise be discarded.",
            pl: "Zastosowałem imputację KNN i iteracyjną, odzyskując ~20% danych (ponad 1400 obserwacji), które w innym wypadku zostałyby odrzucone.",
          },
        ],
      },
      {
        heading: {
          en: "Modelling & Optimization",
          pl: "Modelowanie i optymalizacja",
        },
        points: [
          {
            en: "Handled class imbalance via class weighting and MLP bias initialization.",
            pl: "Poradziłem sobie z niezbalansowaniem klas poprzez ważenie klas i inicjalizację biasu w MLP.",
          },
          {
            en: "Compared XGBoost and MLP models, both reaching AUC 0.93–0.94.",
            pl: "Porównałem modele XGBoost i MLP — oba osiągnęły AUC 0,93–0,94.",
          },
          {
            en: "Ran 300 Optuna Bayesian-optimization trials with pruning across 2 models, terminating ~80% of weak trials early.",
            pl: "Przeprowadziłem 300 prób optymalizacji bayesowskiej Optuna z pruningiem, wcześnie kończąc ~80% słabych prób.",
          },
          {
            en: "Interpreted the XGBoost model with SHAP values to explain churn drivers.",
            pl: "Zinterpretowałem model XGBoost za pomocą wartości SHAP, aby wyjaśnić czynniki rezygnacji.",
          },
        ],
      },
      {
        heading: {
          en: "Deployment & Reporting",
          pl: "Wdrożenie i raportowanie",
        },
        points: [
          {
            en: "Served the final model as a RESTful API with FastAPI + Docker for full reproducibility.",
            pl: "Udostępniłem finalny model jako API RESTful z FastAPI + Docker dla odtwarzalności i teoretycznego wdrożenia modelu do produkcji.",
          },
          {
            en: "Produced a technical & business report in Quarto documenting EDA and preprocessing.",
            pl: "Przygotowałem raport techniczno-biznesowy w Quarto, dokumentujący EDA i preprocessing.",
          },
        ],
      },
    ],
    results: [
      {
        en: "Deployed an operational early warning system to drive customer retention efforts.",
        pl: "Dostarczenie działającego systemu wczesnego reagowania wspomagającego proces utrzymania klientów.",
      },
      {
        en: "AUC 0.93–0.94 across both candidate models.",
        pl: "AUC 0,93–0,94 dla obu modeli kandydujących.",
      },
      {
        en: "~80% of hyperparameter trials pruned early, cutting search time substantially.",
        pl: "~80% prób hiperparametrów odrzucono wcześnie, znacząco skracając czas przeszukiwania.",
      },
      {
        en: "Recovered 1,400+ observations through advanced imputation.",
        pl: "Odzyskano ponad 1400 obserwacji dzięki zaawansowanej imputacji.",
      },
    ],
    links: [
      {
        label: { en: "View Repository", pl: "Zobacz repozytorium" },
        url: "https://github.com/mszczepkowski2003/Telco_churn_analysis",
      },
      {
        label: { en: "View Quarto Report", pl: "Zobacz raport Quarto" },
        url: "https://churn-eda-report.netlify.app/",
      },
    ],
    demo: {
      status: "coming-soon",
      kind: "iframe",
      note: {
        en: "Interactive churn-scoring demo coming soon — the FastAPI endpoint will be wired into this slot.",
        pl: "Interaktywne demo scoringu rezygnacji już wkrótce — endpoint FastAPI zostanie podłączony do tego miejsca.",
      },
    },
  },
  {
    slug: "flying-object-classification",
    title: {
      en: "Flying Object Classification with MobileNetV3",
      pl: "Klasyfikacja obiektów latających z MobileNetV3",
    },
    oneLiner: {
      en: "Ready to use in edge devices model that separates drones, birds and planes.",
      pl: "Gotowy do wykorzystania w różnego rodzaju kamerach system rozpoznawania ptaków, samolotów oraz dronów.",
    },
    featured: true,
    mainLanguage: "English",
    techStack: [
      "Python",
      "TensorFlow",
      "MobileNetV3-Large",
      "Docker",
      "FastAPI",
    ],
    overview: {
      en: "An image classifier built for edge deployment (e.g. CCTV hardware), separating drones, birds, and aircraft. The work balanced a small dataset and the limited on-device CPU power of the target hardware against the need to generalize to new environments — spanning an efficient data pipeline, a two-stage transfer-learning strategy, and a Dockerized inference API.",
      pl: "Klasyfikator obrazów stworzony do wdrożenia na urządzeniach brzegowych (np. sprzęt CCTV), rozróżniający drony, ptaki i samoloty. Praca godziła mały zbiór danych i ograniczoną moc CPU sprzętu docelowego z potrzebą generalizacji do nowych środowisk — od wydajnego potoku danych, przez dwuetapową strategię transfer learningu, po skonteneryzowane API.",
    },
    stats: [
      {
        value: 95,
        suffix: "%",
        label: { en: "Weighted accuracy", pl: "Ważona dokładność" },
      },
      { value: 3, label: { en: "Object classes", pl: "Klasy obiektów" } },
      {
        value: 2,
        label: {
          en: "Transfer-learning stages",
          pl: "Etapy transfer learningu",
        },
      },
    ],
    approach: [
      {
        heading: { en: "Key Challenges", pl: "Kluczowe wyzwania" },
        points: [
          {
            en: "Data scarcity & splitting: managed a limited dataset with a 70/15/15 train/val/test split to ensure robust validation and final testing despite small sample sizes.",
            pl: "Niedobór i podział danych: zarządzałem ograniczonym zbiorem, stosując podział 70/15/15 (trening/walidacja/test), by zapewnić wiarygodną walidację i test końcowy mimo małej liczby próbek.",
          },
          {
            en: "Preventing overfitting: countered high variance with several data-augmentation strategies, expanding the effective training set and improving generalization to new environments.",
            pl: "Zapobieganie przeuczeniu: przeciwdziałałem wysokiej wariancji różnymi strategiami augmentacji danych, powiększając efektywny zbiór treningowy i poprawiając generalizację do nowych środowisk.",
          },
          {
            en: "Hardware constraints: balanced high-performance requirements against the limited CPU power of the target hardware (e.g. CCTV cameras), selecting an architecture that keeps computational latency low without sacrificing accuracy.",
            pl: "Ograniczenia sprzętowe: godziłem wymagania wysokiej wydajności z ograniczoną mocą CPU sprzętu docelowego (np. kamery CCTV), wybierając architekturę o niskiej latencji obliczeniowej bez utraty dokładności.",
          },
        ],
      },
      {
        heading: {
          en: "Data Engineering & Optimization",
          pl: "Inżynieria i optymalizacja danych",
        },
        points: [
          {
            en: "Pipeline efficiency: used TensorFlow's .cache() and prefetching to maximize training throughput, keeping the GPU saturated and preventing I/O memory bottlenecks.",
            pl: "Wydajność potoku: wykorzystałem mechanizmy .cache() i prefetching w TensorFlow, by zmaksymalizować przepustowość treningu, utrzymać obciążenie GPU i uniknąć wąskich gardeł pamięci I/O.",
          },
          {
            en: "Preprocessing: engineered a pipeline that integrated real-time data augmentation.",
            pl: "Preprocessing: zaprojektowałem potok z zintegrowaną augmentacją danych w czasie rzeczywistym.",
          },
        ],
      },
      {
        heading: {
          en: "Architecture & Transfer Learning",
          pl: "Architektura i transfer learning",
        },
        points: [
          {
            en: "Architecture selection: chose MobileNetV3-Large for its depthwise separable convolutions — ideal for edge devices with restricted power and memory.",
            pl: "Dobór architektury: wybrałem MobileNetV3-Large ze względu na sploty depthwise separable — idealne dla urządzeń brzegowych o ograniczonej mocy i pamięci.",
          },
          {
            en: "Stage 1 — feature extraction: froze the ImageNet-pretrained MobileNet backbone to train a custom classification head, using Global Average Pooling instead of fully connected layers to cut parameter count and compute cost.",
            pl: "Etap 1 — ekstrakcja cech: zamroziłem backbone MobileNet wstępnie wytrenowany na ImageNet, by wytrenować własną głowicę klasyfikacyjną, stosując Global Average Pooling zamiast warstw w pełni połączonych — dla mniejszej liczby parametrów i kosztu obliczeń.",
          },
          {
            en: "Stage 2 — fine-tuning: unfroze the deep layers and retrained at a significantly lower learning rate to align the pretrained weights with the visual features of drones, birds, and aircraft.",
            pl: "Etap 2 — dostrajanie: odmroziłem głębokie warstwy i wytrenowałem je ponownie ze znacznie niższym learning rate, by dopasować wstępnie wytrenowane wagi do cech wizualnych dronów, ptaków i samolotów.",
          },
        ],
      },
      {
        heading: { en: "Deployment", pl: "Wdrożenie" },
        points: [
          {
            en: "Production readiness: deployed the final model as a RESTful API with FastAPI — a lightweight interface for real-time inference.",
            pl: "Gotowość produkcyjna: wdrożyłem finalny model jako API RESTful we FastAPI — lekki interfejs do inferencji w czasie rzeczywistym.",
          },
          {
            en: "Containerization: fully Dockerized the application for environmental consistency and easy portability across production servers.",
            pl: "Konteneryzacja: w pełni skonteneryzowałem aplikację (Docker) dla spójności środowiska i łatwej przenośności między serwerami produkcyjnymi.",
          },
        ],
      },
    ],
    results: [
      {
        en: "Achieved 95% weighted accuracy, showing the model separates classes well even with the constraints of a small fine-tuning dataset.",
        pl: "Osiągnąłem 95% ważonej dokładności — model dobrze rozróżnia klasy nawet przy ograniczeniach małego zbioru dostrajającego.",
      },
      {
        en: "Post-training error analysis surfaced specific edge cases (distant or blurry objects), providing a roadmap for future data collection.",
        pl: "Analiza błędów po treningu ujawniła konkretne przypadki brzegowe (odległe lub rozmyte obiekty), wyznaczając plan dalszego zbierania danych.",
      },
    ],
    links: [
      {
        label: { en: "View Repository", pl: "Zobacz repozytorium" },
        url: "https://github.com/mszczepkowski2003/Birds_drones_planes_classification",
      },
    ],
    demo: {
      status: "coming-soon",
      kind: "iframe",
      note: {
        en: "Image-upload classification demo coming soon — the FastAPI inference endpoint will mount here.",
        pl: "Demo klasyfikacji z wgrywaniem obrazu już wkrótce — endpoint inferencyjny FastAPI zostanie zamontowany w tym miejscu.",
      },
    },
  },
  {
    slug: "titanic-pipeline",
    title: {
      en: "Titanic Survival Prediction",
      pl: "Predykcja przeżycia na Titanicu",
    },
    oneLiner: {
      en: "A structured, modular pipeline approach — moving beyond notebooks into maintainable ML code.",
      pl: "Ustrukturyzowane, modularne podejście pipeline'owe — wyjście poza notatniki ku łatwemu w utrzymaniu kodowi ML.",
    },
    featured: false,
    mainLanguage: "English",
    techStack: ["Python", "Pandas", "Scikit-Learn"],
    overview: {
      en: "A deliberate exercise in software discipline: taking a classic classification problem out of a linear Jupyter notebook and into a structured, modular, version-controlled Python project with custom transformers and automated reporting.",
      pl: "Świadome ćwiczenie z dyscypliny programistycznej: przeniesienie klasycznego problemu klasyfikacji z liniowego notatnika Jupyter do ustrukturyzowanego, modularnego i wersjonowanego projektu w Pythonie z własnymi transformatorami i automatycznym raportowaniem.",
    },
    stats: [
      {
        value: 5,
        label: { en: "Classifiers benchmarked", pl: "Porównanych klasyfikatorów" },
      },
      {
        value: 1,
        label: { en: "Automated .xlsx report", pl: "Automatyczny raport .xlsx" },
      },
    ],
    approach: [
      {
        heading: { en: "Core Development", pl: "Trzon projektu" },
        points: [
          {
            en: "Built a centralized main script managing the workflow from raw data to evaluation report.",
            pl: "Zbudowałem scentralizowany skrypt główny zarządzający przepływem od surowych danych po raport ewaluacyjny.",
          },
          {
            en: "Engineered leak-proof, reproducible Scikit-Learn pipelines with custom transformers.",
            pl: "Zaprojektowałem odporne na wycieki, powtarzalne pipeline'y Scikit-Learn z własnymi transformatorami.",
          },
          {
            en: "Compared Random Forest, Support Vector Machines, and AdaBoost classifiers.",
            pl: "Porównałem klasyfikatory Random Forest, Support Vector Machines i AdaBoost.",
          },
        ],
      },
      {
        heading: { en: "Automated Reporting", pl: "Automatyczne raportowanie" },
        points: [
          {
            en: "Exported model metrics, comparison tables, and performance plots into a structured .xlsx report for quick analysis.",
            pl: "Wyeksportowałem metryki modeli, tabele porównawcze i wykresy wydajności do ustrukturyzowanego raportu .xlsx dla szybkiej analizy.",
          },
        ],
      },
    ],
    results: [
      {
        en: "A reusable, modular pipeline template replacing ad-hoc notebook code.",
        pl: "Wielokrotnego użytku, modularny szablon pipeline'u zastępujący doraźny kod z notatników.",
      },
      {
        en: "Automated, repeatable model-comparison reporting.",
        pl: "Zautomatyzowane, powtarzalne raportowanie porównań modeli.",
      },
    ],
    links: [
      {
        label: { en: "View Repository", pl: "Zobacz repozytorium" },
        url: "https://github.com/mszczepkowski2003/Titanic_survival_classification",
      },
    ],
    demo: {
      status: "coming-soon",
      kind: "none",
      note: {
        en: "This project is a pipeline study — a live demo slot is reserved here for a future interactive version.",
        pl: "Ten projekt to studium pipeline'u — miejsce na demo na żywo jest zarezerwowane pod przyszłą wersję interaktywną.",
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
