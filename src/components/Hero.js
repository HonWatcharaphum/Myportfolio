import React from "react";

import honprofile from "../assets/img/honprofile.webp";
import wavehi from "../assets/img/wave-hello.gif";
import { Link } from "react-scroll";
import { sectionID } from "./About";
import Typical from "react-typical";

const Hero = () => {
    return (
        <section
            id="home"
            className="lg:h-[85vh] flex
    items-center bg-primary lg:bg-cover 
    lg:bg-center lg:bg-no-repeat py-32 lg:py-0 
    overflow-hidden"
        >
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">
                    <div
                        className="flex-1 flex flex-col 
            items-center lg:items-start"
                    >
                        <p className="text-xl text-slate-50 mb-[22px]">
                            <Typical
                                steps={['Hey ! ! !',2000,"I'm Watcharaphum (Hon)", 500]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </p>

                        <div className="flex flex-col items-center">
                            <h1 className="text-4xl text-white shadow-neon-white leading-[44px] md:text-5xl 
                            md:leadding-tight lg:text-7xl lg:leadding-[1.2] font-bold md:tracking-[-2px]">
                                I'm a Frontend
                            </h1>
                            <div className="flex flex-row">
                                <h1 className="text-4xl leading-[44px] md:text-5xl md:leadding-tight lg:text-7xl 
                                lg:leadding-[1.2] font-bold md:tracking-[-2px] ">
                                    Developer.
                                </h1>
                                <img
                                    className="w-[4.5rem] h-[4rem] mt-[0.5rem]"
                                    src={wavehi}
                                    alt=""
                                />
                            </div>
                        </div>

                        <p
                            className="pt-4 pb-8 md:pt-6 md:pb-12
                max-w-[480px] text-lg text-center
                lg:text-left text-slate-50 mb-[22px]"
                        >
                            I'm a Frontend Developer Who's turns from business
                            administration to be a Programmer
                        </p>
                        <Link
                            activeClass="active"
                            to={sectionID}
                            smooth={true}
                            duration={500}
                        >
                            <button
                                className="btn btn-md bg-zinc-500 rounded-[0.750rem]
                  hover:bg-zinc-700 hover md:btn-lg transition-all"
                            >
                                About me
                            </button>
                        </Link>
                    </div>
                    <div
                        className="hidden lg:flex flex-1 
            justify-end items-end h-full"
                    >
                        <img src={honprofile} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;