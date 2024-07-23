import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Picture a student who loves technology and wants to make a real difference – that's me, Karthik Chitturi. I'm currently studying Computer Science and Design at Sagi RamaKrishnam Raju Engineering College, where I've worked hard to maintain a CGPA of 8.12.

My journey got exciting when I joined PURPLELANE as a Frontend Developer and UI Designer Intern. There, I worked with a great team to turn design ideas into interactive user interfaces. Before that, at MCR WEB SOLUTIONS, I helped create websites for clients, including a special alumni portal and a conference site for the University of Hyderabad.

One of my proudest projects is SAANA, a platform for over 200 NRI graduates from the 1990s. Inspired by my mentor, Dr. Suresh, and supported by a fantastic team, we integrated PayPal for payments, managed memberships, and built a dynamic dashboard. My skills in HTML, CSS, JavaScript, and PHP were key, but it was our teamwork that made SAANA possible.

Right now, I'm working on a web analytics portal for the University of Hyderabad, using PHP and Geolocation API for real-time visitor tracking. My technical skills include the MERN Stack, Python, SQL, MySQL, GitHub, Figma, and Blender, and I have certifications in ReactJs and other web technologies. I've also joined many hackathons to keep improving my skills.

What I love most is working with others to create software that makes a difference. Through these projects, I've learned that teamwork and a shared vision can achieve amazing things and I'm excited about what the future holds.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Apr 2024",
    role: "Frontend Developer & UI Desginer Intern",
    company: "PurpleLane",
    description: ` Collaborated with the development team to implement and maintain frontend features for web applications.
    Translated design wireframes into responsive and interactive user interfaces.
    Developed widgets and components to improve the appearance and feel of the website and to upgrade the platform’s learning management system.`,
    technologies: ["CSS", "JavaScript", "PHP", "MySQL","Figma"],
  },
  {
    year: "May 2022 - March 2023",
    role: "FullStack Web Developer Intern",
    company: "MCR Web Solutions",
    description: `Worked as a Full Stack Developer intern, while gaining knowledge and expertise from more seasoned experts.Created websites that prioritize clients goals while emphasizing usability and flexibility.College Alumni Website , Conference Website of UoH are some of the significant works.
`,
    technologies: ["PHP", "MySQL" ,"GitHub","Version Control"],
  },
  {
    year: "May 2022 - March 2023",
    role: "E-Commerce Intern",
    company: "Bhimavaram Online",
    description: `Incorporating local stores and their items into the Bhimavaram Online Ecommerce App , as well as managing their shop operations on the platform.
    Creating digital assets to boost store visibility on the app, including product banners, category visuals, promotional video content, and overall store banners.
    Driving student engagement and exposing them to newly added stores via interactive activities like Housie and Quizzes made possible by store sponsorships.`,
    technologies: ["Graphic Design","Marketing","Sales","Delegation"],
  },
];

export const PROJECTS = [
  {
    title: "Web Analytics Portal",
    type:"Self Learning Project",
    image: project1,
    description:
      `Developed a web analytics portal with PHP and the Geolocation API to track visitor behavior and geographic data.
      The portal is designed to deliver actionable insights, enabling data-driven decisions that can lead to increased user engagement and optimized website performance.
      Implemented features to display page rankings, hit counts, and other performance metrics through a user-friendly, real-time dashboard, facilitating easy interpretation of data to drive website improvements.
      PINCODE: 2024`,
    technologies: ["PHP", "Geo-location API", "MySQL", "Data Visualization"],
    live:"http://dbtcmi.rf.gd/admin",
    code:"https://github.com/chitturikarthik/dbtcmi_dashboard"
  },
  {
    title: "SAANA",
    type:"Consultancy Project",
    image: project2,
    description:
      `SAANA - SRKR Alumni Association of North America, is a website for the alumni organization of SRKR college that covers registration with payment gateway integration, membership management with their details,members dashboard etc and all other components of an alumni website`,
    technologies: ["JavaScript", "PHP", "MySQL","PayPal Payments API"],
    live:"https://thesaana.org",
    code:"https://github.com/chitturikarthik/saana_backup"
  },
  {
    title: "CTFPPB 2023",
    type:"Client Project",
    image: project3,
    description:
      `CTFPPB - Current Trends and Future Prospects of Plant Biology.
        A user centric and mobile-responsive web portal dedicated to the University of Hyderabad’s School of Life Sciences. The goal was to establish a forum that brings together great minds in plant biology to debate the most recent advances and future prospects.`,
    technologies: ["Bootstrap","PHP","MySQL"],
    live:"https://chitturikarthik.github.io/ctfppb2023/",
    code:"https://github.com/chitturikarthik/ctfppb2023"
  },
];

export const CONTACT = {
  address: "Palakol, West Godavari, AndhraPradesh, India",
  phoneNo: "+91 93989 54816",
  email: "karthik.official@gmail.com",
};
