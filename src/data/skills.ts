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

export type Role = "Data Analytics" | "Data Engineering" | "AI Engineering";

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
    roles: ["Data Analytics", "Data Engineering", "AI Engineering"],
    icon: Code,
  },
  {
    id: "sql",
    label: "SQL",
    roles: ["Data Analytics", "Data Engineering", "AI Engineering"],
    icon: Database,
  },

  // Data Engineering
  {
    id: "pyspark",
    label: "PySpark",
    roles: ["Data Engineering"],
    icon: Flame,
  },
  {
    id: "apache-spark",
    label: "Apache Spark",
    roles: ["Data Engineering"],
    icon: Flame,
  },
  {
    id: "databricks",
    label: "Databricks",
    roles: ["Data Engineering"],
    icon: Layers,
  },
  {
    id: "airflow",
    label: "Airflow",
    roles: ["Data Engineering"],
    icon: Wind,
  },
  {
    id: "dbt",
    label: "dbt",
    roles: ["Data Engineering"],
    icon: Box,
  },

  // Cloud
  {
    id: "aws",
    label: "AWS",
    roles: ["Data Engineering"],
    icon: Cloud,
  },
  {
    id: "gcp",
    label: "GCP",
    roles: ["Data Engineering"],
    icon: Cloud,
  },
  {
    id: "azure",
    label: "Azure",
    roles: ["Data Engineering"],
    icon: Cloud,
  },

  // Warehousing
  {
    id: "snowflake",
    label: "Snowflake",
    roles: ["Data Engineering"],
    icon: Snowflake,
  },
  {
    id: "redshift",
    label: "Redshift",
    roles: ["Data Engineering"],
    icon: Archive,
  },
  {
    id: "synapse",
    label: "Synapse",
    roles: ["Data Engineering"],
    icon: Network,
  },
  {
    id: "delta-lake",
    label: "Delta Lake",
    roles: ["Data Engineering"],
    icon: Triangle,
  },
  {
    id: "parquet",
    label: "Parquet",
    roles: ["Data Engineering"],
    icon: FileText,
  },

  // AI / GenAI
  {
    id: "langchain",
    label: "LangChain",
    roles: ["AI Engineering"],
    icon: Link2,
  },
  {
    id: "rag",
    label: "RAG",
    roles: ["AI Engineering"],
    icon: BookOpen,
  },
  {
    id: "huggingface",
    label: "HuggingFace",
    roles: ["AI Engineering"],
    icon: Smile,
  },
  {
    id: "scikit-learn",
    label: "scikit-learn",
    roles: ["AI Engineering"],
    icon: Brain,
  },

  // Databases
  {
    id: "mysql",
    label: "MySQL",
    roles: ["Data Analytics", "Data Engineering"],
    icon: Database,
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    roles: ["Data Analytics", "Data Engineering"],
    icon: Database,
  },
  {
    id: "mongodb",
    label: "MongoDB",
    roles: ["Data Analytics", "Data Engineering"],
    icon: Leaf,
  },

  // BI / Analytics
  {
    id: "power-bi",
    label: "Power BI",
    roles: ["Data Analytics"],
    icon: BarChart3,
  },
  {
    id: "tableau",
    label: "Tableau",
    roles: ["Data Analytics"],
    icon: TableIcon,
  },
  {
    id: "quicksight",
    label: "QuickSight",
    roles: ["Data Analytics"],
    icon: AreaChart,
  },
] as const;

