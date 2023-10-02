import emoji from "react-easy-emoji";

export const greetings = {
  name: "Bassam Naeem",
  title: "Welcome.",
  description:
    "I'm Bassam Naeem, a dynamic and driven full-stack developer currently pursuing a BSCS degree at the University of Karachi. With an insatiable curiosity and a passion for coding, I thrive on turning innovative ideas into tangible, user-centric web solutions. Proficient in the MERN stack, Next.js, and Postgres, I'm constantly expanding my technological toolkit to create elegant and efficient solutions for real-world problems and exciting new projects.",
  resumeLink: "https://bassamnaeem.me/Resume/",
};

export const openSource = {
  githubUserName: "bassamnaeem",
};

export const contact = {};

export const socialLinks = {
  url: "https://www.ovsknife.com/home",
  github: "https://github.com/bassamnaeem",
  linkedin: "https://www.linkedin.com/in/bassamnaeem/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: " FULL STACK DEVELOPER EXPLORING EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
        ),
        emoji(
          "⚡ Experienced in Next.js for building dynamic web applications."
        ),
        emoji(
          "⚡ Build scalable and efficient Back end / APIs for your web and mobile applications."
        ),
        emoji(
          "⚡ Proficient in Git and Docker for version control and containerization."
        ),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
        },
        {
          skillName: "python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "logos:express",
        },

        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MySQL-icon",
          fontAwesomeClassname: "logos:mysql-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "logos:swagger",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "logos:github-icon",
        },
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "logos:visual-studio-code",
        },
        ,
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend",
  },
  {
    Stack: "Backend",
  },
  {
    Stack: "Database",
  },
];

export const educationInfo = [
  {
    schoolName: "University Of Karachi",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "Feburary 2021 - Present",
    desc: "Bachelors of Science in Computer Science",
    descBullets: [
      "The Bachelors of Science in Computer Science (BSCS) ,Courses include: Data Structures, Algorithms, Object Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, and Web Development.",
    ],
    github: "https://github.com/Bassamnaeem/",
  },
  ,
];

export const experience = [
  {
    role: "Full Stack Software Developer Intern",
    company: "Tixsee Labs LLC.",
    companylogo: "/img/icons/common/tixsee.png",
    date: "August 2023 -Present",
    descBullets: [
      "  As a Software Developer Intern at Tixsee Labs LLC,I work with Next.js, React.js, Node.js, Express, MongoDB, and Fastify to build modern web solutions, create efficient back-end systems, and tackle challenges collaboratively with a talented team. 💻🚀",
      "  I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    ],
  },
];

// Hobbies Section
export const hobbies = {
  title: "Hobbies",
  hobbiesList: [
    {
      name: "Reading books",
      iconifyClassname: "bx:bx-book",
    },
    {
      name: "Hiking",
      iconifyClassname: "bi:geo-alt",
    },
  ],
};

// Certifications Section
export const certifications = {
  title: "Certifications",
  certificationsList: [
    {
      title: "Server-side",
      authority: "Amazon Web Services",
      authorityLink: "https://aws.amazon.com/certification/",
      certificationLink:
        "https://www.youracclaim.com/badges/12345678-1234-5678-abcd-1234567890ab/public_url",
    },
    {
      title: "Google Cloud Certified - Professional Cloud Architect",
      authority: "Google Cloud",
      authorityLink: "https://cloud.google.com/certification",
      certificationLink:
        "https://www.credential.net/12345678-1234-5678-abcd-1234567890ab",
    },
  ],
};
export const projects = [
  {
    name: "Tours Things To Do",
    desc: "Tour Things To Do is a website that allows users to find Events in their cities and book tickets. It was built using NextJS, NodeJS, and Postgres.",
    link: "https://toursthingstodo.com/",
    tags: ["NextJS", "NodeJS", , "ExpressJS", "JavaScript", "Postgres"],
  },
  {
    name: " Boolean Information Model System",
    desc: "The information retrieval system is a search engine that allows users to search for documents based on keywords. It was built using Python and Tkinter.",
    github: "https://github.com/Bassamnaeem/boolean-ir-model-python",
    tags: ["Python", "Tkinter", "Jupyter Notebook"],
  },
];

export const seoData = {
  title: "Bassam's Portfolio",
  description: "Full Stack Developer showcasing my work and experience.",
  image:
    "https://avatars.githubusercontent.com/u/57295738?s=400&u=9265d91c84b00ab3ba57b6c2b9ec5cc7012881c5&v=4",
  url: "https://bassamnaeem.me/",
  keywords: [
    "Bassam Naeem",
    "Portfolio",
    "Full Stack Developer",
    "Open to work",
    "Tixsee Labs",
    "Developer",
    "web developer",
    "Pakistan",
    "Developer Student Clubs",
    "Nextjs developer",
    "Reactjs developer",
    "Canton Regional Chamber of Commerce",
    "Karachi",
    "Karachi University",
  ],
};
