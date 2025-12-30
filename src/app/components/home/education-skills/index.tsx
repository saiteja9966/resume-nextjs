"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

const EducationSkills = () => {
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
    // const [educationData, setEductionData] = useState<any>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch('/api/page-data');
    //             if (!res.ok) throw new Error('Failed to fetch');
    //             const data = await res.json();
    //             setEductionData(data?.educationData);
    //         } catch (error) {
    //             console.error('Error fetching services:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <section>
            <div className="border-t border-muted overflow-hidden">
                <div className="container relative z-10">
                    <Image src={"/images/home/education-skill/edu-skill-vector.svg"} alt="vector" width={260} height={170} className="no-print absolute top-0 left-0 transform -translate-y-1/2" />
                    <div className="relative z-10 py-16 md:py-32">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
                            <h2>Education & Skills</h2>
                            <p className="text-xl text-orange-500">( 03 )</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
                            <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                                {educationData?.education?.map((value: any, index: any) => {
                                    return (
                                        <div key={index} className="flex items-start gap-6">
                                            <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                                                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                            </div>
                                            <div className="flex-1 flex flex-col gap-1">
                                                <h5 className="font-semibold">{value?.title}</h5>
                                                <p >
                                                    {value?.institute}
                                                </p>
                                                <p className="text-sm italic">
                                                    {value?.duration}
                                                </p>
                                                <p className="font-normal mt-1">
                                                    {value?.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
                                {educationData?.skills?.map((value: any, index: any) => {
                                    return (
                                        <div key={index} className="p-4 xl:p-6 border border-muted rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between">
                                            <div className="flex flex-col items-center gap-5">
                                                <Image src={value?.icon} alt="icon" width={70} height={70} />
                                                <p className="text-black font-normal">{value?.name}</p>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        width="9"
                                                        height="9"
                                                        viewBox="0 0 9 9"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            width="9"
                                                            height="9"
                                                            rx="4.5"
                                                            fill={i < value?.rating ? '#FE4300' : '#C0D8E0'}
                                                        />
                                                    </svg>
                                                ))}
                                            </div>


                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationSkills