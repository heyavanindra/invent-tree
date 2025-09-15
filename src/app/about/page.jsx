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
          About Invent-Tree
        </motion.h1>
        <motion.p
          className="text-center text-lg mb-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Invent-Tree is a leading political survey and polling firm dedicated to providing
          high-quality, unbiased data to inform decision-making.
        </motion.p>

        {/* Who We Are */}
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
              <strong>Who We Are</strong><br />
              <span className="text-[#8777a9] font-semibold">
                Delivering insights that matter for over a decade.
              </span><br />
              <span>
                We’ve worked with political campaigns, advocacy groups, and media outlets
                to deliver accurate and actionable insights.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Mission */}
        <div className="p-6 rounded-2xl mb-10 bg-[#f4f7ff] dark:bg-[#2e2d2d]">
          <motion.div
            className="rounded-lg shadow px-6 py-6 border border-[#c1c7d0]/40 dark:border-gray-600"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p>
              <strong>Our Mission</strong><br />
              <span className="text-[#8777a9] font-semibold">
                Accurate. Transparent. Timely.
              </span><br />
              <span>
                To provide polling data that reflects the voice of the public,
                enabling informed decisions in the political landscape.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center tracking-wide text-[#67577f]"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.09, duration: 0.6, type: "spring" }}
        >
          Why Choose Invent-Tree?
        </motion.h2>
        <div className="p-6 mb-12 bg-[#f4f7ff] dark:bg-[#2e2d2d] rounded-2xl">
          <motion.ul
            className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <li><strong>Precision:</strong> Advanced statistical methods and representative sampling.</li>
            <li><strong>Integrity:</strong> Strict adherence to ethical polling standards.</li>
            <li><strong>Customization:</strong> Polls designed to answer your specific questions.</li>
            <li><strong>Speed:</strong> Fast turnaround without compromising quality.</li>
          </motion.ul>
        </div>

        {/* Team */}
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center tracking-wide text-[#67577f]"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
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
            <h3 className="text-lg font-bold mb-1">Alok A. Tripathi</h3>
            <p className="italic mb-1 text-[#8777a9]"> Chief Marketing Officer</p>
            <p>Over 15 years of experience in political research and data-driven strategies.</p>
          </motion.div>
          <motion.div
            className="rounded-lg p-5 border border-[#c1c7d0]/40 dark:border-gray-600 shadow-lg hover:scale-105 transition-transform bg-white dark:bg-[#1f1f1f]"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-bold mb-1">Abhishek Tripathi </h3>
            <p className="italic mb-1 text-[#8777a9]">Chief Operating Officer</p>
            <p>Specialist in statistical modeling, survey design, and advanced data interpretation.</p>
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
              <div><strong>Name:</strong> Invent-Tree Pvt. Ltd.</div>
              <div><strong>Founded:</strong> 2012</div>
              <div><strong>Headquarters:</strong> Lucknow, India</div>
              <div><strong>Email:</strong> info@invent-tree.com</div>
              <div><strong>Phone:</strong> +91 98765 12345</div>
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
        © 2025 Invent-Tree. All rights reserved.
      </motion.footer>
    </div>
  );
}

export default Page;
