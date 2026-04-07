import type { ImageMetadata } from "astro";
import consumerDemandResponseImage from "@/assets/images/research/research_consumer_DR.png";
import dataDrivenImage from "@/assets/images/research/research_data_driven.png";
import dcarbonMapImage from "@/assets/images/research/dcarbon-volume-heatmap.svg";
import regulationPotentialImage from "@/assets/images/research/research_regulation_potential.png";
import reliabilityNsfcImage from "@/assets/images/research/research_reliability_NSFC.png";

export type ContactLink = {
  label: string;
  name: string;
  url: string;
};

export type Experience = {
  period: string;
  title: string;
  organization: string;
  location: string;
  summary: string;
  highlights?: string[];
};

export type EducationRecord = {
  period: string;
  degree: string;
  institution: string;
  advisor?: string;
  details: string[];
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  note?: string;
  url?: string;
  pdf?: string;
};

export type PublicationSection = {
  title: string;
  items: Publication[];
};

export type ResourceLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  role: string;
  sponsor: string;
  period: string;
  funding?: string;
  summary?: string;
  links?: ResourceLink[];
};

export type Credential = {
  title: string;
  code?: string;
  status?: string;
  year?: string;
  url?: string;
};

export type Talk = {
  year: string;
  title: string;
  event: string;
  location: string;
  url?: string;
  note?: string;
};

export type ServiceRole = {
  title: string;
  organization: string;
  url?: string;
  note?: string;
};

export type ServiceGroup = {
  title: string;
  items: string[];
};

export type AwardGroup = {
  title: string;
  items: string[];
};

export type ResearchHighlight = {
  title: string;
  description: string;
  image: ImageMetadata;
  alt: string;
  tag: string;
  href?: string;
  linkLabel?: string;
};

export const siteTitle = "Sheng Wang";
export const cvUrl = "/files/CV/CV-Sheng-Wang.pdf";
export const dcarbonRepoUrl = "https://github.com/ShengWang-EE/D-caRbon";
export const dcarbonMapSourceUrl =
  "https://github.com/ShengWang-EE/D-caRbon/blob/main/data/carbon_emission_heatmap_3d.html";
export const dcarbonMapHostedUrl = "/maps/carbon_emission_heatmap_3d.html";

export const heroSummary = [
  "Dr. Sheng Wang is a NUAcT Fellow in the School of Engineering at Newcastle University. His work focuses on reliability, resilience, and optimization of integrated energy systems, with a particular emphasis on hydrogen integration and low-carbon infrastructure.",
  "He received his B.Eng. and Ph.D. degrees from Zhejiang University in 2016 and 2021. His research career has included appointments at State Grid (Suzhou) City and Energy Research Institute, the University of Macau, and University College Dublin.",
  "His research spans integrated electricity-gas-hydrogen systems, operational reliability, resilience under uncertainty, demand-side flexibility, and data-driven planning for future energy networks.",
  "He welcomes collaboration across academia and industry on hydrogen blending, multi-vector energy systems, resilient low-carbon operation, and infrastructure planning.",
];

export const researchAreas = [
  "Integrated electricity-gas-hydrogen systems",
  "Reliability, resilience, and risk assessment",
  "Operational optimization and demand-side flexibility",
  "Data-driven planning for low-carbon infrastructure",
];

export const researchHighlights: ResearchHighlight[] = [
  {
    title: "D-caRbon Carbon Emission 3D Map",
    description:
      "A directly accessible 3D carbon emission heatmap connected to the D-caRbon project, available from this website for quick exploration.",
    image: dcarbonMapImage,
    alt: "Stylized preview image for the D-caRbon 3D carbon emission heatmap.",
    tag: "Carbon Map",
    href: "/projects/volume-heatmap-3d",
    linkLabel: "Open map",
  },
  {
    title: "Reliability of Urban Multi-Energy Systems",
    description:
      "Methods for short-term and long-term reliability assessment of electricity-gas systems under uncertainty and asset interactions.",
    image: reliabilityNsfcImage,
    alt: "Cover image for operational reliability evaluation of urban multi-energy systems.",
    tag: "Reliability",
  },
  {
    title: "Data-Driven Multi-Energy Platform",
    description:
      "Experimental and simulation platforms for multi-energy system analytics, planning, and flexible operational studies.",
    image: dataDrivenImage,
    alt: "Poster image for a data-driven multi-energy experiment and simulation platform.",
    tag: "Platform",
  },
  {
    title: "Flexible Resource Regulation",
    description:
      "Research on coordination and regulation technologies for flexible resources in deeply coupled power and communication networks.",
    image: regulationPotentialImage,
    alt: "Poster image for flexible resource regulation in integrated energy systems.",
    tag: "Flexibility",
  },
  {
    title: "Consumer Demand Response",
    description:
      "Demand response and service-based self-scheduling for multi-energy customers, energy hubs, and reserve provision.",
    image: consumerDemandResponseImage,
    alt: "Poster image for consumer demand response in integrated energy systems.",
    tag: "Demand Response",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    name: "sheng.wang@newcastle.ac.uk",
    url: "mailto:sheng.wang@newcastle.ac.uk",
  },
  {
    label: "Google Scholar",
    name: "Scholar Profile",
    url: "https://scholar.google.com/citations?user=L86ShJAAAAAJ&hl=zh-CN",
  },
  {
    label: "GitHub",
    name: "shengwang-ee",
    url: "https://github.com/shengwang-ee",
  },
  {
    label: "CV",
    name: "Download PDF",
    url: cvUrl,
  },
];

export const experiences: Experience[] = [
  {
    period: "2024 - Present",
    title: "NUAcT Fellow",
    organization: "School of Engineering, Newcastle University",
    location: "Newcastle upon Tyne, UK",
    summary:
      "Leading research on resilient low-carbon energy systems with a focus on hydrogen integration, sector coupling, and operational reliability.",
    highlights: [
      "Principal investigator on hydrogen-integrated energy system resilience topics.",
      "Developing methods for gas interchangeability, hydrogen blending, and multi-vector system operation.",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Senior Power Systems Researcher",
    organization: "University College Dublin",
    location: "Dublin, Ireland",
    summary:
      "Worked on advanced modelling and analysis of energy systems, bridging academic research with applied system studies.",
  },
  {
    period: "2022 - 2023",
    title: "Postdoctoral Research Fellow",
    organization:
      "State Key Laboratory of Internet of Things for Smart City, University of Macau",
    location: "Macao SAR, China",
    summary:
      "Conducted postdoctoral research on integrated energy systems, uncertainty-aware operation, and low-carbon energy transition.",
    highlights: [
      "Collaborated on projects related to hydrogen integration and flexible resource coordination.",
      "Extended reliability and optimization models for multi-energy systems.",
    ],
  },
  {
    period: "2021 - 2022",
    title: "Research Engineer",
    organization: "State Grid (Suzhou) City and Energy Research Institute",
    location: "Suzhou, China",
    summary:
      "Worked on urban energy strategic planning and real-world energy system studies for State Grid projects.",
  },
  {
    period: "2016 - 2021",
    title: "Ph.D. Researcher",
    organization: "Zhejiang University",
    location: "Hangzhou, China",
    summary:
      "Completed doctoral research in electrical engineering with work on reliability evaluation, integrated optimal power flow, and energy flexibility.",
  },
];

export const education: EducationRecord[] = [
  {
    period: "2016 - 2021",
    degree: "Ph.D. in Electrical Engineering",
    institution: "Zhejiang University",
    advisor: "Prof. Yi Ding",
    details: [
      "College of Electrical Engineering.",
      "Research centered on integrated electricity and gas systems, reliability, and operational optimization.",
    ],
  },
  {
    period: "2012 - 2016",
    degree: "B.Eng. in Electrical Engineering",
    institution: "Zhejiang University",
    details: [
      "College of Electrical Engineering.",
      "Outstanding Graduates, overall GPA 3.89/4.0.",
    ],
  },
];

export const publicationSections: PublicationSection[] = [
  {
    title: "Current Manuscripts",
    items: [
      {
        title:
          "Decentralized Demand Response for Energy Hubs in Integrated Electricity and Gas Systems Considering Linepack Flexibility",
        authors: "Sheng Wang, Hongxun Hui, Yi Ding, Junyi Zhai",
        venue: "Under review at IEEE Internet of Things Journal",
        year: "Under review",
        pdf: "/files/publications/J4 Decentralized.pdf",
      },
      {
        title:
          "Long-Term Reliability of Integrated Electricity and Gas Systems With Alternative Gas Injection",
        authors: "Sheng Wang, Hongxun Hui, Yi Ding, Yonghua Song",
        venue: "Under review at IEEE Transactions on Power Systems",
        year: "Under review",
        pdf: "/files/publications/J8 Long-Term.pdf",
      },
      {
        title:
          "Multi-Period Optimal Energy Flow in Integrated Electricity and Gas Systems With Alternative Gas Injection Considering Gas Composition Dynamics",
        authors: "Sheng Wang, Hongxun Hui, Tao Chen",
        venue: "Under review at IEEE Transactions on Smart Grid",
        year: "Under review",
        pdf: "/files/publications/J11 Multi-Period.pdf",
      },
    ],
  },
  {
    title: "Books and Book Chapters",
    items: [
      {
        title: "Risk modeling, analysis and control of multi-energy systems",
        authors:
          "Yonghua Song, Yi Ding, Minglei Bao, Sheng Wang, Changzheng Shao",
        venue: "Springer Nature",
        year: "2023",
        url: "https://link.springer.com/book/10.1007/978-981-99-1090-8",
        pdf: "/files/publications/M2 Risk.pdf",
      },
      {
        title:
          "Risk Evaluation of Electricity Systems with Large Penetration of Renewable Generations",
        authors: "Sheng Wang, Lalit Goel, Yi Ding",
        venue: "Taylor & Francis Group (book chapter)",
        year: "2020",
        url: "https://www.routledge.com/Renewable-Energy-Integration-to-the-Grid-A-Probabilistic-Perspective/Gupta-Tomar-Prusty-Gupta/p/book/9780367747947",
        pdf: "/files/publications/M1 Risk.pdf",
      },
    ],
  },
  {
    title: "Journal Papers",
    items: [
      {
        title:
          "Short-Term Reliability Assessment of Integrated Power-Gas Systems With Alternative Gas Injections Using Universal Generating Function",
        authors: "Sheng Wang, Hongxun Hui, Junyi Zhai",
        venue: "IEEE Transactions on Industry Applications",
        year: "Accepted",
        note: "Accepted",
        pdf: "/files/publications/J10 Short-Term.pdf",
      },
      {
        title:
          "Resilience of Gas Interchangeability in Hydrogen-Blended Integrated Electricity and Gas Systems: A Transient Approach With Dynamic Gas Composition Tracking",
        authors: "Sheng Wang, Hongxun Hui, Pierluigi Siano",
        venue: "iEnergy",
        year: "Accepted",
        note: "Accepted",
        pdf: "/files/publications/J9 Resilience.pdf",
      },
      {
        title:
          "Operational Reliability of Integrated Energy Systems Considering Gas Flow Dynamics and Demand-Side Flexibility",
        authors: "Sheng Wang, Junyi Zhai, Hongxun Hui, Yi Ding",
        venue: "IEEE Transactions on Industrial Informatics",
        year: "2023",
        pdf: "/files/publications/J5 Operational.pdf",
      },
      {
        title:
          "Decentralized coordination between active distribution network and multi-microgrids through a fast decentralized adjustable robust operation framework",
        authors:
          "Xiao Chen, Junyi Zhai, Yuning Jiang, Chenyixuan Ni, Sheng Wang, Philippe Nimmegeers",
        venue: "Sustainable Energy, Grids and Networks",
        year: "2023",
        pdf: "/files/publications/O 2023 Decentralized.pdf",
      },
      {
        title:
          "Optimal Energy Flow in Integrated Electricity and Gas Systems With Injection of Alternative Gas",
        authors: "Sheng Wang, Junyi Zhai, Hongxun Hui",
        venue: "IEEE Transactions on Sustainable Energy",
        year: "2023",
        pdf: "/files/publications/J7 Optimal.pdf",
      },
      {
        title:
          "Operational Reliability Evaluation of Urban Multi-Energy Systems With Equivalent Energy Storage",
        authors:
          "Sheng Wang, Hongxun Hui, Yi Ding, Chengjin Ye, Menglian Zheng",
        venue: "IEEE Transactions on Industry Applications",
        year: "2023",
        pdf: "/files/publications/J6 Operational.pdf",
      },
      {
        title:
          "Data-driven distributionally robust joint chance-constrained energy management for multi-energy microgrid",
        authors:
          "Junyi Zhai, Sheng Wang, Lei Guo, Yunning Jiang, Zhongjian Kang, Colin N. Jones",
        venue: "Applied Energy",
        year: "2022",
        pdf: "/files/publications/O Data-driven.pdf",
      },
      {
        title:
          "Multifactor-influenced reliability-constrained reserve expansion of integrated electricity-gas systems considering failure propagation",
        authors:
          "Minglei Bao, Xiaocong Sun, Yi Ding, Chengjin Ye, Changzheng Shao, Sheng Wang, Yonghua Song",
        venue: "CSEE Journal of Power and Energy Systems",
        year: "2023",
        pdf: "/files/publications/O Multifactor-influenced.pdf",
      },
      {
        title:
          "Exploiting Integrated Demand Response for Operating Reserve Provision Considering Rebound Effects",
        authors:
          "Xiaoming Zhou, Maosheng Sang, Minglei Bao, Sheng Wang, Wenqi Cui, Chengjin Ye, Yi Ding",
        venue: "IEEE Access",
        year: "2022",
        pdf: "/files/publications/O Exploiting.pdf",
      },
      {
        title:
          "Short-term reliability evaluation of integrated electricity and gas systems considering dynamics of gas flow",
        authors:
          "Sheng Wang, Yi Ding, Xiaoqing Han, Peng Wang, Lalit Goel, Jien Ma",
        venue: "IET Generation, Transmission & Distribution",
        year: "2021",
        pdf: "/files/publications/J3 Short-term.pdf",
      },
      {
        title:
          "Operational reliability of multi-energy customers considering service-based self-scheduling",
        authors: "Sheng Wang, Changzheng Shao, Yi Ding, Jinyue Yan",
        venue: "Applied Energy",
        year: "2019",
        pdf: "/files/publications/J2 Operational.pdf",
      },
      {
        title:
          "Reliability evaluation of integrated electricity-gas system utilizing network equivalent and integrated optimal power flow techniques",
        authors:
          "Sheng Wang, Yi Ding, Chengjin Ye, Can Wan, Yuchang Mo",
        venue: "Journal of Modern Power Systems and Clean Energy",
        year: "2019",
        pdf: "/files/publications/J1 Reliability.pdf",
      },
    ],
  },
  {
    title: "Chinese Papers",
    items: [
      {
        title:
          "Practices of the new power system in the UK and inspiration for the development of provincial power systems in China",
        authors:
          "Sheng Wang, Jian Tan, Wenbo Shi, Fenghua Zou, Guang Chen, Linyu Wang, Hongxun Hui, Lei Guo",
        venue: "Integrated Intelligent Energy",
        year: "2022",
        note: "Best Paper",
        pdf: "/files/publications/CJ4-UK-new-power-system.pdf",
      },
      {
        title:
          "Impact Factor Analysis and Forecasting of the Carbon Emission of Industrial Sectors Based on LMDI Method Under Multiple Uncertainties: The Case of Suzhou",
        authors: "Sheng Wang, Jian Tan, Yahui Ma, Fenghua Zou",
        venue: "Integrated Intelligent Energy",
        year: "2022",
        pdf: "/files/publications/CJ3-LMDI-carbon-emission.pdf",
      },
      {
        title:
          "Optimal Sizing and Asset Utilization Efficiency Analysis of the Distributed Multi-Energy System Considering the Energy Substitution and Load Uncertainty",
        authors: "Sheng Wang, Yi Ding",
        venue: "Journal of Global Energy Interconnection",
        year: "2019",
        note: "Best Paper",
        pdf: "/files/publications/CJ2-Optimal-sizing-multi-energy.pdf",
      },
      {
        title:
          "Bi-level Joint Optimization Model of Integrated Electricity and Gas System for Multi-energy Demand Response",
        authors:
          "Yintu Mao, Sheng Wang, Changzheng Shao, Yang Xu, Yi Ding",
        venue: "Smart Energy",
        year: "2018",
        pdf: "/files/publications/CJ1-Bilevel-demand-response.pdf",
      },
    ],
  },
  {
    title: "Conference Papers",
    items: [
      {
        title:
          "Operational Risk for Integrated Power and Gas Systems Considering Varying Hydrogen Concentrations With High Penetration of Wind",
        authors: "Sheng Wang, Hongxun Hui",
        venue:
          "2023 IEEE IAS Global Conference on Renewable Energy and Hydrogen Technologies",
        year: "2023",
        pdf: "/files/publications/C13_2023_Operational.pdf",
      },
      {
        title:
          "LEAP-based scenario analysis in carbon emission of Jiangsu Province",
        authors: "Xin Wang, Fenghua Zou, Jing Shi, Sheng Wang, Hao Chen",
        venue: "Advances in Applied Chemistry and Industrial Catalysis",
        year: "2022",
        url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003308553-18/leap-based-scenario-analysis-carbon-emission-jiangsu-province-xin-wang-fenghua-zou-jing-shi-sheng-wang-hao-chen",
      },
      {
        title:
          "Steady-State Optimal Power Flow in Integrated Electricity and Gas Transmission Systems with Hydrogen Injections",
        authors:
          "Sheng Wang, Linggang Zhou, Lei Zhong, Xinyu Wang, Wenbo Shi, Fenghua Zou, Yahui Ma",
        venue: "2022 IEEE IAS Industrial and Commercial Power System Asia",
        year: "2022",
        pdf: "/files/publications/C11_2022_Steady-State.pdf",
      },
      {
        title:
          "Feasible Region Evaluation of Urban Industry Development for Achieving the Carbon Peak and Neutrality",
        authors:
          "Bingjie Li, Xiaoyan Hu, Hu Li, Sheng Wang, Hao Chen, Yahui Ma, Fenghua Zou",
        venue: "Journal of Physics: Conference Series",
        year: "2022",
        pdf: "/files/publications/C10_2022_Feasible.pdf",
      },
      {
        title:
          "Study on Carbon Emission and Impact Factor based on LMDI method: the Case of Jiangsu",
        authors:
          "Sheng Wang, Jian Tan, Yahui Ma, Haiyan Jiang, Aikang Chen, Fenghua Zou",
        venue: "2021 International Conference on Power System Technology",
        year: "2021",
        pdf: "/files/publications/C9_2021_Study.pdf",
      },
      {
        title:
          "Operational reliability evaluation of distributed multi-energy systems considering optimal control of energy storages",
        authors:
          "Sheng Wang, Yi Ding, Menglian Zheng, Chengjin Ye",
        venue: "2021 IEEE IAS Industrial and Commercial Power System Asia",
        year: "2021",
        pdf: "/files/publications/C8_2021_Operational.pdf",
      },
      {
        title:
          "Bidding and Offering Models in Generation-Grid-Load-Storage Transactions Based on Flexible Order Types",
        authors:
          "Sheng Wang, Yingchun Feng, Xuesong Li, Yishuang Hu, Yi Ding",
        venue: "2021 Asia Conference on Power and Electrical Engineering",
        year: "2021",
        pdf: "/files/publications/C7_2021_Bidding.pdf",
      },
      {
        title:
          "Linearized Modeling of Integrated Electricity and District Heating Systems with VF-VT Strategy Based on McCormick Envelopes",
        authors:
          "Xueyong Tang, Xiaocong Sun, Xia Yan, Sheng Wang, Yu Zhang, Changzheng Shao, Yi Ding",
        venue: "2020 IEEE Sustainable Power and Energy Conference",
        year: "2020",
        pdf: "/files/publications/C6_2020_Linearized.pdf",
      },
      {
        title:
          "Contingency Management in Integrated Electricity and Gas Systems Considering Gas Flow Dynamics",
        authors: "Xueyong Tang, Sheng Wang, Bin Sun, Qingsheng Li, Yi Ding",
        venue: "Applied Energy Symposium: CUE",
        year: "2020",
        pdf: "/files/publications/C5_2020_Contingency.pdf",
      },
      {
        title:
          "A bi-Level equivalent model of scheduling an energy hub to provide operating reserve for power systems",
        authors: "Shuiquan Ye, Wenjun Ruan, Sheng Wang, Chong Zhang",
        venue: "2020 Tsinghua-HUST-IET Electrical Engineering Academic Forum",
        year: "2020",
        pdf: "/files/publications/C4_2020_Bi-Level.pdf",
      },
      {
        title:
          "Generalized Modeling of Self-scheduling Demand Resource in Multi-Energy System",
        authors: "Sheng Wang, Yi Ding, Changzheng Shao",
        venue:
          "2018 IEEE International Conference on Communications, Control, and Computing Technologies for Smart Grids",
        year: "2018",
        pdf: "/files/publications/C3_2018_Generalized.pdf",
      },
      {
        title:
          "Economic impact of power to gas in integrated electricity and gas system with high wind penetration",
        authors: "Xiaoyan Yu, Guorong Zhu, Sheng Wang, Yi Ding",
        venue: "2018 IEEE Innovative Smart Grid Technologies-Asia",
        year: "2018",
        pdf: "/files/publications/C2 2018 Economic.pdf",
      },
      {
        title:
          "Cooperation of demand response and traditional power generations for providing spinning reserve",
        authors: "Sheng Wang, Hongxun Hui, Yi Ding, Chengzhi Zhu",
        venue: "Energy Procedia",
        year: "2017",
        pdf: "/files/publications/C1 2017 Cooperation.pdf",
      },
    ],
  },
];

export const featuredPublications: Publication[] = [
  publicationSections[2].items[0],
  publicationSections[2].items[1],
  publicationSections[2].items[4],
  publicationSections[2].items[2],
  publicationSections[2].items[5],
];

export const projects: Project[] = [
  {
    title:
      "Resilience quantification and enhancement of energy system operations with hydrogen integration",
    role: "Principal Investigator",
    sponsor: "Marie-Curie Postdoctoral Fellowship",
    funding: "~GBP 200k",
    period: "May 2024 - May 2026",
    summary:
      "Research on resilience quantification and operational enhancement for hydrogen-integrated energy systems.",
    links: [
      { label: "Letter 1", url: "/files/projects/101148880_HyRes_ESR_masked.pdf" },
      { label: "Letter 2", url: "/files/projects/Support letter from HI-ACT NIA.pdf" },
      {
        label: "Letter 3",
        url: "/files/projects/SEAI Letter of Support for Hydrogen Fellowship_2024.09.09.pdf",
      },
      {
        label: "Letter 4",
        url: "/files/projects/Statement of Guarantee (Dr Wang).pdf",
      },
    ],
  },
  {
    title:
      "Operational reliability evaluation of multi-source and heterogeneous urban multi-energy systems",
    role: "Principal Investigator",
    sponsor: "Natural Science Foundation of Jiangsu Province, China",
    funding: "RMB 0.2m",
    period: "2022 - 2025",
    links: [
      {
        label: "Introduction",
        url: "/files/projects/OperationalReliabilityEvaluation.pdf",
      },
    ],
  },
  {
    title:
      "Research on key technologies of new power system construction in typical countries such as the United Kingdom and Germany",
    role: "Principal Investigator",
    sponsor: "State Grid Jiangsu",
    funding: "RMB 0.3m",
    period: "Recent",
    links: [{ label: "Introduction", url: "/files/projects/ResearchonKey.pdf" }],
  },
  {
    title:
      "Research on operational reliability of integrated energy systems considering demand-side flexibility and energy flow dynamics",
    role: "Principal Investigator",
    sponsor: "Zhejiang University Academic Rising Star Program",
    funding: "RMB 20k",
    period: "2018 - 2021",
    links: [
      { label: "Introduction", url: "/files/projects/ResearchonOperational.pdf" },
    ],
  },
  {
    title:
      "Research on key technologies for regulating flexible resources considering the deep integration of power-communication networks",
    role: "Co-Principal Investigator",
    sponsor: "National Natural Science Foundation of Macao",
    funding: "MOP 1.53m",
    period: "2023 - 2025",
    links: [
      {
        label: "Introduction",
        url: "/files/projects/ResearchonKeyTechnologies.pdf",
      },
    ],
  },
  {
    title: "Smart energy platform for the University of Macau",
    role: "Research Contributor",
    sponsor: "University of Macau",
    period: "2022 - 2023",
    links: [{ label: "Introduction", url: "/files/projects/SmartEnergyPlatform.pdf" }],
  },
  {
    title:
      "Demonstration of distributed energy system with multi-energy complementary integration and optimization",
    role: "Student project director of a sub-task",
    sponsor: "National Key R&D Program of China",
    funding: "RMB 20.31m",
    period: "2017 - 2021",
    links: [
      {
        label: "Introduction",
        url: "/files/projects/DemonstrationofDistributed.pdf",
      },
    ],
  },
  {
    title:
      "Research on key technologies of regional multi-energy system planning and operation based on digital twin technology",
    role: "Student project director of a sub-task",
    sponsor: "China Southern Power Grid",
    funding: "RMB 1.88m",
    period: "2020 - Present",
    links: [
      {
        label: "Introduction",
        url: "/files/projects/ResearchonKeyTechnologiesofRegional.pdf",
      },
    ],
  },
  {
    title:
      "Research on energy ecological intelligent interactive system with bilateral interaction of supply and demand in electricity market environment",
    role: "Student project director",
    sponsor: "State Grid Zhejiang",
    funding: "RMB 0.60m",
    period: "2017 - 2018",
    links: [{ label: "Introduction", url: "/files/projects/ResearchonEnergy.pdf" }],
  },
  {
    title:
      "Key technologies of multi-energy complementarity, coordination, optimization, planning, and design",
    role: "Student project director",
    sponsor: "State Grid Jiangsu",
    funding: "RMB 1.96m",
    period: "2017 - 2018",
    links: [
      {
        label: "Introduction",
        url: "/files/projects/KeyTechnologiesofMulti-energy.pdf",
      },
    ],
  },
  {
    title:
      "Research and application of key technologies for interactive trading of clean energy, electricity load, and energy storage",
    role: "Student project director of a sub-task",
    sponsor: "State Grid Corporation of China",
    funding: "RMB 3.77m",
    period: "2020 - 2021",
    links: [
      { label: "Introduction", url: "/files/projects/ResearchandApplication.pdf" },
    ],
  },
  {
    title:
      "Research and application of key technologies of regional multi-energy supply systems based on an all-energy flow model",
    role: "Student project director of a sub-task",
    sponsor: "State Grid Corporation of China",
    funding: "RMB 0.45m",
    period: "2017 - 2019",
    links: [
      {
        label: "Introduction",
        url: "/files/projects/ResearchandApplicationofKeyTechnologiesofRegional.pdf",
      },
    ],
  },
  {
    title: "Data-driven multi-energy experiment and simulation platform",
    role: "Student project director",
    sponsor: "Zhejiang University",
    funding: "RMB 1.5m",
    period: "2016 - 2018",
    links: [
      { label: "Platform 1", url: "/files/projects/Data-drivenMulti-energy1.pdf" },
      { label: "Platform 2", url: "/files/projects/Data-drivenMulti-energy2.pdf" },
      { label: "Platform 3", url: "/files/projects/Data-drivenMulti-energy3.pdf" },
    ],
  },
];

export const featuredProjects: Project[] = projects.slice(0, 4);

export const patents: Credential[] = [
  {
    title:
      "A reliability evaluation method of integrated electricity and gas systems based on integrated optimal power flow",
    code: "CN201910033159.6",
    status: "Granted",
  },
  {
    title:
      "An improving method for the operational reliability of the multi-energy device",
    code: "CN201910621448.8",
    status: "Granted",
  },
  {
    title: "A demand response method for the multi-energy device",
    code: "CN201811202661.7",
    status: "Granted",
  },
  {
    title: "A handling approach for integrated electricity-heat power flow",
    code: "CN201811639858.7",
    status: "Granted",
  },
  {
    title:
      "A reliability evaluation method of the energy system containing multiple combined heat and power plants",
    code: "CN201811582654.4",
    status: "Granted",
  },
  {
    title:
      "A planning method of storage devices in integrated electricity and gas systems considering reliability constraints",
    code: "CN202011115587.2",
    status: "Granted",
  },
  {
    title:
      "An analytical operational reliability evaluation method for integrated electricity and gas systems",
    code: "CN202011115733.1",
    status: "Granted",
  },
  {
    title:
      "A configuration method of combined heat and power plants considering electricity-heat demand response",
    code: "CN201910401970.5",
    status: "Granted",
  },
  {
    title:
      "A multi-energy load prediction method based on energy consumption state transitions",
    code: "CN202110461232.7",
    status: "Granted",
  },
];

export const softwareCopyrights: Credential[] = [
  {
    title: "Steady-state power flow analysis software for multi-energy networks",
    code: "2019SR0361938",
    status: "Granted",
    url: "/files/projects/2019SR0361938.jpg",
  },
  {
    title:
      "Multi-energy complementary coordinated optimal planning software considering supply-demand temporal-spatial and supplementary characteristics",
    code: "2019SR0362770",
    status: "Granted",
    url: "/files/projects/2019SR0362770.jpg",
  },
  {
    title:
      "Integrated electricity and gas systems reliability evaluation analyzing software based on integrated optimal power flow techniques",
    code: "2019SR0362939",
    status: "Granted",
    url: "/files/projects/2019SR0362939.jpg",
  },
];

export const serviceRoles: ServiceRole[] = [
  {
    title: "Guest Editor",
    organization:
      "Engineering Report | Optimal Operation and Control of Smart Energy Systems",
    url: "https://onlinelibrary.wiley.com/page/journal/25778196/homepage/call-for-papers/si-2022-010872",
  },
  {
    title: "Guest Editor",
    organization:
      "Integrated Intelligent Energy | Optimization, Control and Cyber-Security of Integrated Energy System",
    url: "http://www.hdpower.net/CN/news/news89.shtml",
  },
  {
    title: "Special Session Chair",
    organization: "2022 7th Asia Conference on Power and Electrical Engineering",
    url: "/files/Professional/2022_ICPS_sessionChair_ShengWang.pdf",
  },
  {
    title: "Director",
    organization:
      "IEEE PES Electric Vehicle Satellite Committee-China, EV Participating Electricity Market Trading Subcommittee",
  },
];

export const reviewService: ServiceGroup[] = [
  {
    title: "Journal Review Service",
    items: [
      "IEEE Transactions on Power Systems",
      "IEEE Transactions on Smart Grid",
      "IEEE Transactions on Sustainable Energy",
      "IEEE Transactions on Reliability",
      "Applied Energy",
      "IET Generation, Transmission & Distribution",
      "Journal of Modern Power Systems and Clean Energy",
      "CSEE Journal of Power & Energy Systems",
      "Electric Power Systems Research",
      "Protection and Control of Modern Power Systems",
      "European Transactions on Electrical Power",
      "Engineering Report",
      "Frontiers in Energy Research",
      "RAIRO - Operations Research",
    ],
  },
  {
    title: "Chinese Journal Review Service",
    items: [
      "Automation of Electric Power Systems",
      "Electric Power Construction",
      "Power System Technology",
      "Southern Power System Technology",
      "Integrated Intelligent Energy",
    ],
  },
  {
    title: "Conference Review Service",
    items: [
      "2023 IEEE IAS Industrial and Commercial Power System Asia",
      "2022 IEEE IAS Industrial and Commercial Power System Asia",
      "International Conference on Energy Engineering and Environmental Protection 2017",
      "International Journal of Electrical Power & Energy Systems 2019",
      "EDAS 2017",
    ],
  },
];

export const talks: Talk[] = [
  {
    year: "2023",
    title:
      "Reliability issues during the decarbonization of energy systems - the case of hydrogen blended electricity and gas systems",
    event: "Young scholar conference at Beijing Jiaotong University",
    location: "Beijing, China",
    url: "/files/Professional/ReliabilityIssuesDuring.pdf",
    note: "Invited talk in Chinese",
  },
  {
    year: "2023",
    title:
      "Operational Risk for Integrated Power and Gas Systems Considering Varying Hydrogen Concentrations With High Penetration of Wind",
    event:
      "2023 IEEE IAS Global Conference on Renewable Energy and Hydrogen Technologies",
    location: "Conference presentation",
    url: "/files/Professional/OperationalRiskfor.pdf",
  },
  {
    year: "2022",
    title:
      "Steady-State Optimal Power Flow in Integrated Electricity and Gas Transmission Systems with Hydrogen Injections",
    event: "2022 IEEE IAS Industrial and Commercial Power System Asia",
    location: "Conference presentation",
    url: "/files/Professional/Steady-StateOptimalPower.pdf",
  },
  {
    year: "2021",
    title:
      "Study on Carbon Emission and Impact Factor based on LMDI method: the Case of Jiangsu",
    event: "2021 International Conference on Power System Technology",
    location: "Conference presentation",
    url: "/files/Professional/StudyonCarbon.pdf",
  },
  {
    year: "2021",
    title:
      "Operational reliability evaluation of distributed multi-energy systems considering optimal control of energy storages",
    event: "2021 IEEE IAS Industrial and Commercial Power System Asia",
    location: "Conference presentation",
    url: "/files/Professional/OperationalReliabilityEvaluation.pdf",
  },
  {
    year: "2020",
    title:
      "Contingency Management in Integrated Electricity and Gas Systems Considering Gas Flow Dynamics",
    event: "2020 Applied Energy Symposium: low carbon cities and urban energy systems",
    location: "Conference presentation",
    url: "/files/Professional/ContingencyManagementin.pdf",
  },
  {
    year: "2020",
    title:
      "A bi-Level equivalent model of scheduling an energy hub to provide operating reserve for power systems",
    event: "2020 Tsinghua-HUST-IET Electrical Engineering Academic Forum",
    location: "Conference presentation",
    url: "/files/Professional/ABi-LevelEquivalent.pdf",
  },
  {
    year: "2019",
    title:
      "Optimal Sizing and Asset Utilization Efficiency Analysis of the Distributed Multi-Energy System Considering the Energy",
    event: "Academic annual conference of Chinese Society for Electrical Engineering",
    location: "Conference presentation",
    url: "/files/Professional/OptimalSizingand.pdf",
    note: "In Chinese",
  },
  {
    year: "2018",
    title:
      "Economic impact of power to gas in integrated electricity and gas systems with high wind penetration",
    event: "2018 IEEE Innovative Smart Grid Technologies-Asia",
    location: "Conference presentation",
    url: "/files/Professional/EconomicImpactof.pdf",
  },
  {
    year: "2017",
    title:
      "Cooperation of demand response and traditional power generations for providing spinning reserve",
    event: "2017 International Conference on Applied Energy",
    location: "Conference presentation",
    url: "/files/Professional/CooperationofDemand.pdf",
  },
];

export const awardGroups: AwardGroup[] = [
  {
    title: "Academic Honors",
    items: [
      "Outstanding paper of conference of 2022 Integrated Intelligent Energy, 2022.",
      "Zhejiang Electric Power Science and Technology Progress Award, 2021.",
      "First Prize for Outstanding Papers at the Academic Annual Meeting of the Energy Internet Special Committee of the Society of Electrical Engineering, 2019.",
      "Academic Rising Star of Zhejiang University Doctoral Student, 2019.",
    ],
  },
  {
    title: "Study Achievements",
    items: [
      "Graduate of Merit / Triple A graduate, 2019-2020.",
      "Award of Honor for Graduate, 2019-2020.",
      "Nandu Scholarship, 2019-2020.",
      "China Scholarship Council Scholarship, 2019.",
      "Academic Scholarship for Doctoral Student, 2015-2016.",
      "CRRC Zhuzhou Scholarship, 2014-2015.",
      "Scholarship for Outstanding Merits, 2013-2015.",
      "Scholarship for Outstanding Students, 2013-2015.",
    ],
  },
  {
    title: "Sports Awards",
    items: [
      "Sanhaobei Tennis Cup (men's single), 6th place, 2017.",
      "Sanhaobei Tennis Cup (men's double), 4th place, 2017.",
      "Sanhaobei Tennis Cup (men's single), 5th place, 2015.",
      "Sanhaobei Tennis Cup (team), 7th place, 2015.",
    ],
  },
];

export const selectedAwards = [
  awardGroups[0].items[0],
  awardGroups[0].items[1],
  awardGroups[0].items[2],
  awardGroups[0].items[3],
  awardGroups[1].items[1],
];

export const communityContributions = [
  "Volunteer teaching in Xiaman, organized by a social organization, 2019.",
  "Volunteer teaching in Pinmen, organized by Zhejiang University, 2017.",
  "Language partner, organized by Zhejiang University, 2017.",
];
