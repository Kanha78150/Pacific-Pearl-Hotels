"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutSidebar from "./AboutSidebar";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

export default function AboutContent() {
  const email: string = "ariana@pacificpearlhotels.com";
  const subject: string = " Partner with Us Inquiry";
  const body: string = `Hello,
  I am interested to partner with you.
  Please provide more details.`;

  const encodedSubject: string = encodeURIComponent(subject);
  const encodedBody: string = encodeURIComponent(body);

  const mailtoLink: string = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailLink: string = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const userAgent: string =
      typeof navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);
  return (
    <div className="bg-[#FAFAFA] max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row gap-10">
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
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            Our Mission
          </h2>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            At Pacific Pearl Hotels, our mission is to reimagine hotel
            management by blending timeless hospitality with forward-thinking
            innovation. We create spaces that honor local culture, elevate guest
            wellbeing, and deliver lasting value for owners and partners. Guided
            by sustainability, empowered by technology and data, and inspired by
            our deep hospitality roots, we aim to be more than operators — we
            are storytellers of place, architects of experience, and stewards of
            long-term growth.
          </p>
        </motion.section>

        {/* Our History */}
        <motion.section
          id="history"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            Our History
          </h2>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            With over 35 years of legacy in hotel ownership and operations,
            Pacific Pearl Hotels (PPH) brings a uniquely experienced perspective
            to managing hotels. While rooted in decades of proven success, we
            operate with a forward-looking mindset—constantly evolving,
            adapting, and innovating to meet today &apos;s dynamic hospitality
            landscape. We identify opportunities for growth and deliver tailored
            solutions that drive rapid operational revival. Our approach
            consistently enhances cash flow, strengthens profitability, and
            ensures long-term stability across our diverse portfolio.
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
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            The Leadership Strength of PPH
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 text-[#393939] text-xl font-normal font-general leading-relaxed space-y-4">
              <p>
                Michael Gallegos, CHA, is the President and CEO of Pacific Pearl
                Hotels, LLC (PPH), based in San Diego. Since its founding, PPH
                has acquired over $4 billion in hotels and resorts across the
                U.S., Spain, and Mexico. The company owns and operates 23
                properties with over 6,500 rooms and employs more than 3,200
                people. Its portfolio includes both independent and branded
                hotels, with affiliations spanning major brands like Marriott,
                Hilton, Hyatt, Choice, Accor, Best Western and Home2 Suites
                Wyndham.
              </p>
              <p>
                Gallegos earned his Bachelor&apos;s degree from the University
                of New Mexico, where he served as Student Body President. He
                also led the American Student Association, representing six
                million students nationwide. Beginning his hospitality career at
                age eleven, he is now a Certified Hotel Administrator and was
                named Ernst & Young’s National Entrepreneur of the Year in 2004.
                He has served on advisory boards for Wells Fargo and the
                University of San Diego School of Business.
              </p>
            </div>
            <div className="text-center bg-white border border-[#E1E1E1] p-3 inline-block">
              <Image
                src="/images/CEO.png"
                alt="Michael Gallegos"
                width={200}
                height={220}
                className="object-cover"
              />
              <p className="mt-2 font-semibold font-general text-lg text-[#000000]">
                Michael Gallegos, CHA
              </p>
              <p className="font-normal font-general text-[#000000] text-lg">
                CHA is President and CEO
              </p>
              <p className="text-sm text-[#393939] font-normal font-general">
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
          className="space-y-8 border border-[#E7E7E7] p-6 bg-white"
        >
          <div>
            <h3 className="text-xl text-[#161616] font-medium font-general mb-3">
              Financial Strength
            </h3>
            <p className="text-[#393939] text-lg font-normal font-general leading-relaxed">
              Pacific Pearl Hotels partners with opportunistic, quality-oriented
              investment capital institutions and high net worth individuals.
              Previous and current partners include Morgan Stanley, Merrill
              Lynch, GE Capital & GE Real Estate, Prudential Real Estate
              Advisors (PRISA Fund), ING Apollo Real Estate Advisors and
              Glenmont Capital Management.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="strengths"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 border border-[#E7E7E7] p-6 bg-white"
        >
          <div>
            <div>
              <h3 className="text-xl text-[#161616] font-medium font-general mb-3">
                Balanced Focus
              </h3>
              <p className="text-[#393939] text-lg font-normal font-general leading-relaxed">
                Pacific Pearl {"Hotel's"} philosophy is to challenge, motivate,
                inspire and reward our associates. We pride ourselves in
                providing the best care for our guests, and creating the most
                positive and memorable experiences possible for all of our
                associates.
              </p>
            </div>

            {/* New Sections */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <h3 className="text-xl text-[#161616] font-medium font-general mb-3">
                Guest Experience
              </h3>
              <p className="text-[#393939] text-lg font-normal font-general leading-relaxed">
                At Pacific Pearl Hotels, we go beyond great service to create
                unique and memorable moments that make every guest feel truly
                seen and valued. From personalized touches to thoughtful details
                that anticipate needs, our approach ensures each stay feels
                special, genuine, and unforgettable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <h3 className="text-xl text-[#161616] font-medium font-general mb-3">
                Careers with PPH
              </h3>
              <p className="text-[#393939] text-lg font-normal font-general leading-relaxed mb-2">
                At Pacific Pearl Hotels, we want our hotels to be the best they
                can be, and we want our guests to be satisfied. To achieve that
                goal, we seek out the most qualified individuals available to
                help us strengthen our presence in the hospitality industry.
              </p>
              <p className="text-[#393939] text-lg font-normal font-general leading-relaxed mb-2">
                We believe attitude is everything. A positive, can-do mindset is
                just as important as experience. Our team culture is built on
                collaboration, dedication, and the belief that great service
                begins with the right outlook.
              </p>
              <p className="text-[#393939] text-lg font-normal font-general leading-relaxed">
                We offer competitive salaries, comprehensive benefits, and
                opportunities for advancement in an exceptional team
                environment. We are committed to promoting from within, creating
                clear pathways for long-term career growth so our people can
                continue to thrive with us year after year.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="strengths"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 border border-[#E7E7E7] p-6 bg-white"
        >
          <div>
            <h3 className="text-xl text-[#161616] font-medium font-general mb-3">
              Industry Relationships
            </h3>
            <p className="text-[#393939] text-lg font-normal font-general leading-relaxed">
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

        {/* Brand Expertise */}
        <motion.section
          id="brand-expertise"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            Brand Expertise
          </h2>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            Pacific Pearl Hotels is a third-party, brand-approved management
            company with the proven ability to operate leading global
            hospitality brands, including Hilton, Marriott, IHG, Wyndham, Hyatt,
            Choice, Accor, Best Western, and more. Our expertise spans luxury
            five-star resorts and spas, full-service hotels, select-service
            properties, and extended-stay accommodations.
          </p>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            With a strong track record across California, New Mexico, Texas,
            Arizona, Las Vegas, and Mexico, we are recognized as a premier
            operator in the Southwest and beyond. Building on this foundation,
            we are expanding internationally to dynamic destinations such as
            Mexico, Spain, and the Maldives, bringing our hands-on approach,
            operational excellence, and guest-first philosophy to each property
            we manage.
          </p>
        </motion.section>

        {/* Recognition */}
        <motion.section
          id="recognition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            Accolades Earned
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                rank: "6th",
                desc: "Ranked 6th of the Top 100 independent, Third-Party Management Companies as listed in the Previously earned issue of Hotel & Motel Magazine",
              },
              {
                rank: "16th",
                desc: "Ranked 16th of the Top 100 Management Companies as listed in the Previously earned issue of Hotel Business Magazine",
              },
              {
                rank: "14th",
                desc: "Ranked 14th of the Top 25 Hotel Owners as listed in the Previously earned issue of the National Real Estate Investor Magazine",
              },
              {
                rank: "12th",
                desc: "Ranked 12th of the top 100 Owners & Developers in the United States as listed in this Previously earned issue of Hotel Business Magazine",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="border border-[#CC9500] p-7 shadow hover:shadow-lg transition bg-[#FFFDF6] 
                 flex flex-col justify-between h-full overflow-y-hidden"
              >
                <div className="flex items-center justify-center space-x-2">
                  {/* Left Laurel */}
                  <Image
                    src="/images/Vector.svg"
                    alt="Left Laurel"
                    width={60}
                    height={60}
                  />

                  {/* Rank Number */}
                  <p className="text-yellow-600 text-3xl font-bold font-general">
                    {item.rank}
                  </p>

                  {/* Right Laurel (mirrored) */}
                  <Image
                    src="/images/Vector.svg"
                    alt="Right Laurel"
                    width={60}
                    height={60}
                    className="scale-x-[-1]"
                  />
                </div>

                <p className="mt-2 text-[#282828] text-lg font-normal font-general text-center overflow-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Employee Relations */}
        <motion.section
          id="employee-relations"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            Employee Relations
          </h2>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            We aim to maintain an environment that nurtures and enhances the
            skills and creativity that each of our employees brings. We
            understand that honesty, openness, recognition and trust must exist
            to ensure our success as a corporation and as individuals. The
            philosophies we operate under at Pacific Pearl Hotels help our
            personnel to stay highly motivated, secure in their environment and
            confident in their abilities to perform.
          </p>
        </motion.section>

        {/* Sustainability */}
        <motion.section
          id="sustainability"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            Sustainability at Pacific Pearl Hotels
          </h2>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            At Pacific Pearl Hotels, sustainability is not just an initiative —
            it’s at the heart of how we do business. We are committed to
            creating unforgettable guest experiences while protecting the planet
            we all share. Our hotels reduce energy and water consumption through
            innovative technologies, minimize single-use plastics, and support
            local farmers and artisans to celebrate the culture of the
            communities we serve. With wellness-focused amenities, eco-friendly
            design, and a dedication to continuous improvement, we align guest
            wellbeing with environmental stewardship. As we expand globally, we
            remain guided by integrity, accountability, and a vision for growth
            with responsibility — ensuring every property we manage contributes
            to a healthier planet and stronger communities.
          </p>
        </motion.section>

        {/* Technology & Data */}
        <motion.section
          id="technology-data"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            Technology & Data
          </h2>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            At Pacific Pearl Hotels, we leverage the latest hospitality
            technology to optimize every aspect of the guest journey and enhance
            operational efficiency. From digital platforms that simplify booking
            and elevate the on-property experience to smart systems that
            streamline internal processes, we use innovation to deliver
            seamless, memorable stays. Our approach is deeply data-driven —
            guiding decisions with real insights to maximize performance,
            profitability, and guest satisfaction. Always open to collaboration,
            we welcome partnerships with technology leaders to stay at the
            forefront of hospitality innovation and drive measurable results for
            our owners and stakeholders.
          </p>
          {/* Smart Join Us Button */}
          {isMobile ? (
            <Link
              href={mailtoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#01172C] text-[#FFFFFF] px-6 py-3 rounded-md font-medium hover:bg-[#F1F1F1] hover:text-[#01172C] text-sm sm:text-base font-general"
            >
              See Case Studies
            </Link>
          ) : (
            <Link
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#01172C] text-[#FFFFFF] px-6 py-3 rounded-md font-medium hover:bg-[#F1F1F1] hover:text-[#01172C] text-sm sm:text-base font-general"
            >
              See Case Studies
            </Link>
          )}
        </motion.section>

        {/* Case Studies */}
        <motion.section
          id="case-studies"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            Case Studies
          </h2>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            Our track record speaks through the performance of the hotels we
            manage. From repositioning underperforming assets to driving
            market-leading results in luxury, select service, and extended stay
            segments, Pacific Pearl Hotels consistently delivers measurable
            success. While many of our case studies are tailored for private
            discussions, we welcome you to reach out directly for detailed
            examples of our performance, strategies, and results.
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
          <h2 className="text-xl font-medium font-general text-[#000000] mb-4 pl-3 border-l-8 border-[#010D19]">
            Corporate Citizenship
          </h2>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            At Pacific Pearl Hotels, we take citizenship very seriously. We
            firmly believe it is our responsibility to give back to our
            community; thus, Pacific Pearl Hotels contributes annually through
            our corporate offices, as well as through all of our hotels
            nationwide. These contributions serve to benefit a variety of
            social, charitable and community organizations. Our personnel&apos;s
            involvement in leadership positions within these organizations is
            just as important as our financial contributions.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
