"use client";

import Image from "next/image";
import Link from "next/link";

const LatestWork = () => {

  const workData = [
    {
      image: "./images/work/VVV.png",
      title: "Varun Management System (VMS)",
      client: "Varun Group",
      slug: "varun-management-system",
      description:
        "A comprehensive automotive dealership management platform designed and developed from scratch to streamline internal operations. Features RBAC, real-time dashboards, and secure business tracking.",
      link: "https://vmsdev.varungroup.com"
    },
    {
      image: "./images/work/SSS.png",
      title: "Sportszera Mobile App",
      client: "Mylas Information Technologies",
      slug: "sportszera-mobile-app",
      description:
        "A cross-platform sports e-commerce and service mobile app built with React Native for apparel sales, stadium discovery, and tournament registration."
    },
    {
      image: "./images/work/MMM.png",
      title: "MediaPiQ",
      client: "UnoSimple Technologies",
      slug: "mediapiq",
      description:
        "A marketplace platform connecting media outlets with businesses, featuring secure authentication and a responsive UI using React and Ant Design.",
      link: "http://dev.mediapiq.us/"
    },
    {
      image: "./images/work/BBB.png",
      title: "Bulk Material Pro",
      client: "UnoSimple Technologies",
      slug: "bulk-material-pro",
      description:
        "A logistics and sales management web application with multi-user roles, OTP authentication, and real-time delivery tracking.",
      link: "https://app.bulkmaterialpro.com/login"
    },
    {
      image: "./images/work/TTT.png",
      title: "Teletext Holidays",
      client: "Teletext India (UK)",
      slug: "teletext-holidays",
      description:
        "A UK-based travel advisory platform enhanced for performance, responsiveness, and high-traffic booking flows.",
      link: "https://www.teletextholidays.co.uk/"
    },
    {
      image: "./images/work/AAA.png",
      title: "AlphaRooms",
      client: "Teletext India (UK)",
      slug: "alpharooms",
      description:
        "A hotel booking platform with responsive UI improvements and performance optimizations for global travelers.",
      link: "https://www.alpharooms.com/"
    }
  ];

  return (
    <section>
      <div className="bg-muted">
        <div className="container py-16 xl:py-32">
          <div className="flex items-center justify-between border-b border-black pb-7 mb-16">
            <h2>Projects</h2>
            <p className="text-xl text-orange-500">( {workData.length} )</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-12">
            {workData.map((project, index) => (
              <div key={index} className="group flex flex-col gap-4">
                
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={570}
                    height={414}
                    className="w-full h-auto object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center bg-black/60 p-6 text-center">
                    <p className="text-white mb-4 text-sm">
                      {project.description}
                    </p>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 text-white px-6 py-3 rounded-full"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h5>{project.title}</h5>
                  <span className="text-sm">{project.client}</span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
