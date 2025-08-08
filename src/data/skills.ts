export interface SkillGroup {
  title: string;
  emoji: string;
  skills: readonly string[];
}

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: "Data Engineering",
    emoji: "🛠️",
    skills: [
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
    title: "Cloud Platforms",
    emoji: "☁️",
    skills: [
      "AWS S3",
      "AWS Glue",
      "AWS Redshift",
      "AWS Lambda",
      "AWS Athena",
      "AWS Kinesis",
      "AWS EventBridge",
      "Azure ADF",
      "Azure Synapse",
      "GCP BigQuery",
    ],
  },
  {
    title: "Warehousing & Tables",
    emoji: "📦",
    skills: [
      "Snowflake",
      "Redshift",
      "Synapse",
      "Delta Lake",
      "Parquet",
    ],
  },
  {
    title: "GenAI & NLP",
    emoji: "🤖",
    skills: ["LangChain", "RAG", "LLMs", "Vector DBs"],
  },
  {
    title: "Analytics & BI",
    emoji: "📊",
    skills: ["Power BI", "Tableau", "QuickSight"],
  },
  {
    title: "DevOps & CI/CD",
    emoji: "⚙️",
    skills: ["Git", "Docker", "GitHub Actions"],
  },
] as const;
