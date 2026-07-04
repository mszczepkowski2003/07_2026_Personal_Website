import type { Project } from "@/lib/types";

/**
 * SINGLE SOURCE OF TRUTH FOR PROJECTS.
 * To add a project, append an object here — no template/component changes needed.
 * The /projects grid and /projects/[slug] detail page both read from this array.
 */
export const projects: Project[] = [
  {
    slug: "churn-prediction",
    title: "End-to-End Churn Prediction",
    oneLiner:
      "From a Snowflake-schema database to a Dockerized FastAPI service — a full ML lifecycle for telco churn.",
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
    overview:
      "An end-to-end churn pipeline covering the full lifecycle: consolidating six raw datasets into a PostgreSQL database, engineering a leak-proof preprocessing pipeline, modelling under heavy class imbalance, and deploying the result as a reproducible API.",
    stats: [
      { value: 0.94, decimals: 2, label: "Peak model AUC" },
      { value: 300, label: "Optuna trials run" },
      { value: 1400, suffix: "+", label: "Observations recovered" },
      { value: 80, suffix: "%", label: "Weak trials pruned" },
    ],
    approach: [
      {
        heading: "Data Architecture & Engineering",
        points: [
          "Designed a PostgreSQL database with a Snowflake schema to consolidate 6 raw datasets.",
          "Built custom Scikit-Learn transformers for a leak-proof pipeline across training and inference.",
          "Used KNN and Iterative imputation to recover ~20% of the data (1,400+ observations) that would otherwise be discarded.",
        ],
      },
      {
        heading: "Modelling & Optimization",
        points: [
          "Handled class imbalance via class weighting and MLP bias initialization.",
          "Compared XGBoost and MLP models, both reaching AUC 0.93–0.94.",
          "Ran 300 Optuna Bayesian-optimization trials with pruning, terminating ~80% of weak trials early.",
          "Interpreted the XGBoost model with SHAP values to explain churn drivers.",
        ],
      },
      {
        heading: "Deployment & Reporting",
        points: [
          "Served the final model as a RESTful API with FastAPI + Docker for full reproducibility.",
          "Produced a technical & business report in Quarto documenting EDA and preprocessing.",
        ],
      },
    ],
    results: [
      "AUC 0.93–0.94 across both candidate models.",
      "~80% of hyperparameter trials pruned early, cutting search time substantially.",
      "Recovered 1,400+ observations through advanced imputation.",
    ],
    links: [
      {
        label: "View Repository",
        url: "https://github.com/mszczepkowski2003/Telco_churn_analysis",
      },
      {
        label: "View Quarto Report",
        url: "https://churn-eda-report.netlify.app/",
      },
    ],
    demo: {
      status: "coming-soon",
      kind: "iframe",
      note: "Interactive churn-scoring demo coming soon — the FastAPI endpoint will be wired into this slot.",
    },
  },
  {
    slug: "flying-object-classification",
    title: "Flying Object Classification with MobileNetV3",
    oneLiner:
      "Edge-ready transfer learning to separate drones, birds, and aircraft at 95% weighted accuracy.",
    featured: true,
    mainLanguage: "English",
    techStack: [
      "Python",
      "TensorFlow",
      "MobileNetV3-Large",
      "Docker",
      "FastAPI",
    ],
    overview:
      "An image classifier built for edge deployment (e.g. CCTV hardware), separating drones, birds, and aircraft. The work balanced a small dataset and tight compute budgets against the need to generalize to new environments.",
    stats: [
      { value: 95, suffix: "%", label: "Weighted accuracy" },
      { value: 3, label: "Object classes" },
      { value: 2, label: "Transfer-learning stages" },
    ],
    approach: [
      {
        heading: "Data Strategy",
        points: [
          "Managed a limited dataset with a 70/15/15 train/val/test split for robust validation.",
          "Applied data augmentation to expand the effective training set and curb overfitting.",
          "Used TensorFlow caching and prefetching to keep the GPU saturated and avoid I/O bottlenecks.",
        ],
      },
      {
        heading: "Architecture & Transfer Learning",
        points: [
          "Chose MobileNetV3-Large for depthwise separable convolutions — ideal for low-power edge devices.",
          "Stage 1: froze the ImageNet backbone and trained a custom head with Global Average Pooling.",
          "Stage 2: unfroze deep layers and fine-tuned at a lower learning rate for drone/bird/aircraft features.",
        ],
      },
      {
        heading: "Deployment",
        points: [
          "Served the model as a lightweight FastAPI inference API.",
          "Fully Dockerized for environmental consistency across deployment targets.",
        ],
      },
    ],
    results: [
      "95% weighted accuracy on the held-out test set.",
      "Error analysis surfaced edge cases (distant/blurry objects) as a roadmap for future data collection.",
      "Architecture chosen for low-latency CPU inference on constrained hardware.",
    ],
    links: [
      {
        label: "View Repository",
        url: "https://github.com/mszczepkowski2003/Birds_drones_planes_classification",
      },
    ],
    demo: {
      status: "coming-soon",
      kind: "iframe",
      note: "Image-upload classification demo coming soon — the FastAPI inference endpoint will mount here.",
    },
  },
  {
    slug: "titanic-pipeline",
    title: "Titanic Survival Prediction",
    oneLiner:
      "A structured, modular pipeline approach — moving beyond notebooks into maintainable ML code.",
    featured: false,
    mainLanguage: "English",
    techStack: ["Python", "Pandas", "Scikit-Learn"],
    overview:
      "A deliberate exercise in software discipline: taking a classic classification problem out of a linear Jupyter notebook and into a structured, modular, version-controlled Python project with custom transformers and automated reporting.",
    stats: [
      { value: 3, label: "Classifiers benchmarked" },
      { value: 1, label: "Automated .xlsx report" },
    ],
    approach: [
      {
        heading: "Core Development",
        points: [
          "Built a centralized main script managing the workflow from raw data to evaluation report.",
          "Engineered leak-proof, reproducible Scikit-Learn pipelines with custom transformers.",
          "Compared Random Forest, Support Vector Machines, and AdaBoost classifiers.",
        ],
      },
      {
        heading: "Automated Reporting",
        points: [
          "Exported model metrics, comparison tables, and performance plots into a structured .xlsx report for quick analysis.",
        ],
      },
    ],
    results: [
      "A reusable, modular pipeline template replacing ad-hoc notebook code.",
      "Automated, repeatable model-comparison reporting.",
    ],
    links: [
      {
        label: "View Repository",
        url: "https://github.com/mszczepkowski2003/Titanic_survival_classification",
      },
    ],
    demo: {
      status: "coming-soon",
      kind: "none",
      note: "This project is a pipeline study — a live demo slot is reserved here for a future interactive version.",
    },
  },
  {
    // INVENTED placeholder project (clearly fictional) — fills the grid.
    slug: "claims-severity-modelling",
    title: "Claims Severity Modelling",
    oneLiner:
      "Benchmarking classical GLMs against gradient boosting for insurance claim severity.",
    featured: false,
    invented: true,
    mainLanguage: "English",
    techStack: ["Python", "R", "Scikit-Learn", "XGBoost", "statsmodels"],
    overview:
      "A study comparing the interpretability of generalized linear models against the raw predictive power of gradient-boosted trees for modelling the severity of insurance claims — directly informed by actuarial pricing work.",
    approach: [
      {
        heading: "Modelling",
        points: [
          "Fitted Tweedie and Gamma GLMs as interpretable baselines.",
          "Trained gradient-boosted trees with monotonic constraints to preserve actuarial intuition.",
          "Compared models on calibration, lift, and Gini alongside raw error.",
        ],
      },
    ],
    results: [
      "Quantified the interpretability-vs-accuracy trade-off for a pricing context.",
      "Monotonic constraints kept the boosted model aligned with domain expectations.",
    ],
    links: [],
    demo: {
      status: "coming-soon",
      kind: "component",
      note: "A premium-estimator demo is planned for this slot.",
    },
  },
  {
    // INVENTED placeholder project (clearly fictional) — fills the grid.
    slug: "semantic-paper-search",
    title: "Semantic Paper Search",
    oneLiner:
      "Vector search over a research-paper corpus with an embeddings + retrieval API.",
    featured: false,
    invented: true,
    mainLanguage: "English",
    techStack: [
      "Python",
      "sentence-transformers",
      "FAISS",
      "FastAPI",
    ],
    overview:
      "A retrieval system that lets you search a corpus of research papers by meaning rather than keywords, exposing a clean API for semantic queries — a step into NLP and retrieval beyond tabular ML.",
    approach: [
      {
        heading: "Retrieval Pipeline",
        points: [
          "Embedded paper abstracts with sentence-transformers.",
          "Indexed vectors in FAISS for fast approximate nearest-neighbour search.",
          "Exposed a FastAPI endpoint returning ranked, semantically-matched results.",
        ],
      },
    ],
    results: [
      "Sub-second semantic queries over the indexed corpus.",
      "A reusable retrieval backbone ready for a future RAG layer.",
    ],
    links: [],
    demo: {
      status: "coming-soon",
      kind: "iframe",
      note: "A live semantic-search box is planned for this slot.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
