import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { contact } from "../data";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const sendEmail = (e) => {
        e.preventDefault();
    
        const { name, email, subject, message } = form;
    
        if (!message) {
            toast.error("Please fill in the message field.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            const templateParams = {
                user_name: name || "No name provided",
                user_email: email || "No email provided",
                user_subject: subject || "No subject",
                message: message,
            };
    
            emailjs
                .send("BOTwatcharaphum(noreply)", "hon.watcharaphum", templateParams, "68Z7s7u5dYpt18JbU")
                .then(
                    (result) => {
                        console.log(result.text);
                        console.log("message sent");
                        toast.success("Your message has been sent successfully. Thank you!", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };
    

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section bg-primary">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title mb-[4rem] before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:lg:block">
                        Contact me
                    </h2>
                </div>

                <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item;
                            return (
                                <div
                                    className="flex flex-col lg:flex-row gap-x-4"
                                    key={index}
                                >
                                    <div className="text-slate-50 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl mb-1">
                                            {title}
                                        </h4>
                                        <p className="mb-1">{subtitle}</p>
                                        <p className="text-slate-50 font-normal">
                                            {description}
                                            <br />
                                            Tel: 083-551-4539
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <form
                        onSubmit={sendEmail}
                        className="space-y-8 w-full max-w-[780px]"
                    >
                        <div className="flex gap-8">
                            <input
                                className="input"
                                type="text"
                                placeholder="Your name"
                                name="name"
                                value={form.name}
                                onChange={handleInputChange}
                            />
                            <input
                                className="input"
                                type="email"
                                placeholder="Your email"
                                name="email"
                                value={form.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <input
                            type="text"
                            className="input"
                            placeholder="Subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleInputChange}
                        />
                        <textarea
                            className="textarea"
                            placeholder="Your message"
                            name="message"
                            value={form.message}
                            onChange={handleInputChange}
                        ></textarea>
                        <button
                            type="submit"
                            className="flex-col btn btn-lg bg-gray-700 hover:bg-zinc-700-hover text-slate-50 rounded-md"
                            name="submit"
                        >
                            Send message
                        </button>

                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
