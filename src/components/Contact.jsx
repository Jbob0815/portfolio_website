import React from "react";

export const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-background p-6"
      >
        <div className="px-5 py-32">
          <h1 className="mt-5 font-circular-web font-extrabold text-6xl text-primary animation-appear">
            Contact Me
          </h1>
          <p className=" font-circular-web text-lg text-text-light text-center w-full">
            Here are some ways you can reach out to me.<br></br> I look forward
            to hearing from you!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="h-auto shadow-lg p-6 bg-card rounded-lg w-[min(90vw,30rem)] ">
            <h2 className="text-2xl text-text font-bold mb-4 mt-1">My Info</h2>
          </div>
          <div className="bg-card shadow-lg rounded-lg p-6 h-auto w-[min(90vw,30rem)]">
            <h2 className="text-2xl text-text font-bold mb-4">Contact Me</h2>
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
