import trivago from '../Images/projects/trivago_og.jpg'
import udemy from '../Images/projects/udemy1.png'
import hirist_logo from '../Images/projects/hirist_logo.webp'
import facebook from '../Images/projects/facebook.jpg'
import messwala from '../Images/projects/messwala.jpg'
export const projects = [
    {
        id: 1,
        image: trivago,
        link1: "https://github.com/omkarvgavade/trivago-clone",
        link2: "https://trivago24-acp24.vercel.app",
        title: "Trivago Clone",
        isBlog: true,
        blogLink: "https://medium.com/@omkarvgawade/a-cloned-version-of-trivago-547352830e37",
        text: "Trivago is a global hotel search platform. They are focused on reshaping the way travelers search for and compare hotels."
    },
    {
        id: 2,
        image: facebook,
        link1: "https://github.com/omkarvgavade/facebook-clone",
        link2: "https://facebook-acp24.vercel.app/login",
        title: "facebook Clone",
        isBlog: false,
        text: "Facebook is a leading social media platform across the globe. It has the ability to connect and share with the people you care about."
    },
    {
        id: 3,
        image: udemy,
        link1: "https://github.com/omkarvgavade/Project-Udemy",
        link2: "https://udemy-clone-masai.netlify.app/",
        title: "Udemy Clone",
        isBlog: true,
        blogLink: "https://medium.com/@omkarvgawade/experience-i-got-from-my-first-collaborative-project-of-building-the-clone-of-udemy-b449d9b4da5c",
        text: "An online education platform where students can buy the courses they like to learn from the top educators around the world and get certified."
    },
    {
        id: 4,
        category: 'Python',
        image: hirist_logo,
        link1: "https://github.com/omkarvgavade/Project-hirist-clone",
        link2: "https://hiristclone.netlify.app/",
        title: "Hirist.com Clone",
        isBlog: false,
        blogLink: "",
        text: "An online job-seeking and job-recruiting platform where candidates can apply for jobs and recruiter can post jobs."
    },
    {
        id: 5,
        category: 'Python',
        image: messwala,
        link1: "https://github.com/omkarvgavade/MessWala",
        link2: "https://github.com/omkarvgavade/MessWala",
        title: "MessWala (hackathon project)",
        isBlog: false,
        blogLink: "",
        text: "MessWala is the webapp where user can search for the messes in any city and contact the mess owner."
    },
]