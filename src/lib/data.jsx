import DDB from "../assets/documents/DDB.pdf";
import HF from "../assets/documents/HalifaxFoodie.pdf";

export const contactLinks = {
  email: "apjohanan@gmail.com",
  github: "https://github.com/JohananAP",
  linkedIn: "https://www.linkedin.com/in/pjabhishek",
};

export const experiences = [
  {
    company: "Magnet Forensics",
    role: "Software Developer",
    description:
      "Designed and implemented new features to the Evidence Processing Engine, integrating with multiple products.",
    techstack: [
      "C#",
      "XAML",
      "WPF",
      "MVVM",
      "Azure",
      "Jenkins",
      "JB Rider",
      "Git",
    ],
    iconPath: "src\\assets\\MF.png",
    date: "2022 JUN - 2023 JUN",
  },
  {
    company: "Magnet Forensics",
    role: "Software Developer (Intern)",
    description:
      "Designed and implemented new features to the Evidence Processing Engine, integrating with multiple products.",
    techstack: [
      "C#",
      "XAML",
      "WPF",
      "MVVM",
      "Gerrit",
      "Jenkins",
      "JB Rider",
      "Git",
    ],
    iconPath: "src\\assets\\MF.png",
    date: "2022 JAN - 2022 APR",
  },
  {
    company: "Capgemini",
    role: "Associate Consultant",
    description:
      "Contributed to a project focused on migrating data from an outdated environment to a modern one, involving the development of ETL pipelines for improved data processing efficiency and the generation of highly accurate reports.",
    techstack: ["Python", "Pyspark", "Airflow", "Hadoop", "hdfs", "VS Code"],
    tools: [],
    iconPath: "src\\assets\\CAP2.ico",
    date: "2020 MAY - 2020 NOV",
  },
  {
    company: "Capgemini",
    role: "Senior Analyst",
    description:
      "Built ETL pipelines in a cloud environment for efficiently processing substantial client data, ultimately facilitating the generation of reports.",
    techstack: [
      "Python",
      "Pyspark",
      "AWS S3",
      "AWS Glue",
      "AWS Redshift",
      "AWS Athena",
      "AWS Lambda",
      "VS CODE",
    ],
    tools: [],
    iconPath: "src\\assets\\CAP2.ico",
    date: "2019 MAY - 2020 APR",
  },
  {
    company: "Capgemini",
    role: "Junior Analyst",
    description:
      "Developed a desktop application that automates testing processes through the integration of testing frameworks and Zephyr (a test management tool). Additionally, designed a Python library to facilitate the handling and utilization of Zephyr APIs.",
    techstack: [
      "Python",
      "Informatica",
      "Tableau",
      "Java",
      "Eclipse",
      "Zephyr Enterprise",
    ],
    tools: [],
    iconPath: "src\\assets\\CAP2.ico",
    date: "2018 JUN - 2019 APR",
  },
];

export const projects = [
  {
    name: "STOCKI5",
    description:
      "A web application built using a test-driven approach, serving as a Stock Market Trading Simulator. It incorporates fundamental software development concepts, including SOLID principles, design patterns, and refactoring techniques.",
    link: "https://github.com/JohananAP/Stocki5",
    type: "academic",
    tech: [
      "Java Spring Boot",
      "MySql",
      "JIRA",
      "Git (GitLab)",
      "Heroku",
      "IntelliJ IDEA",
    ],
    tryme: "",
    readmore: "",
  },
  {
    name: "Distributed Database",
    description:
      "A simple distributed database and its associated management system created using GCP and Java's Data Structures, all without relying on external libraries.",
    link: "https://github.com/JohananAP/DistributedDatabase",
    type: "academic",
    tech: ["IntelliJ IDEA", "GCP", "JAVA"],
    tryme: "",
    readmore: DDB,
  },
  {
    name: "MarkIT",
    description:
      "A comprehensive employment management portal that supports academic institutions to appoint educational assistants for the courses delivered during an academic term. ",
    link: "https://github.com/JohananAP/MarkIT",
    type: "academic",
    tech: ["React", "MongoDB", "Express", "NodeJs", "Bootstrap"],
    tryme: "",
    readmore: "",
  },
  {
    name: "HalifaxFoodie",
    description:
      "Food Delivery System using multi-cloud and Backendas-a-service (BaaS). The main aim of this application is to a virtual assistance online to all the registered customers to get their questions answered.",
    link: "https://github.com/JohananAP/HalifaxFoodie",
    type: "academic",
    tech: ["AWS", "GCP", "Python", "JAVA", "IntelliJ IDEA"],
    tryme: "",
    readmore: HF,
  },
  {
    name: "QuestionMark.com",
    description:
      "A simple Question and Answer forum, SaaS web application crafted and hosted on AWS cloud services.",
    link: "https://github.com/JohananAP/QuestionMark",
    type: "academic",
    tech: ["Java", "Maven", "AWS"],
    tryme: "",
    readmore: "",
  },
];

export const recentTech = [
  "Python",
  "C#",
  ".Net Framework (4.5)",
  "React",
  "MySql",
];
