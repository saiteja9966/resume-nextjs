"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const LatestWork = () => {
    
    const [workData, setWorkData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/work-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setWorkData(data?.workData);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, []);
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    return (
        <section>
            <div className="bg-muted">
                <div className="container">
                    <div className="py-16 xl:py-32 ">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                            <h2>Projects</h2>
                            <p className="text-xl text-orange-500">( 04 )</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
                            {workData?.map((value: any, index: any) => {
                                return (
                                    <div key={index} className="group flex flex-col gap-3 xl:gap-6" onClick={() => {
                                        setSelectedProject(value);
                                        setOpen(true);
                                    }}>
                                        <div className="relative">
                                            <Image src={value?.image} alt="image" width={470} height={314} className="rounded-lg w-full h-full object-cover" />
                                            <Link

                                                href=""
                                                // {`${value.slug}`}
                                                className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg"
                                            >
                                                <span className="flex justify-center items-center p-5 w-full">
                                                    <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.333374" width="64" height="64" rx="32" fill="#FE4300" />
                                                        <path
                                                            d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                                                            stroke="#FFFF"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col gap-0 xl:gap-2">
                                            <div className="flex items-center justify-between">
                                                <Link href={`${value.slug}`}>
                                                    <h5>{value?.title}</h5>
                                                </Link>
                                                <Image src={"/images/icon/right-arrow-icon.svg"} alt="right-arrow-icon" width={30} height={30} />
                                            </div>
                                            {/* <p>Client: {value?.client}</p> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
             {open && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
                    <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">

                        {/* Close */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            width={500}
                            height={300}
                            className="rounded-lg w-full object-cover mb-4"
                        />

                        {/* Content */}
                        <h3 className="text-2xl font-semibold mb-2">
                            {selectedProject.title}
                        </h3>

                        <p className="text-gray-600 mb-6">
                            {selectedProject.description}
                        </p>

                        {/* Button */}
                        <button
                            onClick={() =>
                                window.open(selectedProject.link, "_blank")
                            }
                            className="w-full bg-orange-500 text-white py-3 rounded-full font-medium hover:opacity-90 transition"
                        >
                            Visit Project
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default LatestWork