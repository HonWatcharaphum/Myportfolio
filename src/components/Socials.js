import React from "react";

import { social } from "../data";

const Socials = () => {
    return (
        <ul className="flex space-x-6">
            {social.map((item, index) => {
                return (
                    <li
                      className="flex justify-center
                      item-center text-slate-50"
                      key={index}
                    >
                        <a className="text-base" href={item.href}>
                            {item.icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default Socials;
