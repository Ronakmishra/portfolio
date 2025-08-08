export interface SkillGroup {
  title: string;
  icon: string;
  items: readonly string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Data Engineering",
    icon: "🛠️",
    items: [
      "Python",
      "SQL",
      "PySpark",
      "Apache Spark",
      "Databricks",
      "Airflow",
      "dbt",
    ],
  },
  {
    title: "Cloud Platforms & Storage",
    icon: "☁️",
    items: [
      "AWS S3",
      "AWS Glue",
      "AWS Redshift",
      "AWS Lambda",
      "AWS Athena",
      "AWS Kinesis",
      "AWS EventBridge",
      "GCP BigQuery",
      "Azure Data Factory",
      "Azure Synapse",
    ],
  },
  {
    title: "Data Warehousing & Modeling",
    icon: "🗄️",
    items: [
      "Snowflake",
      "Delta Lake",
      "Parquet",
    ],
  },
  {
    title: "Analytics & Visualization",
    icon: "📊",
    items: [
      "Power BI",
      "Tableau",
      "AWS QuickSight",
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: "⚙️",
    items: [
      "Git",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    title: "GenAI & Applied ML",
    icon: "🤖",
    items: [
      "LangChain",
      "RAG Pipelines",
      "LLMOps",
    ],
  },
];
