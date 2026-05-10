// src/pages/PrivacyPolicy.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  BsShieldLock,
  BsDatabaseCheck,
  BsEye,
  BsPersonCheck,
  BsArrowRight,
  BsCheckCircleFill,
} from "react-icons/bs";

import { motion } from "motion/react";

function PrivacyPolicy() {
  const privacyCards = [
    {
      icon: <BsShieldLock />,
      title: "Data Protection",
      desc: "We use modern security practices and encryption methods to keep your personal information secure and protected.",
    },
    {
      icon: <BsDatabaseCheck />,
      title: "Information Collection",
      desc: "We only collect necessary information to improve user experience and provide better platform services.",
    },
    {
      icon: <BsEye />,
      title: "Transparency",
      desc: "Your data is never sold to third parties. We maintain transparency about how your information is used.",
    },
    {
      icon: <BsPersonCheck />,
      title: "User Control",
      desc: "Users have full control over their accounts, profile information, and platform activity settings.",
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

              <BsShieldLock className="text-green-600" />

              Privacy Policy

            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-900">

              Your Privacy

              <span className="block mt-3 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">

                Matters To Us

              </span>

            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base mt-6 leading-relaxed">

              We are committed to protecting your personal data
              and ensuring complete transparency about how your
              information is collected, used, and secured.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= PRIVACY CARDS ================= */}
      <section className="px-5 sm:px-6 lg:px-12 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-6">

            {privacyCards.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 border border-green-100 backdrop-blur-2xl rounded-3xl p-6 shadow-xl hover:border-green-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md text-xl">

                  {item.icon}

                </div>

                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">

                  {item.title}

                </h2>

                <p className="text-[13px] md:text-sm text-gray-600 leading-relaxed">

                  {item.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= DETAILS SECTION ================= */}
      <section className="px-5 sm:px-6 lg:px-12 pb-24">

        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 border border-green-100 backdrop-blur-2xl rounded-[35px] p-6 md:p-10 shadow-2xl"
          >

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">

              Privacy Information

            </h2>

            <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed">

              <p>
                We collect limited information such as name,
                email address, and platform activity only to
                improve user experience and provide personalized services.
              </p>

              <p>
                Your information is securely stored and protected
                using modern encryption technologies and secure servers.
              </p>

              <p>
                We do not sell or share personal data with third
                parties without user consent unless required by law.
              </p>

              <p>
                Users can request account deletion or update their
                personal information anytime through account settings.
              </p>

              <p>
                By using our platform, you agree to the terms
                outlined in this Privacy Policy.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="px-5 sm:px-6 lg:px-12 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-green-500 to-emerald-500 p-8 md:p-14 shadow-2xl text-center">

            <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-white/20 blur-[100px] rounded-full"></div>

            <div className="relative z-10">

              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">

                Secure & Trusted Platform

              </h2>

              <p className="text-green-50 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed">

                Your privacy and security are our top priorities.
                We continuously improve our systems to keep your
                data protected and secure.

              </p>

              <button className="mt-7 px-7 py-3 text-sm md:text-base bg-white text-green-600 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">

                Learn More

                <BsArrowRight />

              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default PrivacyPolicy;