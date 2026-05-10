import React from "react";
import {
  BsRobot,
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f5f7ff] to-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-8 md:p-12">

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-black text-white p-3 rounded-2xl shadow-md">
                  <BsRobot size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    InterviewIQ.AI
                  </h2>
                  <p className="text-sm text-gray-500">
                    AI Interview Platform
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-7 text-sm">
                AI-powered interview preparation platform designed to improve
                communication skills, technical knowledge and professional
                confidence for modern job seekers.
              </p>

              {/* Social Media */}
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  {
                    icon: <BsLinkedin />,
                    link: "https://www.linkedin.com/in/santosh-kumar-223098294",
                    hover: "hover:bg-[#0077B5] hover:border-[#0077B5]",
                  },
                  {
                    icon: <BsInstagram />,
                    link: "https://www.instagram.com/santosh_sarkar_420?igsh=MTBqeHM2azIzMjNxag==",
                    hover:
                      "hover:bg-gradient-to-r hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-[#ee2a7b]",
                  },
                  {
                    icon: <BsFacebook />,
                    link: "https://www.facebook.com/share/1GzwVbeAwJ/",
                    hover: "hover:bg-[#1877F2] hover:border-[#1877F2]",
                  },
                  {
                    icon: <BsWhatsapp />,
                    link: "https://wa.me/919905311746",
                    hover: "hover:bg-[#25D366] hover:border-[#25D366]",
                  },
                  {
                    icon: <BsYoutube />,
                    link: "https://www.youtube.com/@santoshraj-y7k",
                    hover: "hover:bg-[#FF0000] hover:border-[#FF0000]",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110 ${item.hover}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                Company
              </h3>

              <div className="flex flex-col gap-4">
                {[
                  {
                    name: "About Us",
                    path: "/about",
                  },
                  {
                    name: "Terms & Conditions",
                    path: "/terms",
                  },
                  {
                    name: "Privacy Policy",
                    path: "/privacy-policy",
                  },
                  {
                    name: "Refund Policy",
                    path: "/refund-policy",
                  },
                  {
                    name: "Contact Us",
                    path: "/contact",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="flex items-center justify-between text-gray-600 hover:text-black transition-all duration-300 group"
                  >
                    <span>{item.name}</span>

                    <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                Support
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <FiMail size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">Email</p>

                    <a
                      href="mailto:codewithsanto@gmail.com"
                      className="text-sm text-gray-600 hover:text-blue-600 transition"
                    >
                      codewithsanto@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <FiPhone size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">Phone</p>

                    <a
                      href="tel:+919905311746"
                      className="text-sm text-gray-600 hover:text-blue-600 transition"
                    >
                      +91 9905311746
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <FiMapPin size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">Location</p>

                    <a
                      href="https://www.google.com/maps?q=Sitamarhi,+Bihar,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-blue-600 transition"
                    >
                      Sitamarhi, Bihar, India
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                Stay Updated
              </h3>

              <p className="text-gray-600 text-sm leading-6 mb-5">
                Get latest interview tips, AI updates and career guidance
                directly in your inbox.
              </p>

              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />

                <button className="bg-black text-white rounded-xl py-3 font-medium hover:opacity-90 transition-all duration-300">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2026 InterviewIQ.AI. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
              <a href="#" className="hover:text-black transition">
                Privacy
              </a>

              <a href="#" className="hover:text-black transition">
                Terms
              </a>

              <a href="#" className="hover:text-black transition">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;