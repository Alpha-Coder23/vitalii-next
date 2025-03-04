import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiAppwrite,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiTypescript,
  SiStripe,
  SiPrisma,
  SiTwilio,
  SiShadcnui,
} from "react-icons/si";

const projects = [
 
  {
    num: "01",
    category: "Fullstack Web",
    title: "EduQuest | LMS Platform",
    description:
      "A Learning Management System (LMS) built with Next.js and React for a seamless user experience, integrated with Stripe for secure payments, and Mux for high-quality video streaming.",
    stack: [
      { icon: <SiNextdotjs />, name: "Next JS" },
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPrisma />, name: "Prisma" },
    ],
    image: "/assets/work/eduQuest.png",
    live: "https://edu-quest-lms-next-js.vercel.app/sign-in",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack Web",
    title: "CareSync | Healthcare App",
    description:
      "A modern Patient Management System streamlines patient care by managing appointments, records, and communication, offering real-time notifications and secure data handling.",
    stack: [
      { icon: <SiNextdotjs />, name: "Next JS" },
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiAppwrite />, name: "Appwrite" },
      { icon: <SiTwilio />, name: "Twilio" },
    ],
    image: "/assets/work/careSync.png",
    live: "https://care-sync-three.vercel.app/",
    github: "",
  },
  {
    num: "03",
    category: "Fullstack Web",
    title: "E-Market Hub | E-commerce Platform",
    description:
      "A full-stack, full-featured e-commerce platform with including both a user-facing store and an admin dashboard for managing products, orders, and users.",
    stack: [
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: <SiStripe />, name: "Stripe" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
    image: "/assets/work/eComPlatform.png",
    live: "https://mern-ecommerce-platform.vercel.app/",
    github: "",
  },
  {
    num: "04",
    category: "Capstone Mini",
    title: "EcoBin | Waste Management App",
    description:
      "A web application built using new technologies to provide efficient and intelligent waste management solutions by helping users to manage waste disposal smartly and sustainably.",
    stack: [
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiHtml5 />, name: "HTML 5" },
      { icon: <SiCss3 />, name: "CSS 3" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
    image: "/assets/work/ecoBin.png",
    live: "https://eco-bin-website.vercel.app/",
    github: "",
  },
  {
    num: "05",
    category: "Frontend Web",
    title: "Trendify | Fashion E-commerce",
    description:
      "A modern and stylish e-commerce platform designed with a focus on fashion and lifestyle products, offering a seamless shopping experience for customers to explore and purchase products.",
    stack: [
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
    image: "/assets/work/trendify.png",
    live: "https://mern-ecommerce-lake-one.vercel.app/",
    github: "",
  },
  {
    num: "06",
    category: "Frontend Web",
    title: "TastyTrails | Food Delivery Website",
    description:
      "A user-friendly food delivery website designed for offering a seamless experience for customers to order food with ease. Explore, order, and enjoy our services effortlessly.",
    stack: [
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiHtml5 />, name: "HTML 5" },
      { icon: <SiCss3 />, name: "CSS 3" },
      { icon: <SiJavascript />, name: "JavaScript" },
    ],
    image: "/assets/work/tastyTrails.png",
    live: "https://tasty-trails-food-delivery-react-php.vercel.app/",
    github:
      "",
  },
  {
    num: "07",
    category: "Fullstack WebApp",
    title: "NextBank | Online Banking App",
    description:
      "A full-stack online banking application built with a finance dashboard of sleek design, offering a seamless user experience for managing accounts, transactions, and payments securely.",
    stack: [
      { icon: <SiNextdotjs />, name: "Next JS" },
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiShadcnui />, name: "Shadcn UI" },
    ],
    image: "/assets/work/nextBank.png",
    live: "https://next-bank-weld.vercel.app/sign-in",
    github: "",
  },
];

export default projects;
