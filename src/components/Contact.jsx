import React from "react";
import { Mail, Map, Phone } from "lucide-react";

const info = [
  { title: "Email", content: "Schleswig-Holstein, Germany", icon: <Map /> },
  { title: "Email", content: "contact@jakobnieß.de", icon: <Mail /> },
  { title: "Email", content: "+49 176 42012290 ", icon: <Phone /> },
  { title: "Email", content: "", icon: <Mail /> },
];
export const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-background p-6"
      >
        <div className="px-5 py-32">
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
              <div key={index} className="flex items-center mb-4 text-text">
                <div className="text-primary mr-3">{item.icon}</div>
                <div>
                  <p className="text-sm text-text-light dark:text-text">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-6 py-4 border-t border-border text-left">
              <h2 className="text-text font-bold text-lg">Something</h2>
              <p className="text-text-light text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                ratione neque quia dolore earum atque dignissimos quaerat
                facilis nemo, in ex, excepturi fuga error? Possimus recusandae
                natus cupiditate veritatis delectus!
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
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
