export interface SkillGroup {
  title: string;
  skills: readonly string[];
}

export const SKILL_GROUPS: readonly SkillGroup[] = [
    {
      title: "Data Engineering",
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
      skills: ["LangChain", "RAG", "LLMs", "Vector DBs"],
    },
    {
      title: "Analytics & BI",
      skills: ["Power BI", "Tableau", "QuickSight"],
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Git", "Docker", "GitHub Actions"],
    },
] as const;
