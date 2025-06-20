import React from "react";
import { Mail, Map, Phone, CircleUserRound } from "lucide-react";

import { Resend } from "resend";

const resend = new Resend("re_Gif4QUVG_7tz5Z4ra8qxhKEnXxgmYyJAQ");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "gonhill123@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});

const info = [
  { content: "Jakob Nieß", icon: <CircleUserRound /> },
  { content: "+49 176 42012290 ", icon: <Phone /> },
  { content: "jakob.niess2704@gmail.com", icon: <Mail /> },
  { content: "Schleswig-Holstein, Germany", icon: <Map /> },
];
export const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-background p-6"
      >
        <div className="px-5 py-15">
          <h1 className="mt-5 font-circular-web font-extrabold text-6xl text-primary animation-appear">
            Contact
          </h1>
          <p className=" font-circular-web text-lg text-text-light text-center w-full">
            Here are some ways you can reach out to me.<br></br> I look forward
            to hearing from you!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="h-auto shadow-lg p-6 px-8 bg-card rounded-lg w-[min(90vw,30rem)] ">
            <h2 className="text-2xl text-text font-bold mb-6 mt-1">My Info</h2>
            {info.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="text-primary mr-3">{item.icon}</div>
                <div>
                  <p className="text-sm text-text-light ">{item.content}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 py-4 border-t border-border text-left">
              <h2 className="text-text font-bold text-lg">Contact Details</h2>
              <p className="text-text-light text-sm mt-2 leading-relaxed">
                Feel free to reach out via email or phone for any inquiries,
                collaborations, or just to say hello. I aim to respond as soon
                as possible!
              </p>
            </div>
          </div>
          <div className="bg-card shadow-lg rounded-lg p-6 h-auto w-[min(90vw,30rem)]">
            <h2 className="text-2xl text-text font-bold mb-4">Get in Touch</h2>
            <form className="text-left">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-text mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="w-full text-text px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-text mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="w-full text-text px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-text mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  autoComplete="off"
                  rows="4"
                  className="w-full text-text px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors duration-300"
              >
                Still workimg on it...
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
