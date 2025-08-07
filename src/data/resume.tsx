import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export interface WorkItem {
  company: string;
  href?: string;
  badges?: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
  href?: string;
}

const work: WorkItem[] = [
  {
    company: "Metco Scientific",
    href: "#",
    badges: ["Data Analytics", "ML Models", "Gen AI"],
    location: "Mumbai, India",
    title: "Data Analyst – Medical & Scientific Ops",
    logoUrl: "/metco.png", // Add this logo to /public
    start: "May 2022",
    end: "Jul 2023",
    description:
      "Built predictive models (XGBoost, Logistic Regression) to anticipate lab equipment failures from 1M+ sensor logs, cutting downtime by 35%. Automated preprocessing (imputation, lag features) using Python/pandas. Delivered Power BI dashboards to QA and compliance teams for model performance and drift monitoring.",
  },
  {
    company: "Accenture",
    href: "#",
    badges: ["Data Engineering", "Analytics"],
    location: "India (Remote + Onsite)",
    title: "Software Engineer – Data Systems",
    logoUrl: "/acc.png", // Add this logo to /public
    start: "May 2021",
    end: "Apr 2022",
    description:
      "Developed Spark and AWS Glue pipelines processing millions of daily records. Designed ETL workflows for regulatory and financial reporting across major banking clients. Optimized SQL and integrated data from SAP HANA, Oracle, and flat files into centralized S3-based data lakes.",
  },
  // {
  //   company: "Nvidia",
  //   href: "https://nvidia.com/",
  //   badges: [],
  //   location: "Santa Clara, CA",
  //   title: "Software Engineer",
  //   logoUrl: "/nvidia.png",
  //   start: "January 2020",
  //   end: "April 2020",
  //   description:
  //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  // },
  // {
  //   company: "Splunk",
  //   href: "https://splunk.com",
  //   badges: [],
  //   location: "San Jose, CA",
  //   title: "Software Engineer",
  //   logoUrl: "/splunk.svg",
  //   start: "January 2019",
  //   end: "April 2019",
  //   description:
  //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  // },
  // {
  //   company: "Lime",
  //   href: "https://li.me/",
  //   badges: [],
  //   location: "San Francisco, CA",
  //   title: "Software Engineer",
  //   logoUrl: "/lime.svg",
  //   start: "January 2018",
  //   end: "April 2018",
  //   description:
  //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  // },
  // {
  //   company: "Mitre Media",
  //   href: "https://mitremedia.com/",
  //   badges: [],
  //   location: "Toronto, ON",
  //   title: "Software Engineer",
  //   logoUrl: "/mitremedia.png",
  //   start: "May 2017",
  //   end: "August 2017",
  //   description:
  //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  // },
];

const education: EducationItem[] = [
  {
    school: "Northeastern University",
    href: "https://www.northeastern.edu/",
    degree: "Master’s in Information Systems",
    logoUrl: "/neu.png",
    start: "Sep 2023",
    end: "May 2025",
  },
  {
    school: "Chandigarh Engineering College",
    href: "https://www.cgc.edu.in/",
    degree: "B.Tech in Electronics and Communication",
    logoUrl: "/cgc.png",
    start: "Jun 2016",
    end: "Apr 2020",
  },
  // {
  //   school: "Wilfrid Laurier University",
  //   href: "https://wlu.ca",
  //   degree: "Bachelor's Degree of Business Administration (BBA)",
  //   logoUrl: "/laurier.png",
  //   start: "2016",
  //   end: "2021",
  // },
  // {
  //   school: "International Baccalaureate",
  //   href: "https://ibo.org",
  //   degree: "IB Diploma",
  //   logoUrl: "/ib.png",
  //   start: "2012",
  //   end: "2016",
  // },
];

export const DATA = {
  name: "Ronak Mishra",
  initials: "RM",
  url: "https://github.com/Ronakmishra",
  location: "Boston, MA",
  locationLink: "https://www.google.com/maps/place/Boston,+MA",
  description:
    "Data Engineer | Analytics Specialist | Gen AI Enthusiast. I build scalable data pipelines, real-time analytics systems, and AI-infused solutions.",
  summary: `
I recently graduated from [Northeastern University](https://www.northeastern.edu/), where I focused on building data-driven systems at scale and applying analytics and GenAI to solve real business problems.

At Accenture and Metco Scientific, I led the development of cloud-based ETL pipelines, automated complex data workflows, and delivered interactive dashboards that improved decision-making across QA, compliance, and operations.

My work blends **Data Engineering**, **Analytics**, and **AI** - from real-time pipelines in Databricks to modular modeling with dbt and Snowflake, and now into production-ready GenAI and retrieval-augmented generation (RAG) use cases.

Outside of work, I enjoy building with open-source LLM stacks, exploring tools like LangChain and Autogen, and prototyping AI-infused data workflows.`,

  avatarUrl: "/ronak.png",
  skills: [
    // Languages & Core
    "Python",
    "SQL",
    "PySpark",

    // Data Engineering Frameworks
    "Apache Spark",
    "Databricks",
    "Airflow",
    "dbt",

    // Cloud & Storage
    "AWS S3",
    "AWS Glue",
    "AWS Redshift",
    "AWS Lambda",
    "AWS Athena",
    "AWS Kinesis",
    "AWS EventBridge",
    // "AWS CloudWatch",
    // "AWS IAM",
    "GCP BigQuery",
    "Azure Data Factory",
    "Azure Synapse",

    // Data Warehousing & Modeling
    "Snowflake",
    "Delta Lake",
    "Parquet",

    // Visualization
    "Power BI",
    "Tableau",
    "AWS QuickSight",

    // DevOps & CI/CD
    "Git",
    "Docker",
    "GitHub Actions",

    // GenAI & Applied ML
    "LangChain",
    "RAG Pipelines",
    "LLMOps",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    {
      href: "https://medium.com/@ronak.mishra404",
      icon: NotebookIcon, // or Icons.book if you want a themed one
      label: "Blog",
      external: true, // optional: opens in new tab if supported
    },
  ],
  contact: {
    email: "ronak.mishra404@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ronakmishra?tab=repositories",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ronak-mishra404/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ronak__mishra",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:ronak.mishra404@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work,
  education,

  // project section below

  projects: [
    {
      title: "Data_Projection",
      href: "", // Add a live demo link if you have one
      dates: "",
      active: true,
      description:
        "Built an event-driven data pipeline using AWS to capture changes in DynamoDB and stream them in real-time using EventBridge Pipes, Kinesis, and Firehose. Data was enriched and stored in S3, then cataloged with Glue for downstream analytics via Athena.",
      technologies: [
        "DynamoDB",
        "EventBridge Pipes",
        "Kinesis Streams",
        "Lambda",
        "Firehose",
        "S3",
        "Glue",
        "Athena",
      ],
      links: [
        //         {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
        {
          type: "Demo",
          href: "https://youtu.be/sW-YuJ52iec",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/Data_Projection",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cdn.jsdelivr.net/gh/Ronakmishra/project_assets/Data_Projection/data_projection.png",
      video: "",
    },

    {
      title: "Event-Driven Dataflow",
      href: "", // Add live demo link if applicable
      dates: "",
      active: true,
      description:
        "Built a real-time event-driven data pipeline using SQS, EventBridge Pipes, and AWS Lambda to ingest, enrich, and transform Airbnb booking stream data. Final data is written to S3 and made queryable through CSV exports.",
      technologies: [
        "SQS",
        "EventBridge Pipes",
        "Lambda",
        "Python",
        "S3",
        "CI/CD",
        "CodeBuild",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/event-driven-dataflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cdn.jsdelivr.net/gh/Ronakmishra/event-driven-dataflow/architecture-diagram.gif",
      video: "",
    },
    {
      title: "Financial Document Summarization with RAG",
      href: "", // Add live demo or Hugging Face Space link if deployed
      dates: "",
      active: true,
      description:
        "Built a RAG-based chatbot that summarizes financial documents (10-K, 10-Q) by combining retrieval techniques with LLMs. Integrated multiple models (GPT-3.5, LLaMA 2, Gemma 1.1) and evaluated outputs on metrics like faithfulness, context recall, and answer relevancy. Designed prompt templates, UI components, and comparison experiments to reduce hallucinations and improve factual consistency.",
      technologies: [
        "Python",
        "LangChain",
        "LLMs (GPT-3.5, LLaMA 2, Gemma 1.1)",
        "RAG",
        "Streamlit",
        "ChromaDB",
        "Prompt Engineering",
        "PDF Parsing",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/Financial_Document_Summarization_through_RAG",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cdn.jsdelivr.net/gh/Ronakmishra/Financial_Document_Summarization_through_RAG/assets/rag_architecture.png",
      video: "",
    },

    {
      title: "Churn Prediction",
      href: "", // Add a live demo link if available
      dates: "",
      active: true,
      description:
        "Developed a machine learning pipeline to predict customer churn using Random Forest and XGBoost models. Cleaned and engineered features from historical data, evaluated performance using AUC and F1 scores, and built an interactive dashboard to visualize churn risk across segments.",
      technologies: [
        "Python",
        "pandas",
        "scikit-learn",
        "XGBoost",
        "Random Forest",
        "Power BI",
        "EDA",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/Churn-Prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://cdn.jsdelivr.net/gh/Ronakmishra/Churn-Prediction/dashboard/1.png",
      video: "",
    },
    {
      title: "Doordash Lambda Pipeline",
      href: "", // Add live demo link if applicable
      dates: "",
      active: true,
      description:
        "Created a serverless data pipeline triggered by file uploads in S3. A Lambda function filters delivery events and writes clean JSON to a target S3 bucket. SNS sends notifications on success, and the entire pipeline is deployed via CI/CD using CodeBuild.",
      technologies: ["AWS Lambda", "S3", "SNS", "CI/CD", "CodeBuild", "Python", "pandas"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/doordash-lambda-pipeline",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cdn.jsdelivr.net/gh/Ronakmishra/doordash-lambda-pipeline/Screen%20Recording%202025-07-20%20at%203.08.18%E2%80%AFPM.gif",
      video: "",
    },

    {
      title: "EdTech DataFlow",
      href: "", // Add live demo link if available
      dates: "",
      active: true,
      description:
        "A modern ELT pipeline built for an EdTech platform, showcasing transformation and orchestration best practices using Snowflake, dbt Cloud, dbt Core, and Dagster. The project includes modular, documented data modeling, automated workflows, and lineage tracking—supporting CI/CD and both managed and open-source orchestration strategies.",
      technologies: [
        "Snowflake",
        "dbt Cloud",
        "dbt Core",
        "Dagster",
        "Python",
        "SQL",
        "CI/CD",
        "Cron Scheduling",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/EdTech_DataFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://cdn.jsdelivr.net/gh/Ronakmishra/EdTech_DataFlow/lineage_graph.png",
      video: "",
    },

    {
      title: "Delhivery Analytics Dashboard",
      href: "", // Add Tableau Public or demo link if available
      dates: "",
      active: true,
      description:
        "Developed a real-time analytics dashboard for Delhivery's supply chain operations using Snowflake and Tableau. Migrated raw CSVs into a cloud data warehouse, modeled the data using a star schema, and built a UI that visually mirrors Delhivery's official website. Dashboard includes revenue, order flow, defect rates, and shipping cost analytics - fully filterable and exportable.",
      technologies: ["Snowflake", "Tableau", "Microsoft Excel", "Star Schema"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/delhivery-insights",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://cdn.jsdelivr.net/gh/Ronakmishra/delhivery-insights/gif.gif",
      video: "",
    },
    {
      title: "Sales Analytics & Strategic Planning",
      href: "", // Add Power BI public link if you decide to publish it
      dates: "",
      active: true,
      description:
        "Designed an end-to-end sales analytics solution using Power BI and Microsoft SQL Server based on a fictional enterprise case. Migrated from static Excel reports to dynamic dashboards built with DirectQuery, enabling real-time tracking of sales KPIs, product performance, and customer insights. The project also modeled a 2021 sales budget and aligned all outputs to stakeholder user stories.",
      technologies: [
        "Microsoft SQL Server",
        "T-SQL",
        "Power BI",
        "DirectQuery",
        "Excel/CSV",
        "Data Modeling",
        "Star Schema",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/Sales-Analytics-Strategic-Planning",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cdn.jsdelivr.net/gh/Ronakmishra/Sales-Analytics-Strategic-Planning/dashboards/sales_dashboard.png",
      video: "",
    },
    {
      title: "GAIA Model Evaluation Tool",
      href: "", // Add your Streamlit Cloud deployment link here when ready
      dates: "",
      active: true,
      description:
        "Built a Streamlit-based evaluation tool to benchmark OpenAI models using the GAIA dataset. The app enables users to select test cases, query models, compare results with ground-truth answers, collect feedback, and re-evaluate modified steps. Features include persistent feedback storage, interactive charts for visualizing outcomes, and secure API key handling via environment variables.",
      technologies: ["Streamlit", "OpenAI API", "Python", "SQLite"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/BigDataChronicles",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://cdn.jsdelivr.net/gh/Ronakmishra/BigDataChronicles/req-1.png",
      video: "",
    },
    {
      title: "Raw to Ready: dbt + Snowflake Modeling",
      href: "", // Add dbt docs link if public, or a blog/demo if you publish one
      dates: "",
      active: true,
      description:
        "Designed a modular dbt pipeline in Snowflake to transform raw e-commerce data into analytics-ready data marts. Implemented a layered architecture (Raw → Staging → Marts), with separate Snowflake databases for each layer. Used source blocks, CTEs, and dbt configs to build scalable models and document the entire data flow using DAGs and lineage graphs.",
      technologies: ["dbt", "Snowflake", "SQL", "GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/from-raw-to-ready",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://cdn.jsdelivr.net/gh/Ronakmishra/from-raw-to-ready/DAG/dag1.png",
      video: "",
    },
    {
      title: "Amazon Sales Analytics",
      href: "", // Add Power BI public link if you publish it
      dates: "",
      active: true,
      description:
        "Built an interactive sales and inventory analytics dashboard in Power BI using Amazon sales data. Applied Power Query for data cleaning, DAX for KPI logic, and designed multi-page dashboards covering orders, products, returns, and regional sales. Includes dynamic filters, custom tooltips, and drill-downs to support data-driven decision-making.",
      technologies: [
        "Power BI",
        "Power Query",
        "DAX",
        "Data Modeling",
        "Dashboard Design",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ronakmishra/Amazon_analytics",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cdn.jsdelivr.net/gh/Ronakmishra/Amazon_analytics/Dashboard/orders_dashboard.png",
      video: "",
    },
  ],

  // extra activites below

  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "FirstNet Public Safety Hackathon",
    //   dates: "March 23rd - 24th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //   icon: "public",
    //   image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //   links: [],
    // },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description: "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
