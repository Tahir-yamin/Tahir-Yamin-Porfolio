import React from 'react';
import { ArrowRight, Download, Mail, Phone, MessageCircle, Calendar, CheckCircle, Briefcase, GraduationCap, Award, Trophy, Users, DollarSign, Clock, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './components/FadeIn';
import { Card } from './components/Card';

// Background image for the entire app
const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1589306994259-a806e14b775a?ixid=M3wxOTgwNzN8MHwxfHNlYXJjaHw2Mnx8YmxhY2slMjBncmFkaWVudHxlbnwxfHx8fDE3MDA2Nzc3OTJ8MA&ixlib=rb-4.0.3&w=2400&q=25&auto=format";

// Certificate Images
const CERTIFICATES = [
  "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/9xnojd9gqu7cb2y/24675782a6df4e51a6e95c2f514f75e3/file/PMI-Certfication.pdf",
  "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/9xnojd9gqu7cb2y/cda964dee55249319cbb67f34c76dad1/file/Oracle-Certificate-of-Primavera-P6.pdf",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/808f028c5d5f4793888dbb46f1de8380/original/Screenshot-2025-11-24-151114.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/4acf40071ce442018c026ec2230e12a5/original/3bd88eea-216e-446b-95fa-ab75b99978f9.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/78051ab8e9c249109ebb827b1a375c45/original/20813087-2e0e-4c62-baa5-c502d3589c31.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/756d5e5fbc8944948bd87aa9a18aaac3/original/0a77100d-97ec-433b-9981-5b8ab9e7e753.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/07e3678fc5ab4756872405236d5d4a6d/original/33f4021a-8715-4861-954c-59a64161058c.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/b720c653768949768428d0759c35044a/original/94bd62ef-fcae-4a75-910a-b23d8d6212d2.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/8f88cdcc932b463299f61533b7a5430a/original/567f9682-05ef-4d06-9d63-1a592875300d.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/05c633f8473f439fb3f8b71d93d8fa86/original/2930a109-4ba2-4b78-9bad-0bf70d297b1c.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/77b47f93401145a4ab388ba81dda87a9/original/556109c5-9b7e-49e9-b156-671c35ecc524.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/2f655104f2a9483c8b5b4dd07cafa127/original/a965ecce-294b-40dd-baa8-041bf451c715.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/a29d21c503cc403bb9d2cbf4f083f3fd/original/20813087-2e0e-4c62-baa5-c502d3589c31.png",
  "https://cdn.gamma.app/9xnojd9gqu7cb2y/b00b07ef8f5a4f579c3fc5df2439be07/original/b13acc35-a1bb-4d8e-a569-dde643f2ff9c.png"
];

const PROJECT_HIGHLIGHTS = [
  {
    title: "Offshore Structural Fabrication",
    role: "Project Manager - KSEW",
    description: "Led comprehensive planning for complex offshore fabrication including jackets, topsides, and heavy module assembly, ensuring precise field-level coordination.",
    impact: "Managed a $750M+ portfolio, integrating EPC activities into a unified master schedule to minimize critical path delays.",
    image: "https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/uTThEjAmm_3TUR-igmMIp.png",
    tags: ["$750M Value", "EPC", "Offshore"]
  },
  {
    title: "Retail Site Construction",
    role: "Senior Planning Engineer - PSO",
    description: "Oversaw nationwide retail site construction projects under full-cycle EPC contracts, establishing baselines and monitoring progress.",
    impact: "Implemented Level-4 scheduling protocols that ensured projects remained on track against tight contractual deadlines.",
    image: "https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/GDHhprnqNgcdCKc2ughzr.png",
    tags: ["Nationwide", "Level-4 Schedule", "Retail"]
  },
  {
    title: "Ship Repair & Dry Docking",
    role: "Project Manager - Titanno",
    description: "Managed dynamic ship repair and construction projects in a busy fabrication yard, focusing on resource optimization and productivity.",
    impact: "Successfully delivered $30M in projects through detailed manpower forecasting and productivity analysis.",
    image: "https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/XyO5stYF2Wn_KtugFRnF7.png",
    tags: ["$30M Value", "Dry Dock", "Resource Opt"]
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative selection:bg-gamma-accent selection:text-white overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
        />
        {/* Overlay to darken background for text readability */}
        <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-24">
        
        {/* Hero Section */}
        <FadeIn>
          <Card className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gamma-heading">
                Tahir Yamin: Expert Planning & Project Management
              </h1>
              <p className="text-lg text-gamma-text/90 leading-relaxed">
                A highly proficient PMP Certified Planning & Control Engineer with over 15 years of experience centered on the Oil & Gas sector, EPC projects, and ship construction. I specialize in planning & control and excel in managing the full project lifecycle.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 no-print">
                <a href="mailto:tahiryamin2030@gmail.com" className="inline-flex items-center px-6 py-3 bg-gamma-accent hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-[0_0_0_3px_rgba(96,157,255,0.3)] hover:shadow-[0_0_0_3px_rgba(96,157,255,0.5)]">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Tahir
                </a>
                <button 
                  onClick={() => window.print()} 
                  className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-gamma-border hover:border-gamma-accent/50 cursor-pointer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </button>
                <a href="#expertise" className="inline-flex items-center px-6 py-3 border border-gamma-accent text-gamma-accent hover:bg-gamma-accent/10 font-semibold rounded-lg transition-all">
                  Learn More
                </a>
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all">
                  Consult/Hire Me
                </a>
              </div>
            </div>
            <div className="md:col-span-5 w-full">
              <div className="relative aspect-[3/4] md:aspect-square w-full rounded-lg overflow-hidden shadow-2xl border border-gamma-border">
                <img 
                  src="https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/jXpHq6PcF1o_m94yUMxPH.png" 
                  alt="Engineer on site" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* About Section */}
        <FadeIn delay={0.1}>
          <Card className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 relative">
               <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg border border-gamma-border relative">
                  <img 
                    src="https://cdn.gamma.app/9xnojd9gqu7cb2y/edited-images/iM0ziH71mRkXni8hZzmyB.png" 
                    alt="Tahir Yamin Profile" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gamma-dark/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">Tahir Yamin</p>
                    <p className="text-sm opacity-80">PMP Certified</p>
                  </div>
               </div>
            </div>
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-3xl font-bold text-gamma-heading">About Tahir Yamin</h2>
              <div className="bg-[#022349] p-6 rounded-lg border border-blue-900/50">
                <p className="mb-4 text-gamma-text leading-relaxed">
                  My core competency lies in preparing and maintaining detailed project planning & schedules (Level 1 to Level 4) using Primavera P6 / Ms Project. I am an expert in developing baseline schedules, integrating activities, conducting resource loading, performing manpower forecasting, and generating key performance reports like S-Curves and Earned Value Analysis (EVA).
                </p>
                <p className="text-gamma-text leading-relaxed">
                  I excel in monitoring critical path activities and conducting delay analysis with PowerBi to ensure project delivery, making me well-suited to drive success in a challenging fabrication yard environment.
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* Achievements Card */}
        <FadeIn delay={0.15}>
          <Card>
            <h2 className="text-3xl font-bold text-gamma-heading mb-8 text-center">Professional Impact & Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: DollarSign, value: "$950M+", label: "HVAC Systems Budget Managed", sub: "SKM Air Con" },
                { icon: Briefcase, value: "$750M+", label: "Offshore Projects Value", sub: "KSEW" },
                { icon: Users, value: "110+", label: "Team Members Led", sub: "Dawlance Pvt Ltd" },
                { icon: Clock, value: "15+", label: "Years Experience", sub: "Oil & Gas / EPC" },
                { icon: Trophy, value: "Certified", label: "PMP & NEBOSH", sub: "Global Standards" },
                { icon: Target, value: "$30M", label: "Ship Repair Projects", sub: "Titanno Pvt Ltd" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all group">
                  <stat.icon className="w-8 h-8 text-gamma-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-gamma-heading">{stat.label}</div>
                  <div className="text-xs text-gamma-text/60 mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>

        {/* Expertise Section */}
        <div id="expertise">
          <FadeIn delay={0.1}>
            <Card>
              <h2 className="text-3xl font-bold text-gamma-heading mb-8 text-center">Key Expertise & Project Lifecycle Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Project Scheduling Mastery", desc: "Proficient in Primavera P6 for comprehensive schedule development, from Level 1 to Level 4." },
                  { title: "Resource & Manpower Forecasting", desc: "Strategic allocation and forecasting to optimize project efficiency and productivity." },
                  { title: "Performance Reporting", desc: "Expertise in S-Curves and Earned Value Analysis (EVA) for accurate project tracking." },
                  { title: "Earned Value Management (EVM)", desc: "Tracking project performance through cost/schedule variance analysis and forecasting." },
                  { title: "Critical Path & Delay Analysis", desc: "Proactive identification and mitigation of project risks to ensure on-time delivery." },
                  { title: "Delay Analysis & EOT Claims", desc: "Forensic schedule analysis and developing recovery strategies." },
                ].map((skill, idx) => (
                  <div key={idx} className="bg-slate-800/40 border border-white/5 rounded-xl p-6 hover:bg-slate-800/60 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-gamma-accent/20 text-gamma-accent flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gamma-heading mb-2">{skill.title}</h3>
                    <p className="text-gamma-text/80 text-sm leading-relaxed">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>

        {/* Timeline Section */}
        <FadeIn delay={0.2}>
          <Card className="py-12">
            <h2 className="text-3xl font-bold text-gamma-heading mb-3 text-center">Education & Key Career Milestones</h2>
            <p className="text-center text-gamma-text/70 mb-10 max-w-2xl mx-auto">
              A career path marked by continuous learning and significant project leadership roles.
            </p>
            
            <div className="relative px-2 md:px-0">
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gamma-border to-transparent transform md:-translate-x-1/2"></div>

              <div className="space-y-6">
                {[
                  { year: "2010", title: "Bachelor of Engineering (B.E.)", desc: "Foundational engineering studies.", side: "left" },
                  { year: "2015", title: "Master of Science (M.Sc.)", desc: "Enhanced technical and analytical capabilities.", side: "right" },
                  { year: "2017", title: "PMP & NEBOSH Certification", desc: "Solidifying expertise in global standards.", side: "left" },
                  { year: "Global", title: "Project Engineer", desc: "Zamil Industrial, SKM Projects, Dawlance Pvt Ltd.", side: "right" },
                  { year: "Lead", title: "Project Manager: Titanno", desc: "Demonstrated early leadership and strategic execution.", side: "left" },
                  { year: "Lead", title: "Project Manager: KSEW", desc: "Managed complex projects at Karachi Shipyard.", side: "right" },
                  { year: "Current", title: "Planning Engineer: Pakistan State Oil", desc: "Overseeing critical planning for Oil & Gas sector.", side: "left" },
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center ${item.side === 'left' ? 'md:flex-row-reverse' : ''} group`}>
                    <div className="flex-1 hidden md:block"></div>
                    
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gamma-accent transform -translate-x-1/2 md:translate-x-[-50%] mt-5 md:mt-0 z-10 border-4 border-gamma-dark shadow-[0_0_0_4px_rgba(96,157,255,0.2)] group-hover:scale-125 transition-transform duration-300"></div>
                    
                    <div className={`flex-1 w-full pl-16 md:pl-0 ${item.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-gamma-accent/30 hover:bg-white/10 transition-all duration-300 shadow-lg backdrop-blur-sm group-hover:shadow-gamma-accent/10">
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-gamma-accent/20 text-gamma-accent mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold text-gamma-heading mb-1 leading-tight">{item.title}</h3>
                        <p className="text-gamma-text/70 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* Current Role Experience Detail */}
        <FadeIn delay={0.2}>
          <Card className="grid md:grid-cols-12 gap-0 p-0" noPadding>
            <div className="md:col-span-5 min-h-[300px] md:min-h-full relative">
              <img 
                src="https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/GDHhprnqNgcdCKc2ughzr.png" 
                alt="Refinery" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
            </div>
            <div className="md:col-span-7 p-8 md:p-12 bg-gamma-card/90">
              <div className="flex items-center gap-2 mb-2 text-gamma-accent">
                <Briefcase size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Current Role</span>
              </div>
              <h3 className="text-2xl font-bold text-gamma-heading mb-2">Pakistan State Oil</h3>
              <p className="text-lg font-semibold text-white mb-4">Senior Planning Engineer (Mar 2025 – Current)</p>
              <p className="text-gamma-text mb-6 leading-relaxed">
                Responsible for Planning & Project Management of PSO retail site construction projects (full-cycle EPC contracts). Developed Level-4 project schedules and established baselines.
              </p>
              <div className="space-y-3">
                {[
                  "Generated detailed weekly and monthly reports (S-Curves, EVA).",
                  "Conducted delay analysis for EOT cases and recovery plans.",
                  "Managed resource allocation and tracked progress.",
                  "Developed PowerBi Interactive dashboards for stakeholders."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gamma-accent shrink-0 mt-0.5" />
                    <span className="text-gamma-text/90 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* Previous Experience (KSEW) */}
        <FadeIn delay={0.2}>
          <Card className="grid md:grid-cols-12 gap-0 p-0" noPadding>
            <div className="md:col-span-7 p-8 md:p-12 bg-[#013180]/90 order-2 md:order-1">
              <div className="flex items-center gap-2 mb-2 text-blue-200">
                <Briefcase size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Previous Role</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">KSEW - Project Manager</h3>
              <p className="text-lg font-semibold text-blue-100 mb-4">Jan 2024 – Feb 2025</p>
              <p className="text-blue-50 mb-6 leading-relaxed">
                Led planning for submarines, ships, and offshore structural fabrication projects valued at over $750 Million. Integrated EPC activities into a unified master schedule.
              </p>
              <div className="space-y-3">
                {[
                  "Conducted schedule risk analysis and led optimization efforts.",
                  "Led client-facing planning meetings.",
                  "Identified and recorded project variations for claims."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                    <span className="text-blue-50 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5 min-h-[300px] md:min-h-full relative order-1 md:order-2">
              <img 
                src="https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/uTThEjAmm_3TUR-igmMIp.png" 
                alt="Shipyard" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Card>
        </FadeIn>

        {/* Previous Experience (Titanno) */}
        <FadeIn delay={0.25}>
          <Card className="grid md:grid-cols-12 gap-0 p-0" noPadding>
            <div className="md:col-span-5 min-h-[300px] md:min-h-full relative">
              <img
                src="https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/XyO5stYF2Wn_KtugFRnF7.png"
                alt="Ship Repair"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
            </div>
            <div className="md:col-span-7 p-8 md:p-12 bg-slate-800/90">
              <div className="flex items-center gap-2 mb-2 text-gamma-accent">
                <Briefcase size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Previous Role</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Titanno Private Limited</h3>
              <p className="text-lg font-semibold text-blue-100 mb-4">Project Manager (Nov 2020 – Dec 2023)</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Managed ship repair and construction projects ($30M) in a dynamic fabrication yard, focusing on offshore structures. Conducted detailed resource loading, manpower forecasting, and productivity analysis.
              </p>
              <div className="space-y-3">
                {[
                  "Supported proposals with planning inputs for EPC contract bids.",
                  "Carried out Hull/structural surveys and ship repair/maintenance.",
                  "Led a team of 6 Engineers and 35 Associate Engineers.",
                  "Collaborated on project requirements and scheduling needs."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gamma-accent mt-2 shrink-0" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* Global Contributions Grid */}
        <FadeIn delay={0.3}>
          <Card>
            <h2 className="text-3xl font-bold text-gamma-heading mb-8">Global Engineering Contributions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  company: "SKM Air Con",
                  loc: "Dubai, UAE",
                  role: "Project Engineer (2018-2020)",
                  desc: "Handled continuous improvement projects. Developed detailed plans for HVAC systems ($950M).",
                  img: "https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/pVnSZ0EvpP-NZxltQMi14.png"
                },
                {
                  company: "Zamil Industrial",
                  loc: "Dammam, KSA",
                  role: "Project Engineer (2015-2018)",
                  desc: "Led continuous improvement initiatives. Ensured project completion on time and within budget.",
                  img: "https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/MxtVgTi6y1rAl902rk8vB.png"
                },
                {
                  company: "Dawlance Pvt Ltd",
                  loc: "Karachi",
                  role: "Process Engineer (2010-2015)",
                  desc: "Directed a team of 110 employees. Ensured OSHA compliance within a $750K quarterly budget.",
                  img: "https://cdn.gamma.app/9xnojd9gqu7cb2y/generated-images/LaoUWk02NhJVObu1FHVUq.png"
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col h-full bg-slate-950/50 rounded-lg overflow-hidden border border-white/5">
                  <div className="h-48 w-full relative">
                    <img src={item.img} alt={item.company} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-gamma-heading">{item.company}</h4>
                    <span className="text-xs text-gamma-accent mb-2 block">{item.loc}</span>
                    <p className="text-sm font-bold text-white mb-3">{item.role}</p>
                    <p className="text-sm text-gamma-text/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>

        {/* Project Highlights */}
        <FadeIn delay={0.35}>
          <Card>
            <h2 className="text-3xl font-bold text-gamma-heading mb-8 text-center">Project Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {PROJECT_HIGHLIGHTS.map((project, i) => (
                <div key={i} className="bg-slate-900/50 rounded-xl border border-white/10 overflow-hidden hover:border-gamma-accent/50 transition-all group flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                      {project.tags.map((tag, t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-gamma-accent/90 text-white px-2 py-1 rounded shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gamma-accent transition-colors">{project.title}</h3>
                      <p className="text-sm text-gamma-text/60 font-medium">{project.role}</p>
                    </div>
                    <p className="text-gamma-text/80 text-sm mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 mt-auto">
                      <div className="flex items-center gap-2 mb-2 text-blue-300">
                        <Zap className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Project Impact</span>
                      </div>
                      <p className="text-sm text-blue-100">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>

        {/* Certifications */}
        <FadeIn delay={0.3}>
          <Card>
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gamma-heading mb-2">Professional Certifications</h2>
                <p className="text-gamma-text/80 max-w-2xl">
                  Underscoring expertise and commitment to global project management standards.
                </p>
              </div>
              <Award className="w-12 h-12 text-gamma-accent hidden md:block" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { name: "PMP Certification", org: "PMI USA" },
                { name: "NEBOSH IGC", org: "UK" },
                { name: "Primavera P6", org: "Oracle University" },
                { name: "M.Sc Mech Eng", org: "NUST (EQF Level 7)" },
              ].map((cert, i) => (
                <div key={i} className="aspect-square bg-slate-800/50 rounded-lg border border-white/5 flex flex-col items-center justify-center p-4 text-center hover:bg-slate-800/80 transition-colors">
                  <GraduationCap className="w-8 h-8 text-gamma-accent mb-3" />
                  <h4 className="font-bold text-white text-sm md:text-base">{cert.name}</h4>
                  <span className="text-xs text-gamma-text/60 mt-1">{cert.org}</span>
                </div>
              ))}
            </div>

            {/* Certificate Gallery */}
            <div className="pt-8 border-t border-white/10">
               <h3 className="text-xl font-bold text-gamma-heading mb-6">Certificate Gallery</h3>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {CERTIFICATES.map((src, idx) => (
                   <div key={idx} className="aspect-[4/3] bg-slate-900 rounded-lg overflow-hidden border border-white/10 group cursor-pointer relative">
                     <img 
                       src={src} 
                       alt={`Certificate ${idx + 1}`} 
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                     />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                   </div>
                 ))}
               </div>
            </div>
          </Card>
        </FadeIn>

        {/* Skills & Languages */}
        <FadeIn delay={0.4}>
          <Card>
            <h2 className="text-3xl font-bold text-gamma-heading mb-8">Skills & Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Core Skills - Skill Bars */}
              <div>
                <h3 className="text-xl font-bold text-gamma-heading mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
                  <Target className="text-gamma-accent w-5 h-5"/> Core Technical Skills
                </h3>
                <div className="space-y-6">
                  {[
                    { name: "Project Program Management", level: 95 },
                    { name: "Schedule Production (Primavera P6)", level: 98 },
                    { name: "Microsoft Office Suite", level: 90 },
                    { name: "Scientific Research", level: 85 },
                    { name: "Data Science / PowerBi / Tableau", level: 92 },
                    { name: "Machine Learning", level: 80 },
                  ].map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-white group-hover:text-gamma-accent transition-colors">{skill.name}</span>
                        <span className="text-xs text-gamma-text/60 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/30 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                          className="bg-gradient-to-r from-blue-600 via-blue-500 to-gamma-accent h-full rounded-full shadow-[0_0_10px_rgba(96,157,255,0.4)] relative"
                        >
                          <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] skew-x-12 -translate-x-full"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Management Skills - Tag Cloud */}
              <div>
                <h3 className="text-xl font-bold text-gamma-heading mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
                  <Users className="text-gamma-accent w-5 h-5"/> Leadership & Management
                </h3>
                <div className="flex flex-wrap gap-3 content-start">
                  {[
                    "Budget Management", 
                    "Engineering Design Adjustments", 
                    "Project Commissioning", 
                    "Quality Standards Adherence", 
                    "Staff Management", 
                    "Empathy & Problem Solving",
                    "Digital Innovation",
                    "Strategic Planning",
                    "Team Leadership"
                  ].map((skill, i) => (
                    <motion.span 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        backgroundColor: "rgba(96, 157, 255, 0.15)",
                        borderColor: "rgba(96, 157, 255, 0.5)",
                        boxShadow: "0 4px 15px rgba(96, 157, 255, 0.2)"
                      }}
                      transition={{ duration: 0.3, delay: i * 0.05, type: "spring", stiffness: 300 }}
                      className="px-4 py-2 bg-slate-800/60 border border-white/10 text-gamma-text rounded-lg text-sm font-medium cursor-default hover:text-white transition-all shadow-sm backdrop-blur-md"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* Contact Section */}
        <div id="contact">
          <FadeIn delay={0.5}>
            <Card className="text-center py-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gamma-heading mb-8">Contact me!</h2>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="mailto:tahiryamin2050@gmail.com" className="group block p-6 bg-slate-800/50 rounded-xl border border-white/5 hover:border-gamma-accent/50 transition-all hover:transform hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30">
                    <Mail className="text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Email</h4>
                  <p className="text-gamma-text/70 text-sm break-words">tahiryamin2030@gmail.com</p>
                </a>

                <a href="tel:+923149665917" className="group block p-6 bg-slate-800/50 rounded-xl border border-white/5 hover:border-gamma-accent/50 transition-all hover:transform hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/30">
                    <Phone className="text-green-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Call / WhatsApp</h4>
                  <p className="text-gamma-text/70 text-sm">+92-314-9665917</p>
                </a>

                <div className="group block p-6 bg-slate-800/50 rounded-xl border border-white/5 hover:border-gamma-accent/50 transition-all hover:transform hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/30">
                    <MessageCircle className="text-purple-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Preferred Channel</h4>
                  <p className="text-gamma-text/70 text-sm">WhatsApp for quick replies</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>

        {/* Footer */}
        <footer className="text-center text-gamma-text/40 text-sm pb-8 no-print">
          <p>© {new Date().getFullYear()} Tahir Yamin. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;