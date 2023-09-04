// src/components/Contact.js

//make images inline somehow
import { MailIcon } from "@heroicons/react/solid";
import React from "react";


export default function Contact() {

  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
           <MailIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact Me
          </h1>
          <a
              href="https://github.com/akeni399"
              target = " blank"
              className="sm:w-1/2 w-100 p-4">
              <img
                className="mt-10 inline-flex border-0 py-2 px-6 focus:outline-none object-cover object-center rounded"
                alt="hero"
                src="./github-mark.svg"
                width = "110"
                height = "110"
              />
            </a>
          <a
              href="https://www.linkedin.com/in/anagha-kenikar-0a2948217/"
              target=" blank"
              className="sm:w-1/2 w-100 p-4">
              <img
                className="mt-10 ml-20 inline-flex border-0 py-2 px-6 focus:outline-none object-cover object-center rounded"
                alt="hero"
                src="./iconmonstr-linkedin-3.svg"
                width = "110"
                height = "110"
              />
          </a>
          <a
              href="mailto:akenikar@utexas.edu"
              className="sm:w-1/2 w-100 p-4">
              <img
                className="mt-10 ml-20 inline-flex border-0 py-2 px-6 focus:outline-none object-cover object-center rounded"
                alt="hero"
                src="./icons8-gmail.svg"
                width = "110"
                height = "110"
              />
            </a>
        </div>
      </div>
    </section>
  );
}
