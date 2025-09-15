"use client";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, type: "spring" }
  })
};

function Page() {
  return (
    <div className="min-h-screen bg-white text-[#222] dark:bg-[#1f1f1f] dark:text-white px-3 pb-16 transition-colors duration-300">
      <motion.div
        className="max-w-4xl mx-auto py-12 max-md:pt-35"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
      >
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-center mb-2 text-[#67577f]"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 1, type: "spring" }}
        >
          About TechNova Solutions
        </motion.h1>
        <motion.p
          className="text-center text-lg mb-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Empowering businesses with modern software solutions and digital transformation.
        </motion.p>

        {/* Company Mission */}
        <div className="p-6 rounded-2xl mb-10 bg-[#f4f7ff] dark:bg-[#2e2d2d]">
          <motion.div
            className="rounded-lg shadow px-6 py-6 border border-[#c1c7d0]/40 dark:border-gray-600"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p>
              <strong>Our Mission</strong><br />
              <span className="text-[#8777a9] font-semibold">
                Innovating for a smarter tomorrow.
              </span><br />
              <span>
                At TechNova Solutions, we are committed to building scalable, secure, and user-friendly
                applications that help businesses grow in the digital era.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Team */}
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center tracking-wide text-[#67577f]"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.09, duration: 0.6, type: "spring" }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-12 bg-[#f4f7ff] dark:bg-[#2e2d2d] p-6 rounded-2xl">
          <motion.div
            className="rounded-lg p-5 border border-[#c1c7d0]/40 dark:border-gray-600 shadow-lg hover:scale-105 transition-transform bg-white dark:bg-[#1f1f1f]"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-bold mb-1">Aarav Mehta</h3>
            <p className="italic mb-1 text-[#8777a9]">CEO & Founder</p>
            <p>Visionary leader with a passion for technology and digital innovation.</p>
          </motion.div>
          <motion.div
            className="rounded-lg p-5 border border-[#c1c7d0]/40 dark:border-gray-600 shadow-lg hover:scale-105 transition-transform bg-white dark:bg-[#1f1f1f]"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-bold mb-1">Priya Sharma</h3>
            <p className="italic mb-1 text-[#8777a9]">CTO</p>
            <p>Expert in cloud computing and scalable system architecture.</p>
          </motion.div>
        </div>

        {/* Privacy Policy */}
        <div className="p-6 mb-8 bg-[#f4f7ff] dark:bg-[#2e2d2d] rounded-2xl">
          <motion.div
            className="px-6 py-6 rounded-lg shadow-lg border border-[#c1c7d0]/40 dark:border-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-[#67577f]">
              Privacy Policy
            </h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>We respect your privacy and protect your data.</li>
              <li>No personal data is shared without your consent.</li>
              <li>All transactions are secured with end-to-end encryption.</li>
            </ul>
            <div className="mt-3 underline text-[#8777a9] cursor-pointer">
              Learn more about our privacy practices
            </div>
          </motion.div>
        </div>

        {/* Company Details */}
        <div className="p-6 bg-[#f4f7ff] dark:bg-[#2e2d2d] rounded-2xl">
          <motion.div
            className="rounded-lg px-6 py-6 shadow-lg border border-[#c1c7d0]/40 dark:border-gray-600"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22, duration: 0.8 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-[#67577f]">
              Company Details
            </h2>
            <div className="space-y-1 text-gray-700 dark:text-gray-300">
              <div><strong>Name:</strong> TechNova Solutions Pvt. Ltd.</div>
              <div><strong>Founded:</strong> 2020</div>
              <div><strong>Headquarters:</strong> Bengaluru, India</div>
              <div><strong>Email:</strong> contact@technova.com</div>
              <div><strong>Phone:</strong> +91 98765 43210</div>
              <div><strong>Legal:</strong> Registered under Indian Companies Act, 2013</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="text-center mt-8 text-gray-600 dark:text-gray-400"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        © 2025 TechNova Solutions. All rights reserved.
      </motion.footer>
    </div>
  );
}

export default Page;
