import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2023 – Present",
      title: "Full Stack Developer",
      companyName: "Varun Group",
      companyLink: "https://vmsdev.varungroup.com",
      type: "Full-time",
      description:
        "Leading end-to-end development of the Varun Management System (VMS), architecting secure, role-based enterprise applications with real-time dashboards and executive-level reporting."
    },
    {
      year: "2022 – 2023",
      title: "Front-End Developer",
      companyName: "Mylas Information Technologies",
      companyLink: "https://www.mylastech.in/",
      type: "Full-time",
      description:
        "Developed Sportszera, a mobile e-commerce and sports facility platform enabling users to discover stadiums, playgrounds, and tournaments using React Native."
    },
    {
      year: "2021 – 2022",
      title: "Front-End Developer",
      companyName: "UnoSimple Technologies",
      companyLink: "https://www.unosimple.com",
      type: "Full-time",
      description:
        "Contributed to MediaPiQ and Bulk Material Pro platforms by implementing complex workflows, dashboards, secure authentication, and optimized API integrations."
    },
    {
      year: "2021 – 2021",
      title: "Front-End Developer",
      companyName: "Teletext India",
      companyLink: "https://www.teletext.co.uk/",
      type: "Full-time",
      description:
        "Maintained and optimized high-traffic UK-based travel platforms Teletext Holidays and AlphaRooms, delivering UI enhancements, responsive components, and performance improvements."
    }
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2 className="text-3xl font-bold">Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          {/* Timeline */}
          <div className="space-y-10 md:space-y-14">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-8 items-start relative"
              >
                {/* Left Column */}
                <div>
                  <h3 className="font-bold text-black mb-2">{exp.year}</h3>
                  <h4 className="text-lg">{exp.title}</h4>
                </div>

                {/* Timeline Column */}
                <div className="relative">
                  {/* Vertical Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-0 top-3 h-full w-px bg-muted"></div>
                  )}

                  {/* Dot */}
                  <div className="absolute left-0 top-2 transform -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                        index === 0 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 0 && (
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="pl-6 lg:pl-8">
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-black hover:text-primary font-normal underline-offset-4 hover:underline"
                    >
                      {exp.companyName}
                    </a>
                    <p className="text-base">{exp.type}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="pl-8 sm:pl-0">
                  <p className="text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
