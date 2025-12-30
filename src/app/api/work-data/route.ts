import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/VVV.png",
        title: "Varun Management System (VMS)",
        client: "Varun Group",
        slug: "varun-management-system",
        description: "A comprehensive automotive dealership management platform designed and developed from scratch to streamline internal operations. The system features role-based access control (RBAC), real-time dashboards, and secure business tracking modules that provide executive stakeholders with actionable insights and improved operational efficiency.",
        link: "https://vmsdev.varungroup.com"
    },
    {
        image: "/images/work/SSS.png",
        title: "Sportszera Mobile App",
        client: "Mylas Information Technologies",
        slug: "sportszera-mobile-app",
        description: "A cross-platform sports e-commerce and service mobile application built using React Native. Sportszera enables users to purchase sports apparel, discover nearby playgrounds and stadiums, and register for tournaments, delivering a seamless and engaging user experience backed by secure authentication and API integrations."
    },
    {
        image: "/images/work/MMM.png",
        title: "MediaPiQ",
        client: "UnoSimple Technologies",
        slug: "mediapiq",
        description: "A web-based marketplace platform connecting media outlets with businesses for investment and client acquisition. The application includes multi-tier user registration, secure authentication flows, and a responsive UI built with React and Ant Design, ensuring a smooth and professional user journey.",
        link: "http://dev.mediapiq.us/%20Technologies:%20ReactJS,%20JavaScript,%20Node.js%20,Html,%20CSS,%20Antd%20,%20AWS%20web%20server%20etc"
    },
    {
        image: "/images/work/BBB.png",
        title: "Bulk Material Pro",
        client: "UnoSimple Technologies",
        slug: "bulk-material-pro",
        description: "A multi-user logistics and sales management web application supporting customers, carriers, drivers, and administrators. The platform streamlines order management, load assignments, driver workflows, and secure OTP-based access, enabling efficient material delivery and operational transparency.",
        link: "https://app.bulkmaterialpro.com/login"
    },
    {
        image: "/images/work/TTT.png",
        title: "Teletext Holidays",
        client: "Teletext India (UK)",
        slug: "teletext-holidays",
        description: "A UK-based travel advisory platform where front-end enhancements and performance optimizations were implemented to improve user experience across high-traffic booking flows. Focused on maintaining responsive design standards and delivering a consistent interface for international users.",
        link: "https://www.teletextholidays.co.uk/"
    },
    {
        image: "/images/work/AAA.png",
        title: "AlphaRooms",
        client: "Teletext India (UK)",
        slug: "alpharooms",
        description: "A hotel booking application supporting global travelers with optimized UI components and responsive layouts. Contributed to front-end maintenance and feature enhancements to ensure smooth booking experiences and improved performance across devices.",
        link: "https://www.booking.com/country/gb.en-gb.html?aid=357028&label=msn-VxnNxoKSfBmaQiP1Vhy_4g-80883014873893%3Atikwd-80883221764531%3Aloc-90%3Aneo%3Amte%3Alp260315%3Adec%3AqsAlphaRooms&sid=24d3f559f1011c6bb94fa8fe633a3e46&keep_landing=1&msclkid=a2a6b28c084d19f52cdddbdf66cb0735&utm_campaign=United%20Kingdom&utm_content=Cy%3A222-United%20Kingdom&utm_medium=cpc&utm_source=bing&utm_term=VxnNxoKSfBmaQiP1Vhy_4g&"
    }
];





export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
