import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthModel from "../components/AuthModel";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { motion } from "motion/react";

import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText,
  BsArrowRight,
} from "react-icons/bs";

import { HiSparkles } from "react-icons/hi";

import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";

function Home() {
  const { userData } = useSelector((state) => state.user);

  const [showAuth, setShowAuth] = useState(false);

  const navigate = useNavigate();

  const handleInterview = () => {
    if (!userData) {
      setShowAuth(true);
      return;
    }

    navigate("/interview");
  };

  const handleHistory = () => {
    if (!userData) {
      setShowAuth(true);
      return;
    }

    navigate("/history");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f9ff] via-white to-[#effff5] overflow-hidden flex flex-col">
      <Navbar />

      {/* HERO BACKGROUND */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/40 blur-3xl rounded-full"></div>

        <div className="absolute top-40 right-10 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full"></div>
      </div>

      <div className="flex-1 relative z-10 px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">

          {/* TOP BADGE */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-xl bg-white/70 border border-white shadow-xl rounded-full px-5 py-3 flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-full">
                <HiSparkles className="text-green-600" size={18} />
              </div>

              <span className="text-sm sm:text-base text-gray-700 font-medium">
                AI Powered Smart Interview Platform
              </span>
            </motion.div>
          </div>

          {/* HERO SECTION */}
          <div className="text-center mb-24 md:mb-32">

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] max-w-6xl mx-auto text-gray-900"
            >
              Practice Interviews with{" "}

              <span className="relative inline-block">

                <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  AI Intelligence
                </span>

                <span className="absolute -bottom-2 left-0 w-full h-3 bg-green-100 rounded-full -z-10"></span>

              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-600 mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            >
              Role-based mock interviews with smart follow-ups,
              adaptive difficulty and real-time performance evaluation.
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <motion.button
                onClick={handleInterview}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group bg-gradient-to-r from-black to-gray-800 text-white px-8 sm:px-10 py-4 rounded-2xl shadow-2xl hover:shadow-black/30 transition-all duration-300 font-medium flex items-center gap-3"
              >
                Start Interview

                <BsArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
              </motion.button>

              <motion.button
                onClick={handleHistory}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white/80 backdrop-blur-xl border border-gray-200 px-8 sm:px-10 py-4 rounded-2xl hover:bg-white transition-all duration-300 shadow-lg font-medium"
              >
                View History
              </motion.button>

            </div>
          </div>

          {/* STEP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">

            {[
              {
                icon: <BsRobot size={28} />,
                step: "STEP 1",
                title: "Role & Experience Selection",
                desc: "AI adjusts difficulty based on selected job role.",
              },

              {
                icon: <BsMic size={28} />,
                step: "STEP 2",
                title: "Smart Voice Interview",
                desc: "Dynamic follow-up questions based on your answers.",
              },

              {
                icon: <BsClock size={28} />,
                step: "STEP 3",
                title: "Timer Based Simulation",
                desc: "Real interview pressure with time tracking.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="relative group"
              >

                <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-emerald-200 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>

                <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg mb-6">
                    {item.icon}
                  </div>

                  <div className="text-sm tracking-widest font-semibold text-green-600 mb-3">
                    {item.step}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

          {/* AI CAPABILITIES */}
          <div className="mb-32">

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900"
            >
              Advanced AI{" "}

              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Capabilities
              </span>

            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8">

              {[
                {
                  image: evalImg,
                  icon: <BsBarChart size={20} />,
                  title: "AI Answer Evaluation",
                  desc: "Scores communication, technical accuracy and confidence.",
                },

                {
                  image: resumeImg,
                  icon: <BsFileEarmarkText size={20} />,
                  title: "Resume Based Interview",
                  desc: "Project-specific questions based on uploaded resume.",
                },

                {
                  image: pdfImg,
                  icon: <BsFileEarmarkText size={20} />,
                  title: "Downloadable PDF Report",
                  desc: "Detailed strengths, weaknesses and improvement insights.",
                },

                {
                  image: analyticsImg,
                  icon: <BsBarChart size={20} />,
                  title: "History & Analytics",
                  desc: "Track progress with performance graphs and topic analysis.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >

                  <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>

                  <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">

                    <div className="flex flex-col md:flex-row items-center gap-8">

                      <div className="w-full md:w-1/2 flex justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full max-h-64 object-contain"
                        />
                      </div>

                      <div className="w-full md:w-1/2">

                        <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
                          {item.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>

                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* INTERVIEW MODES */}
          <div className="mb-28">

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900"
            >
              Multiple Interview{" "}

              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Modes
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">

              {[
                {
                  img: hrImg,
                  title: "HR Interview Mode",
                  desc: "Behavioral and communication based evaluation.",
                },

                {
                  img: techImg,
                  title: "Technical Mode",
                  desc: "Deep technical questioning based on selected role.",
                },

                {
                  img: confidenceImg,
                  title: "Confidence Detection",
                  desc: "Basic tone and voice analysis insights.",
                },

                {
                  img: creditImg,
                  title: "Credits System",
                  desc: "Unlock premium interview sessions easily.",
                },
              ].map((mode, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  className="group relative"
                >

                  <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>

                  <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

                      <div className="w-full sm:w-1/2">

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {mode.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                          {mode.desc}
                        </p>

                      </div>

                      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">

                        <img
                          src={mode.img}
                          alt={mode.title}
                          className="w-36 h-36 object-contain group-hover:scale-105 transition-all duration-300"
                        />

                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {showAuth && (
        <AuthModel onClose={() => setShowAuth(false)} />
      )}

      <Footer />
    </div>
  );
}

export default Home;