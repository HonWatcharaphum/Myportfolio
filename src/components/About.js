import React from "react";

import image from "../assets/img/about.webp";
export const sectionID = "about";

const About = () => {
    return (
        <section id="about" className="section p-[8rem] bg-tertiary">
            <div className="container mx-auto">
                <div
                    className="flex flex-col xl:flex-row
        gap-24"
                >
                    <img
                        className="object-cover h-full w-[566px]
                    md:mxauto lg:mx-0 rounded-2xl"
                        src={image}
                        alt=""
                    />
                    <div
                        className="flex flex-col items-center
                    text-center lg:items-start lg:text-left"
                    >
                        <div className="flex flex-col">
                            <h2
                                className="text-3xl lg:text-4xl
                            font-medium lg:font-extrabold mb-3 
                            before:content-about relative 
                            before:absolute before::opacity-40 
                            before:-top-[2rem] before:hidden 
                            before:lg:block"
                            >
                                Hon Watcharaphum
                            </h2>
                            <hr className="mb-8 opacity-5 " />
                            <p className="text-3xl lg:font-extrabold mb-3 text-slate-50">
                                My profile
                            </p>
                            <p className="text-white">
                                Hello my name is Watcharaphum Leelaphumsiri. My nickname is Hon.
                                <br/>I'm 23 years old. My hobbies are singing and play games.
                                <br/>My Education you can see below this my profile.
                                <br/>You can contact me via email or mobile number as below.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* My Education */}
            <div className="h-sreeen w-full pt-[5rem] flex justify-center items-center">
                <div className="max-w-7xl mx-auto grid grid-cols-9">
                    {/* stack 1 */}
                    <div className="col-span-4 w-full h-full">
                        <div className=" bg-gray-600 w-full h-full rounded-md p-2 md:pl-4">
                            <h1 className="text-white text-center text-xl font-medium">
                                Matthayom Watnairong School
                            </h1>
                            <p className="text-white text-center sm:text-sm text-xs">
                                Major in English-Japanese Program <br />
                                2012-2018
                            </p>
                        </div>
                    </div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center md:pl-4">
                        <div className="h-full w-1 bg-gray-600"></div>
                        <div className="absolute w-6 h-6 rounded-full bg-gray-600 text-white text-center">
                            1
                        </div>
                    </div>
                    <div className="col-span-4 w-full h-full"></div>

                    {/* stack 2 */}
                    <div className="col-span-4 w-full h-full"></div>
                    <div className="relative col-span-1 flex justify-center items-center md:pl-4">
                        <div className="h-full w-1 bg-gray-600"></div>
                        <div className="absolute w-6 h-6 rounded-full bg-gray-600 text-white text-center">
                            2
                        </div>
                    </div>
                    <div className="col-span-4 w-full h-full">
                        <div className="w-full h-full  bg-gray-600 rounded-md p-2 md:pl-4">
                            <h1 className="text-white text-center text-xl font-medium">
                                Thai-Nichi Institute of Technology
                            </h1>
                            <p className="text-white text-center sm:text-sm text-xs">
                                Major in Japanese Business Administration <br />{" "}
                                2019-2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
