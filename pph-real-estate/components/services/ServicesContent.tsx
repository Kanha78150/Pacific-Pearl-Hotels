"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ServicesSidebar from "./ServicesSidebar";

const ServicesContent = () => {
  const services = [
    {
      title: "Hotel Development & Design Consulting",
      image: "/images/ServiceImages/s7.jpg",
      list: [
        "Concept development and feasibility studies",
        "Brand selection and positioning",
        "Design advisory to maximize guest experience and ROI",
        "Pre-opening planning and critical path execution",
      ],
    },
    {
      title: "Operational & Management Consulting",
      image: "/images/ServiceImages/s8.jpg",
      list: [
        "Concept development and feasibility studies",
        "Brand selection and positioning",
        "Design advisory to maximize guest experience and ROI",
        "Pre-opening planning and critical path execution",
      ],
    },
    {
      title: "Investment & Asset Consulting",
      image: "/images/ServiceImages/s5.jpg",
      list: [
        "Market research and feasibility analysis",
        "Acquisition due diligence and underwriting support",
        "Asset repositioning strategies",
        "Owner representation and investment advisory",
        "Exit strategy planning",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row gap-10 bg-[#FAFAFA]">
      <aside className="w-full md:w-1/4">
        <ServicesSidebar />
      </aside>
      <div className="flex-1 space-y-16">
        {/* Corporate Philosophy*/}
        <motion.section
          id="philosophy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[22px] font-general font-medium text-[#000000] mb-4 pl-3 border-l-6 border-[#010D19]">
            Corporate Philosophy
          </h2>
          <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
            At Pacific Pearl Hotels, we pride ourselves in the lasting
            relationships we have built and continue to nurture during our 35
            years in the hospitality industry. As a company that owns and
            operates hotels, Pacific Pearl Hotels brings a unique and
            experienced perspective to managing hotels. We identify
            opportunities for growth and formulate solutions to provide our
            partners with rapid operational revival. Our work with our partners
            results in improved cash flow, profitability and stabilized
            performance throughout our portfolio.
          </p>
        </motion.section>

        {/* Operations */}
        <motion.section
          id="operations"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Heading */}
          <h2 className="text-[22px] font-general font-medium text-[#000000] pl-3 border-l-6 border-[#010D19]">
            Operations
          </h2>

          {/* Full width description */}
          <div className="space-y-4">
            <p className="text-[#393939] text-xl font-normal font-general leading=relaxed">
              Pacific Pearl Hotels, LLC is approved and preferred
              internationally by recognized hotel companies. Pacific Pearl
              Hotels serves as a hotel owner, operator and 3rd party management
              for 134 hotel transactions, many of advanced to win franchise
              honors in their respected markets.
            </p>
            <p className="text-[#393939] text-xl font-normal font-general leading-relaxed">
              Whether we are acquiring and operating a 5-star resort, hotel
              convention center, or a select-service asset, our company provides
              management services that exceed all industry benchmarks,
              regardless of the market. To achieve this, we assist our investors
              with underwriting, re-positioning, re-branding, franchise
              agreements, property improvement plans, and revenue strategies
              during acquisition. Pacific Pearl Hotels recognizes that each
              acquisition is unique, and we are prepared to construct a plan of
              action that fits the acquisition in question. We specialize in
              select service and extended stay hotel operations.
            </p>
          </div>

          {/* Gray card container */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md">
            {/* Top: Image + Text */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Left: Image */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src="/images/ServiceImages/s1.jpg"
                  alt="Operations"
                  width={354}
                  height={252}
                  className="shadow-lg object-cover"
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1">
                <h3 className="text-xl text-[#393939] font-medium font-general mb-2 ">
                  Human Resources
                </h3>
                <p className="text-[#393939] text-lg font-general font-normal leading-5">
                  We understand that in order for our employees to care for our
                  guests to the best of their ability, we must nurture our
                  employees as best as we can. This philosophy drives a high
                  satisfaction level and an incredibly low employee turnover.
                  Employees in the Pacific Pearl Hotels family are eligible to
                  receive competitive health benefits as well as participate in
                  bonus programs and training opportunities. Our experienced HR
                  team handles these core fundamental areas:
                </p>
              </div>
            </div>

            {/* Bottom: Highlighted Achievements (custom rows) */}
            <div className="mt-6 space-y-3">
              {/* First row: 3 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <span className="bg-[#F7FBFF] px-2 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Benefits Administration
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Compliance with all federal and state laws
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Union and labor contracts
                </span>
              </div>

              {/* Second row: 2 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <span className="bg-[#F7FBFF] px-2 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Handbook policy, procedure and development
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center w-fit">
                  Maintenance of employee records.
                </span>
              </div>

              {/* Third row: 1 span */}
              <div className="grid grid-cols-1 gap-3">
                <span className="bg-[#F7FBFF] px-2 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center w-fit">
                  Training resources and employee development programs
                </span>
              </div>
            </div>
          </div>

          {/* Gray card container */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md">
            {/* Top: Image + Text */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Left: Image */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src="/images/ServiceImages/s2.jpg"
                  alt="Centralized Accounting"
                  width={354}
                  height={252}
                  className="shadow-lg object-cover"
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1">
                <h3 className="text-xl text-[#393939] font-medium font-general mb-3 ">
                  Centralized Accounting
                </h3>
                <p className="text-[#393939] text-lg font-general font-normal leading-snug">
                  Pacific Pearl Hotels&apos; corporate accounting team oversees
                  all financial aspects and operating performances at each of
                  our managed hotels. We believe centralized accounting and
                  constant communication between property improves each
                  hotel&apos;s performance while maintaning low cost controls.
                  Various services include:
                </p>
              </div>
            </div>

            {/* Bottom: Highlighted Achievements (custom rows) */}
            <div className="mt-6 space-y-4">
              {/* First row: 2 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <span className="bg-[#F7FBFF] px-4 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium inline-flex items-center ">
                  Daily/Weekly/Monthly Forecasting & Review
                </span>
                <span className="bg-[#F7FBFF] px-4 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium inline-flex items-center">
                  Weekly Property Budget Meetings
                </span>
              </div>

              {/* Second row: 3 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <span className="bg-[#F7FBFF] px-4 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium inline-flex items-center">
                  Monthly Profit Statements
                </span>
                <span className="bg-[#F7FBFF] px-4 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium inline-flex items-center">
                  Daily Cash Reporting & Cash Flow Analysis
                </span>
                <span className="bg-[#F7FBFF] px-4 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium inline-flex items-center">
                  Payroll Administration & Audit
                </span>
              </div>

              {/* Third row: 2 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <span className="bg-[#F7FBFF] px-4 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium inline-flex items-center">
                  Accounts Distribution
                </span>
                <span className="bg-[#F7FBFF] px-4 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium inline-flex items-center">
                  Lender Compliance & Lender Analysis
                </span>
              </div>
              {/* Fourth row: 2 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <span className="bg-[#F7FBFF] px-4 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium inline-flex items-center">
                  Monthly and Quarterly Income and Expense Statements
                </span>
                <span className="bg-[#F7FBFF] px-4 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium inline-flex items-center">
                  Accounts Payable and Receivable Focus
                </span>
              </div>
            </div>
          </div>
          {/* Gray card container */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md">
            {/* Top: Image + Text */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Left: Image */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src="/images/ServiceImages/s3.jpg"
                  alt="Food & Beverage"
                  width={354}
                  height={298}
                  className="shadow-lg object-cover rounded-md"
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1">
                <h3 className="text-xl text-[#393939] font-medium font-general mb-3">
                  Food & Beverage
                </h3>
                <p className="text-[#393939] text-lg font-general font-normal leading-snug">
                  Whether our food and beverage department addresses room
                  service, lounge, restaurant, or catering events, Pacific Pearl
                  Hotels understands that the key to successful operations is
                  grounded in exceptional customer service. We strive to
                  constantly exceed the guests’ expectations by focusing on high
                  quality and natural ingredients. Our corporate team and
                  on-site property managers monitor daily food and beverage
                  performance through reporting systems for revenue, expenses,
                  and ordering and labor to meet brand established standards and
                  our own quality control.
                </p>
              </div>
            </div>

            {/* Bottom: Highlighted Achievements (starts under image) */}
            <div className="mt-6 space-y-3 w-full">
              {/* First row: 3 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Menu design and cost control
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Vendor and supplier management
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Food safety and hygiene compliance
                </span>
              </div>

              {/* Second row: 2 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Training and staff development programs
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center w-fit">
                  Guest satisfaction and feedback analysis
                </span>
              </div>

              {/* Third row: 1 span */}
              <div className="grid grid-cols-1 gap-3">
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center w-fit">
                  Sustainable sourcing and waste reduction initiatives
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Management */}
        <motion.section
          id="management"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Heading */}
          <h2 className="text-[20px] font-general font-medium text-[#000000] pl-3 border-l-6 border-[#010D19]">
            Management
          </h2>

          {/* Revenue Management */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Left: Image */}
              <div className="flex-shrink-0 flex justify-center items-start">
                <Image
                  src="/images/ServiceImages/s4.jpg"
                  alt="Food & Beverage"
                  width={354}
                  height={305}
                  className="object-cover"
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1">
                <h3 className="text-xl font-medium font-general mb-2 text-[#393939]">
                  Centralized and Collaborative Hotel Revenue Management.
                </h3>
                <p className="text-[#393939] text-lg font-normal font-general leading-5">
                  For any hotel, revenue management is a priority. Pacific Pearl
                  Hotels&apos; group of revenue management experts work
                  hand-in-hand with our property-level team to develop goals and
                  strategies that increase market share growth and maximize
                  revenue. We strongly believe this collaborative approach to
                  revenue management sets us apart from the average property
                  management company. While our corporate culture supports the
                  initiatives of our brand partners with advancing yield and
                  inventory pricing expertise for all distribution channels at
                  each unique property.
                </p>
              </div>
            </div>

            {/* Highlighted Achievements */}
            <div className="mt-6 space-y-3">
              {/* Row 1: single span */}
              <div className="grid grid-cols-1">
                <span className="px-3 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium w-fit bg-[#F7FBFF]">
                  Centralized revenue management and extranet network solutions
                </span>
              </div>

              {/* Row 2: two spans */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <span className="px-3 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium bg-[#F7FBFF]">
                  Specialized account management per asset
                </span>
                <span className="px-3 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium  bg-[#F7FBFF]">
                  Sales strategy reports and assessments
                </span>
              </div>

              {/* Row 3: single span */}
              <div className="grid grid-cols-1">
                <span className="px-3 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium w-fit bg-[#F7FBFF]">
                  Daily, weekly, monthly, and annual budgeting and forecasting
                  meetings
                </span>
              </div>

              {/* Row 4: single span */}
              <div className="grid grid-cols-1">
                <span className="px-3 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium w-fit bg-[#F7FBFF]">
                  Hotel segmentation reports to track and forecast market
                  segments
                </span>
              </div>

              {/* Row 5: single span */}
              <div className="grid grid-cols-1">
                <span className="px-3 py-2 border-1 border-[#00224B] text-sm text-[#00224B] font-medium w-fit bg-[#F7FBFF]">
                  Quarterly reporting and reviews.
                </span>
              </div>
            </div>
          </div>

          {/* Asset Management */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left: Image */}
              <div className="flex-shrink-0 flex justify-center items-start">
                <Image
                  src="/images/ServiceImages/s5.jpg"
                  className="object-cover"
                  alt="Asset Management"
                  width={354}
                  height={252}
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1">
                <h3 className="text-xl font-medium font-general mb-2">
                  Asset Management
                </h3>
                <p className="text-[#393939] text-lg font-normal leading-tight">
                  At Pacific Pearl Hotels, we manage each property with an
                  owner’s mindset—carefully analyzing market performance,
                  maximizing asset value, and delivering clear, ongoing
                  reporting. Our expert operations team ensures every hotel
                  excels by balancing the needs of guests, owners, and
                  staff—keeping each asset performing at its peak, both
                  operationally and physically.
                </p>
              </div>
            </div>

            {/* Bottom: Highlighted Achievements (spans full width under image) */}
            <div className="mt-6 space-y-3 w-full">
              {/* First row: 3 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Maximizing hotel asset value
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Driven by owner’s vision
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Peak performance, every property
                </span>
              </div>

              {/* Second row: 2 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Strategic, data-led hotel management
                </span>
              </div>
            </div>
          </div>

          {/* Sales & Marketing */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md">
            {/* Top: Image and Text Side-by-Side */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left: Image */}
              <div className="flex-shrink-0 flex justify-center items-start">
                <Image
                  src="/images/ServiceImages/s6.jpg"
                  className="object-cover"
                  alt="Sales & Marketing"
                  width={354}
                  height={252}
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1">
                <h3 className="text-xl font-medium font-general mb-2">
                  Sales & Marketing
                </h3>
                <p className="text-[#393939] text-lg font-normal leading-relaxed">
                  Pacific Pearl Hotels takes a hands-on, customized approach to
                  management—aligning each property’s strategy with its market
                  conditions. Our corporate team collaborates closely with
                  on-site staff to optimize sales and revenue, while providing
                  tailored training and tools to support brand-driven marketing
                  efforts.
                </p>
              </div>
            </div>

            {/* Bottom: Highlighted Achievements (rows start under image) */}
            <div className="mt-6 space-y-3 w-full">
              {/* First row: 3 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Strategic sales planning
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Brand and market positioning
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Revenue growth initiatives
                </span>
              </div>

              {/* Second row: 2 spans */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center">
                  Digital marketing and advertising campaigns
                </span>
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center w-fit">
                  Sales training and performance tracking
                </span>
              </div>

              {/* Third row: 1 span */}
              <div className="grid grid-cols-1 gap-3">
                <span className="bg-[#F7FBFF] px-2 py-2 border border-[#00224B] text-sm text-[#00224B] font-medium text-left inline-flex items-center w-fit">
                  Partnership development and local outreach programs
                </span>
              </div>
            </div>
          </div>

          {/* Other Commercial Real Estate */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-[#393939] font-medium font-general mb-4">
              Other Commercial Real Estate
            </h3>

            <ul className="bg-[#F7FBFF] border border-[#00224B]">
              <li className="px-4 py-3 text-[#00224B] text-lg font-medium hover:bg-[#EAF3FF] transition-colors">
                Multi-Family – Pacific Pearl Management has managed five
                multi-family communities totaling over $100 million in value.
              </li>
              <li className="px-4 py-3 text-[#00224B] text-lg font-medium hover:bg-[#EAF3FF] transition-colors">
                Office – Pacific Pearl Management has managed two office
                buildings.
              </li>
              <li className="px-4 py-3 text-[#00224B] text-lg font-medium hover:bg-[#EAF3FF] transition-colors">
                Retail – Pacific Pearl Management has managed two retail
                centers.
              </li>
              <li className="px-4 py-3 text-[#00224B] text-lg font-medium hover:bg-[#EAF3FF] transition-colors">
                Condo Communities – Pacific Pearl Management has managed two
                Condo Communities including HOAs in Honolulu, Hawaii and Santa
                Fe, New Mexico.
              </li>
              <li className="px-4 py-3 text-[#00224B] text-lg font-medium hover:bg-[#EAF3FF] transition-colors">
                Self-Storage – Pacific Pearl Management offers professional
                management of self-storage facilities.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Consulting */}
        <motion.section
          id="consulting"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Heading */}
          <h2 className="text-xl font-bold text-gray-900 pl-3 border-l-4 border-black">
            Consulting
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pacific Pearl Hotels offers comprehensive consulting services to
            help hotel owners and investors maximize their property&apos;s
            potential. Our experienced team provides expert guidance in areas
            such as market analysis, operational efficiency, financial
            performance, and strategic planning. We work closely with our
            clients to develop tailored solutions that drive growth and enhance
            overall asset value.
          </p>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Left: Image */}
                  <div className="flex-shrink-0 flex justify-center items-start">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={354}
                      height={251}
                      className="rounded-md shadow-lg"
                    />
                  </div>

                  {/* Right: Text */}
                  <div className="flex-1">
                    <h3 className="text-xl text-[#393939] font-medium font-general mb-3">
                      {service.title}
                    </h3>
                    <ul className="list-disc list-inside">
                      {service.list.map((item, i) => (
                        <li
                          key={i}
                          className="text-[#393939] text-lg font-normal"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServicesContent;
