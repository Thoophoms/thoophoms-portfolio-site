import Hero from "../components/Hero";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiDart, SiTypescript, SiExpress, SiSpringboot, SiPostgresql, SiMysql, SiMongodb, SiPython, SiPytorch, SiTensorflow, SiGit, SiGithub, SiGithubactions, SiJenkins, SiAmazonaws, SiVercel, SiScikitlearn, SiLangchain, SiGraphql, SiHuggingface, SiFlutter } from 'react-icons/si';
import SkillCard from "../components/SkillCard";


// Skill lists
const skillCatagories = [
    {
        title: "AI / Machine Learning",
        skills: [
            { name: "Python (NumPy, Pandas, Matplotlib)", icon: <FaPython /> },
            { name: "PyTorch / TensorFlow", icon: <SiPytorch /> },
            { name: "Scikit-learn", icon: <SiScikitlearn /> },
            { name: "LangChain / LLMs", icon: <SiLangchain /> },
            { name: "Hugging Face / LLMs", icon: <SiHuggingface /> },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Flutter / Dart", icon: <SiDart /> },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Spring Boot", icon: <SiSpringboot /> },
            { name: "REST API & GraphQL", icon: <SiGraphql /> },
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "Docker", icon: <FaDocker /> },
            { name: "Git & GitHub", icon: <FaGitAlt /> },
        ]
    },
];

// Educations
const educationData = [
    {
        schoolName: "Montclair State University",
        degree: "Master of Science (M.S.) in Computer Science",
        graduate: "Jan 2026",
        gpa: "3.69",
    },
    {
        schoolName: "Chulalongkorn University (Thailand)",
        degree: "Bachelor of Fine and Applied Arts",
        graduate: "Jul 2016",
        gpa: "3.06"
    }
];

// Projects
const individualProjectData = [
    {
        projectName: "Research & Reproduction of Toolformer (Meta AI)",
        points: [
            "A project focused on studying and replicating Meta's Toolformer, a language model that learns to use external tools (APIs, calculators, search engines, translation services) in a self-supervised way. The work involves analyzing the original paper, recreating the data preparation pipeline with API-augmented prompts, implementing fine-tuning of a base model (e.g., GPT-2) to autonomously decide when and how to call APIs, and testing performance on tasks like QA, math, and translation. This reproduction demonstrates both theoretical understanding and practical implementation of cutting-edge AI research in tool-augmented language models.",
        ],
    },
    {
        projectName: "Current Research on Retrieval-Augmented Generation (RAG)",
        points: [
            "Actively exploring how large language models can be enhanced with external knowledge retrieval to improve accuracy and reduce hallucinations. My work involves studying the RAG pipeline, implementing document chunking and embedding-based search (e.g., FAISS, pgvector), and integrating retrieval with generation models such as GPT or open-source LLMs. The research focuses on optimizing prompt construction, evaluating answer relevance, and experimenting with different vector databases and retrieval strategies to make AI systems more reliable, explainable, and grounded in real data.",
        ],
    },
    {
        projectName: "Current Research on Federated Orthogonal Training (FOT)",
        points: [
            "Investigating methods to mitigate global catastrophic forgetting in continual federated learning, based on the paper “Federated Orthogonal Training: Mitigating Global Catastrophic Forgetting in Continual Federated Learning” (Bakman et al., 2023). My work involves studying the mathematical foundations, reproducing experiments, and analyzing how orthogonal gradient constraints improve knowledge retention across tasks and clients. The focus is on understanding the balance between local updates and global model stability, and exploring applications of FOT in real-world federated systems.",
        ]
    },

];

// Projects
const groupProjectData = [
    {
        projectName: "Serenity Space E-Commerce Website",
        points: [
            "A full-stack project (HTML, CSS, JavaScript, PHP, SQL) showcasing a sustainable lifestyle store. Implemented role-based access with secure authentication, developed a backend with prepared statements and hashed passwords, and designed a relational database for products, orders, and inventory management. Deployed and tested the site on a cPanel server, ensuring reliability, security, and smooth user experience from browsing to checkout."
        ]
    },
    {
        projectName: "Climate Change Visualization Web App",
        points: [
            "A React-based dashboard that pulls live and historical data from trusted climate APIs (e.g., NASA/NOAA) and renders interactive maps (Leaflet/Mapbox) and charts. Users can explore global temperature trends, sea-level changes, and extreme weather patterns with city/country filters, timeline scrubbing, and hover tooltips. The frontend (React + Hooks) consumes a lightweight REST layer for fast, cached requests and updates in near real-time. Designed mobile-first with accessible UI, the app makes complex climate data intuitive, explorable, and shareable.",
        ]
    },
];

// Experiences
const experienceData = [
    {
        company: "7 Eagle Group",
        role: "Software Developer",
        duration: "Feb 2023 - June 2026",
        summary: "Develop responsive website applications that meet client requirements using a diverse set of technologies such as HTML, CSS, JavaScript, Node.js, and React, to create visually appealing and user-friendly websites. Leverage proficiency in Python for efficient database management and data analysis, utilizing the Python Pandas library to manipulate, analyze, and explore large datasets and perform complex data operations. Apply SQL expertise to ensure effective data retrieval, querying, and management in relational databases.",
        points: [
            "Proficient in Python Pandas library for data manipulation, analysis, and exploration, enabling efficient handling of large datasets and complex data operations.",
            "Strong understanding and utilization of Git for version control and collaboration, including branching, merging, and resolving conflicts.",
            "Proficient in working with GitHub as a remote repository for code hosting, collaboration, and managing project workflows.",
            "Extensive experience and proficiency in Unix command line for efficient and effective system navigation, file management, and task automation.",
            "Extensive knowledge and experience in SQL (Structured Query Language) for relational databases, allowing for effective data retrieval, querying, and management.",
            "Familiarity with NoSQL databases, such as MongoDB or Cassandra, and proficiency in working with their respective query languages, enabling efficient handling of unstructured or semi-structured data.",
            "Proven track record of using NoSQL databases to efficiently store, retrieve, and analyze large volumes of unstructured or semi-structured data, enabling scalability and flexibility in data-driven applications.",
            "Proficient in navigating, executing commands, and performing file management tasks in a Unix-based command line interface.",
        ]
    },
    {
        company: "United State Air Force",
        role: "Active Duty - Medical Logistics Technician",
        duration: "Mar 2019 - July 2023",
        summary: "Monitor and manage the medical logistics servers, provide alerts and coordinate responses for any anomalies. Establish user accounts, enable ordering, tracking, and accounting for all medical supplies and equipment. Create security controls for user accounts, granted privileges and permissions to enable work center productivity. Perform Server administrative functions and provide basic troubleshooting.",
        points: [
            "Recognized by the (CEO) of the Surgeon General from maximizing the health protection condition matrix.",
            "Established a Python script to efficiently convert emails for all medical personnel at the facility, streamlining communication processes and reducing repetitive tasks.",
            "Led and set up the virtual Equipment Review Authorization Activity (ERAA) meeting for head department members of the Joint Base Elmendorf-Richardson Hospital during COVID-19 pandemic; mitigated patient safety risk",
            "Purchase agent; processed 1.6K medical supply requisitions and purchased 291 medical devices valued at $3M",
            "Maintained, oversaw accountability and conducted inventories for 5.2K equipment assets worth $53M in support of 41 clinics.",
            "Assisted in the implementation of the 5-year Central Monitoring Project valued at $2.5M by forging patient vitals upgrades for 6 departments.",
            "Managed turn-in and disposition of equipment through Defense Reutilization Marketing Service.",
            "Supported 159K beneficiaries by receiving, inventorying and issuing medical supplies and accountable property for 65-bed US Department of Defense and veteran joint hospital.",

        ]

    }
];

export default function SkillPage() {
    return (
        <main>
            <Hero />

            <div className="container mx-auto p-8">
                {/* Main container for the two-column layout */}
                <div className="flex flex-col lg:flex-row gab-16">

                    {/* Left Column: SKILLS */}
                    <div className="lg:w-2/5">
                        <h1 className="text-5xl font-bold text-center lg:text-left mb-12">Skills</h1>

                        {skillCatagories.map((catagory) => (
                            <div key={catagory.title} className="mb-12">
                                <h2 className="text-2xl font-semibold mb-6">{catagory.title}</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                                    {catagory.skills.map((skill) => (
                                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-3/5">
                        <h1 className="text-5xl font-bold text-center lg:text-left ml-20 mb-12">Experience</h1>

                        {/* Scroll Box add later max-h-[600px]*/}
                        <div className="ml-20 border border-gray-300 rounded-lg p-6 overflow-y-auto">

                            {/* Educations Section */}
                            <div className="mb-20">
                                <h1 className="text-2xl font-bold underline mb-5">EDUCATIONS</h1>
                                {educationData.map((aSchool) => (
                                    <div key={aSchool.schoolName} className="mb-6">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                                            <h4 className="text-xl lg:text-left font-bold">{aSchool.schoolName}</h4>
                                            <p className="text-gray-500 sm:text-right">Graduate: {aSchool.graduate}</p>
                                        </div>
                                        <h4 className="text-lg italic text-gray-700 font-bold">{aSchool.degree}</h4>
                                    </div>
                                ))}
                            </div>

                            {/* Individual Projects Section */}
                            <div className="mb-10">
                                <h1 className="text-2xl font-bold underline mb-5">INDIVIDUAL PROJECTS & RESEARCHES</h1>
                                {individualProjectData.map((myProject) => (
                                    <div key={myProject.projectName} className="mb-6">
                                        <h4 className="text-xl lg:text-left font-bold">{myProject.projectName}</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-500 text-sm sm pl-6 mt-2">
                                            {myProject.points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Group Projects Section */}
                            <div className="mb-20">
                                <h1 className="text-2xl font-bold underline mb-5">GROUP PROJECTS & RESEARCHES</h1>
                                {groupProjectData.map((p) => (
                                    <div key={p.projectName} className="mb-6">
                                        <h4 className="text-xl lg:text-left font-bold">{p.projectName}</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-500 text-sm sm pl-6 mt-2">
                                            {p.points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Experiences Section */}
                            <div className="mb-5">
                                <h1 className="text-2xl font-bold underline mb-5">EXPERIENCES</h1>
                                {experienceData.map((exp) => (

                                    <div key={exp.company} className="mb-6">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                                            <h4 className="text-xl lg:text-left font-bold">{exp.company}</h4>
                                            <p className="text-gray-500 sm:text-right">{exp.duration}</p>
                                        </div>
                                        <h4 className="text-lg italic text-gray-700 font-bold">{exp.role}</h4>
                                        <p className="text-gray-500 text-sm sm indent-6 pl-6 mt-3 mb-3">{exp.summary}</p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-500 text-sm sm pl-6">
                                            {exp.points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </main>



    )
}
