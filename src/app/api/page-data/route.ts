import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "saitejabudda@gmail.com",
      icon: "./images/icon/mail-icon.svg",
      link: "mailto:saitejabudda@gmail.com"
    },
    {
      type: "phone",
      label: "+91 7036254458",
      icon: "./images/icon/call-icon.svg",
      link: "tel:+90155882500"
    },
    // {
    //   type: "website",
    //   label: "www.mywebsite.com",
    //   icon: "./images/icon/web-icon.svg",
    //   link: "https://www.mywebsite.com"
    // }
  ],
  socialItems: [
    // {
    //   platform: "github",
    //   icon: "/images/icon/github-icon.svg",
    //   link: "https://github.com/saitejabudda"
    // },
    {
      platform: "linkedin",
      icon: "./images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/saiteja-buddha-458643147/"
    },
    {
      platform: "facebook",
      icon: "./images/icon/facebook-icon.svg",
      link: "https://facebook.com"
    }
  ]
};


const educationData = {
  education: [
  {
    title: "B.Tech in Electronics and Communication Engineering",
    institute: "Gitam University, Visakhapatnam, India",
    duration: "03/2015 – 03/2019",
    description:
      "Completed Bachelor of Technology in Electronics and Communication Engineering with a strong foundation in core engineering concepts and problem-solving skills."
  },
  {
    title: "Intermediate (Board of Intermediate Education)",
    institute: "Sri Chaitanya Junior College",
    duration: "05/2013 – 03/2015",
    description:
      "Completed intermediate education with a focus on Mathematics, Physics, and Chemistry, building a strong analytical and technical foundation."
  },
  {
    title: "Secondary School Certificate (SSC)",
    institute: "Bhashyam High School",
    duration: "06/2012 – 03/2013",
    description:
      "Completed secondary school education with emphasis on academic excellence and foundational learning."
  }
],

  skills: [
    {
  name: "React.js",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  rating: 5
},

{
  name: "JavaScript (ES6+)",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  rating: 5
},
{
  name: "Redux ",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  rating: 4
},
{
  name: "Vue.js ",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  rating: 4
},

{
  name: "CSS3",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  rating: 5
},
{
  name: "Bootstrap",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  rating: 4
},
{
  name: "Ant Design",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
  rating: 4
},
{
  name: "Node.js",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  rating: 4
},
{
  name: "PostgreSQL",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  rating: 4
},

{
  name: "Git",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  rating: 5
},
{
  name: "Bitbucket",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
  rating: 4
},
{
  name: "Jira",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  rating: 4
},

  ]
}

const contactLinks = {
  socialLinks: [
  
    {
      title: "GitHub",
      href: "https://github.com/creativetimofficial/material-dashboard-react"
    },
    {
      title: "LinkedIn",
      href: "www.linkedin.com/in/saiteja-buddha-458643147"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "saitejabudda@gmail.com",
      link: "mailto:saitejabudda@gmail.com"
    },
    {
      type: "phone",
      label: "+91 7036254458",
      link: "tel:+90155882500"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
