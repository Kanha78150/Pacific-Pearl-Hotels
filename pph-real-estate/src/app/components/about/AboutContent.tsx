"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutSidebar from "./AboutSidebar";

export default function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row gap-10">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4">
        <AboutSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-16">
        {/* Our Mission */}
        <motion.section
          id="mission"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-blue-800 mb-4 pl-3 border-l-4 border-blue-500">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Based in San Diego, California, Pacific Pearl Hotels (PPH) is one of
            the nation's largest independent hotel companies. PPH owns and/or
            operates 23 lodging properties, encompassing over 6,500 rooms and
            employing over 3,200 personnel throughout the United States. In
            addition to overseeing a successful network of independent hotels,
            boutique properties & resorts, Pacific Pearl Hotel's hotel brand
            affiliations have included Hyatt, Le Meridien, Marriott, Hilton,
            Crowne Plaza, DoubleTree by Hilton, Wyndham, Hilton Garden Inn,
            Radisson, Sheraton, Hampton Inn, Element, Fairfield Inn & Suites by
            Marriott, Wyndham Garden, Four Points by Sheraton, La Quinta, Park
            Plaza, Park Inn & Suites by Radisson, Country Inn & Suites,
            Staybridge Suites, Holiday Inn, Holiday Inn Express, and Best
            Western.
          </p>
        </motion.section>

        {/* Leadership */}
        <motion.section
          id="leadership"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6 pl-3 border-l-4 border-black">
            The Leadership Strength of PPH
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
              <p>
                Michael Gallegos, CHA, is the President and CEO of Pacific Pearl
                Hotels, LLC (PPH), based in San Diego. Since its founding, PPH
                has acquired over $3.5 billion in hotels and resorts across the
                U.S., Spain, and Mexico. The company owns and operates 23
                properties with over 6,500 rooms and employs more than 3,200
                people. Its portfolio includes both independent and branded
                hotels, with affiliations spanning major brands like Marriott,
                Hilton, Hyatt, and Wyndham.
              </p>
              <p>
                Gallegos earned his Bachelor's degree from the University of New
                Mexico, where he served as Student Body President. He also led
                the American Student Association, representing six million
                students nationwide. Beginning his hospitality career at age
                eleven, he is now a Certified Hotel Administrator and was named
                Ernst & Young’s National Entrepreneur of the Year in 2004. He
                has served on advisory boards for Wells Fargo and the University
                of San Diego School of Business.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/ceo.png"
                alt="Michael Gallegos"
                width={200}
                height={220}
                className="rounded-md shadow-lg mx-auto"
              />
              <p className="mt-3 font-semibold">Michael Gallegos</p>
              <p className="text-sm text-gray-600">CHA is President and CEO</p>
              <p className="text-sm text-gray-600">
                {" "}
                Pacific Pearl Hotels, LLC (PPH).
              </p>
            </div>
          </div>
        </motion.section>

        {/* Strengths */}
        <motion.section
          id="strengths"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-lg font-bold mb-3 pl-3 border-l-4 border-blue-500">
              Financial Strength
            </h3>
            <p className="text-gray-700">
              Pacific Pearl Hotels partners with opportunistic, quality-oriented
              investment capital institutions and high net worth individuals.
              Previous and current partners include Morgan Stanley, Merrill
              Lynch, GE Capital & GE Real Estate, Prudential Real Estate
              Advisors, ING Real Estate Advisors and Glenmont Capital
              Management.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 pl-3 border-l-4 border-blue-500">
              Balanced Focus
            </h3>
            <p className="text-gray-700">
              Pacific Pearl Hotel's philosophy is to challenge, motivate,
              inspire and reward our associates. We pride ourselves in providing
              the best care for our guests, and creating the most positive and
              memorable experiences possible for all of our associates.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 pl-3 border-l-4 border-blue-500">
              Industry Relationships
            </h3>
            <p className="text-gray-700">
              In addition to building a successful network of independent
              hotels, boutique properties & resorts, Pacific Pearl Hotels has
              developed long-term relationships with internationally recognized
              hotel companies. Our hotels are winners of many franchise honors,
              including awards for guest satisfaction, product quality, revenue
              management, architectural design honors, safety records, and many
              community services awards.
            </p>
          </div>
        </motion.section>

        {/* Recognition */}
        <motion.section
          id="recognition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-blue-800 mb-6 pl-3 border-l-4 border-blue-500">
            PPH National Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { rank: "6th", desc: "Ranked 6th of the Top 100 Independent..." },
              {
                rank: "16th",
                desc: "Ranked 16th of the Top 100 Management...",
              },
              {
                rank: "14th",
                desc: "Ranked 14th of the Top 25 Hotel Owners...",
              },
              {
                rank: "12th",
                desc: "Ranked 12th of the Top 100 Developers...",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white"
              >
                <p className="text-yellow-600 text-3xl font-bold">
                  {item.rank}
                </p>
                <p className="mt-2 text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Employee Relations */}
        <motion.section
          id="employee"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-lg font-bold pl-3 border-l-4 border-blue-500">
            Employee Relations
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Michael Gallegos, CHA, is the President and CEO of Pacific Pearl
            Hotels, LLC (PPH), based in San Diego. Since its founding, PPH has
            acquired over $3.5 billion in hotels and resorts across the U.S.,
            Spain, and Mexico. The company owns and operates 23 properties with
            over 6,500 rooms and employs more than 3,200 people. Its portfolio
            includes both independent and branded hotels, with affiliations
            spanning major brands like Marriott, Hilton, Hyatt, and Wyndham.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Gallegos earned his Bachelor's degree from the University of New
            Mexico, where he served as Student Body President. He also led the
            American Student Association, representing six million students
            nationwide. Beginning his hospitality career at age eleven, he is
            now a Certified Hotel Administrator and was named Ernst & Young’s
            National Entrepreneur of the Year in 2004. He has served on advisory
            boards for Wells Fargo and the University of San Diego School of
            Business. <br /> Michael Gallegos <br /> CHA is President and CEO{" "}
            <br />
            Pacific Pearl Hotels, LLC (PPH).
          </p>
        </motion.section>

        {/* Corporate Citizenship */}
        <motion.section
          id="citizenship"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-bold mb-4 pl-3 border-l-4 border-blue-500">
            Corporate Citizenship
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Pacific Pearl Hotels, we take citizenship very seriously. We
            firmly believe it is our responsibility to give back to our
            community; thus, Pacific Pearl Hotels contributes annually through
            our corporate offices, as well as through all of our hotels
            nationwide. These contributions serve to benefit a variety of
            social, charitable and community organizations. Our personnel's
            involvement in leadership positions within these organizations is
            just as important as our financial contributions.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
