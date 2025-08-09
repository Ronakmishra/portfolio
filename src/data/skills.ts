import type { LucideIcon } from "lucide-react";
import {
  Code,
  Database,
  Flame,
  Layers,
  Wind,
  Box,
  Cloud,
  Snowflake,
  Archive,
  Network,
  Triangle,
  FileText,
  Link2,
  BookOpen,
  Smile,
  Brain,
  Leaf,
  BarChart3,
  Table as TableIcon,
  AreaChart,
} from "lucide-react";

export type Role = "Data Analyst" | "Data Engineer" | "AI Engineer";

export interface Skill {
  id: string;
  label: string;
  roles: Role[];
  icon: LucideIcon;
}

export const SKILLS: readonly Skill[] = [
  // Core / Programming
  {
    id: "python",
    label: "Python",
    roles: ["Data Analyst", "Data Engineer", "AI Engineer"],
    icon: Code,
  },
  {
    id: "sql",
    label: "SQL",
    roles: ["Data Analyst", "Data Engineer", "AI Engineer"],
    icon: Database,
  },

  // Data Engineering
  {
    id: "pyspark",
    label: "PySpark",
    roles: ["Data Engineer"],
    icon: Flame,
  },
  {
    id: "apache-spark",
    label: "Apache Spark",
    roles: ["Data Engineer"],
    icon: Flame,
  },
  {
    id: "databricks",
    label: "Databricks",
    roles: ["Data Engineer"],
    icon: Layers,
  },
  {
    id: "airflow",
    label: "Airflow",
    roles: ["Data Engineer"],
    icon: Wind,
  },
  {
    id: "dbt",
    label: "dbt",
    roles: ["Data Engineer"],
    icon: Box,
  },

  // Cloud
  {
    id: "aws",
    label: "AWS",
    roles: ["Data Engineer"],
    icon: Cloud,
  },
  {
    id: "gcp",
    label: "GCP",
    roles: ["Data Engineer"],
    icon: Cloud,
  },
  {
    id: "azure",
    label: "Azure",
    roles: ["Data Engineer"],
    icon: Cloud,
  },

  // Warehousing
  {
    id: "snowflake",
    label: "Snowflake",
    roles: ["Data Engineer"],
    icon: Snowflake,
  },
  {
    id: "redshift",
    label: "Redshift",
    roles: ["Data Engineer"],
    icon: Archive,
  },
  {
    id: "synapse",
    label: "Synapse",
    roles: ["Data Engineer"],
    icon: Network,
  },
  {
    id: "delta-lake",
    label: "Delta Lake",
    roles: ["Data Engineer"],
    icon: Triangle,
  },
  {
    id: "parquet",
    label: "Parquet",
    roles: ["Data Engineer"],
    icon: FileText,
  },

  // AI / GenAI
  {
    id: "langchain",
    label: "LangChain",
    roles: ["AI Engineer"],
    icon: Link2,
  },
  {
    id: "rag",
    label: "RAG",
    roles: ["AI Engineer"],
    icon: BookOpen,
  },
  {
    id: "huggingface",
    label: "HuggingFace",
    roles: ["AI Engineer"],
    icon: Smile,
  },
  {
    id: "scikit-learn",
    label: "scikit-learn",
    roles: ["AI Engineer"],
    icon: Brain,
  },

  // Databases
  {
    id: "mysql",
    label: "MySQL",
    roles: ["Data Analyst", "Data Engineer"],
    icon: Database,
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    roles: ["Data Analyst", "Data Engineer"],
    icon: Database,
  },
  {
    id: "mongodb",
    label: "MongoDB",
    roles: ["Data Analyst", "Data Engineer"],
    icon: Leaf,
  },

  // BI / Analytics
  {
    id: "power-bi",
    label: "Power BI",
    roles: ["Data Analyst"],
    icon: BarChart3,
  },
  {
    id: "tableau",
    label: "Tableau",
    roles: ["Data Analyst"],
    icon: TableIcon,
  },
  {
    id: "quicksight",
    label: "QuickSight",
    roles: ["Data Analyst"],
    icon: AreaChart,
  },
] as const;

