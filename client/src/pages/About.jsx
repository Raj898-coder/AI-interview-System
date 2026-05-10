// src/pages/About.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  BsRobot,
  BsShieldCheck,
  BsBarChart,
  BsPeople,
  BsStars,
  BsCheckCircleFill,
  BsArrowRight,
} from "react-icons/bs";

import { motion } from "motion/react";

function About() {
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

              <BsStars className="text-green-600" />

              About Our Platform

            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-900">

              Revolutionizing Interviews

              <span className="block mt-3 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">

                with AI Technology

              </span>

            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base mt-6 leading-relaxed">

              Our AI-powered interview platform helps students,
              developers, and professionals prepare for real-world
              interviews through smart simulations, analytics,
              and personalized feedback.

            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

              <button className="px-6 py-3 text-sm md:text-base rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">

                Get Started

              </button>

              <button className="px-6 py-3 text-sm md:text-base rounded-2xl border border-green-200 bg-white/80 backdrop-blur-xl text-gray-800 font-semibold hover:bg-green-50 transition-all duration-300 flex items-center gap-2">

                Learn More

                <BsArrowRight />

              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="px-5 sm:px-6 lg:px-12 pb-16 md:pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="bg-white/80 border border-green-100 backdrop-blur-2xl rounded-3xl p-6 md:p-8 shadow-2xl">

                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg">

                  <BsRobot size={24} />

                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">

                  Our Mission

                </h2>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">

                  We aim to make interview preparation smarter,
                  easier, and more accessible using advanced AI
                  technology. Our platform creates realistic interview
                  experiences to improve confidence and technical skills.

                </p>

                <div className="space-y-3">

                  {[
                    "AI-powered mock interviews",
                    "Real-time performance analysis",
                    "Resume-based questions",
                    "Technical & HR interview modes",
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >

                      <BsCheckCircleFill className="text-green-500" />

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

            {/* Right Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="grid sm:grid-cols-2 gap-5"
            >

              {[
                {
                  icon: <BsShieldCheck size={24} />,
                  title: "Secure Platform",
                  desc: "Your data and interview history stay secure and protected.",
                },
                {
                  icon: <BsBarChart size={24} />,
                  title: "Analytics",
                  desc: "Track your interview progress with smart insights.",
                },
                {
                  icon: <BsPeople size={24} />,
                  title: "User Friendly",
                  desc: "Simple experience for students and professionals.",
                },
                {
                  icon: <BsRobot size={24} />,
                  title: "Smart AI",
                  desc: "Adaptive interview questions based on answers.",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-white/80 border border-green-100 backdrop-blur-2xl rounded-3xl p-5 shadow-xl hover:border-green-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >

                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md">

                    {item.icon}

                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">

                    {item.title}

                  </h3>

                  <p className="text-[13px] md:text-sm text-gray-600 leading-relaxed">

                    {item.desc}

                  </p>

                </div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="px-5 sm:px-6 lg:px-12 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {[
              {
                number: "10K+",
                label: "Mock Interviews",
              },
              {
                number: "5K+",
                label: "Active Users",
              },
              {
                number: "95%",
                label: "Success Rate",
              },
              {
                number: "24/7",
                label: "AI Support",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/90 border border-green-100 backdrop-blur-2xl rounded-3xl p-5 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">

                  {item.number}

                </h2>

                <p className="text-xs md:text-sm text-gray-600">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="px-5 sm:px-6 lg:px-12 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-green-500 to-emerald-500 p-8 md:p-14 shadow-2xl text-center">

            <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-white/20 blur-[100px] rounded-full"></div>

            <div className="relative z-10">

              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">

                Start Your AI Interview Journey Today

              </h2>

              <p className="text-green-50 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed">

                Practice smarter, improve faster, and get ready
                for your dream job with our AI-powered interview
                preparation platform.

              </p>

              <button className="mt-7 px-7 py-3 text-sm md:text-base bg-white text-green-600 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all duration-300">

                Explore Platform

              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;