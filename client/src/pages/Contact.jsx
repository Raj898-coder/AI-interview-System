// src/pages/Contact.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
  BsSend,
  BsClock,
  BsWhatsapp,
} from "react-icons/bs";

import { motion } from "motion/react";

function Contact() {
  const contactInfo = [
    {
      icon: <BsEnvelope />,
      title: "Email Address",
      value: "codewithsanto@gmail.com",
      link: "mailto:codewithsanto@gmail.com",
    },
    {
      icon: <BsTelephone />,
      title: "Phone Number",
      value: "+91 9905311746",
      link: "tel:+919905311746",
    },
    {
      icon: <BsWhatsapp />,
      title: "WhatsApp",
      value: "+91 9905311746",
      link: "https://wa.me/9905311746",
    },
    {
      icon: <BsGeoAlt />,
      title: "Location",
      value: "Sitamarhi, Bihar, India",
      link: "https://maps.google.com/?q=Sitamarhi,Bihar,India",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-100 overflow-hidden relative">

      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-green-300/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-emerald-200/40 blur-[120px] rounded-full"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative px-5 sm:px-6 lg:px-12 py-16 md:py-24">

        <div className="max-w-7xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-green-100 backdrop-blur-xl px-4 py-2 rounded-full text-xs sm:text-sm text-gray-700 mb-5 shadow-md">

              <BsEnvelope className="text-green-600" />

              Contact Us

            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-900">

              Let's Connect

              <span className="block mt-3 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">

                With Our Team

              </span>

            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base mt-6 leading-relaxed">

              Have questions, suggestions, or need support?
              Our team is always ready to help you with quick
              and professional assistance.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="px-5 sm:px-6 lg:px-12 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* ================= LEFT INFO ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >

              {contactInfo.map((item, index) => (

                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-white/80 border border-green-100 backdrop-blur-2xl rounded-3xl p-6 shadow-xl hover:border-green-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >

                  <div className="flex items-start gap-4">

                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-md text-xl">

                      {item.icon}

                    </div>

                    <div>

                      <h2 className="text-lg font-semibold text-gray-900 mb-1">

                        {item.title}

                      </h2>

                      <p className="text-sm text-gray-600 break-all">

                        {item.value}

                      </p>

                    </div>

                  </div>

                </a>

              ))}

              {/* Working Hours */}
              <div className="bg-white/80 border border-green-100 backdrop-blur-2xl rounded-3xl p-6 shadow-xl">

                <div className="flex items-start gap-4">

                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-md text-xl">

                    <BsClock />

                  </div>

                  <div>

                    <h2 className="text-lg font-semibold text-gray-900 mb-1">

                      Working Hours

                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">

                      Monday - Saturday <br />
                      9:00 AM - 8:00 PM

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* ================= RIGHT FORM ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="bg-white/80 border border-green-100 backdrop-blur-2xl rounded-[35px] p-6 md:p-8 shadow-2xl">

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">

                  Send Message

                </h2>

                <p className="text-sm text-gray-600 mb-8">

                  Fill out the form below and we’ll get back to you soon.

                </p>

                <form className="space-y-5">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">

                      Full Name

                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-2xl border border-green-100 bg-white outline-none focus:ring-2 focus:ring-green-400 text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">

                      Email Address

                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-2xl border border-green-100 bg-white outline-none focus:ring-2 focus:ring-green-400 text-sm"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">

                      Subject

                    </label>

                    <input
                      type="text"
                      placeholder="Enter subject"
                      className="w-full px-4 py-3 rounded-2xl border border-green-100 bg-white outline-none focus:ring-2 focus:ring-green-400 text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">

                      Message

                    </label>

                    <textarea
                      rows="5"
                      placeholder="Write your message..."
                      className="w-full px-4 py-3 rounded-2xl border border-green-100 bg-white outline-none focus:ring-2 focus:ring-green-400 text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >

                    Send Message

                    <BsSend />

                  </button>

                </form>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;