"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Phone, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MyImage from "/home/essiecodes/Downloads/my-portfolio/assets/IMG_4061.jpg"
import Image from "next/image"
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const year = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-gray-900"
            >
              Esther Aiyeola
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.toLowerCase() ? "text-purple-600" : "text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <Image
                  src={MyImage}
                  alt="Esther Aiyeola"
                  width={300}
                  height={300}
                   className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-purple-400 rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Esther Aiyeola
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Full-Stack Software Engineer & Blockchain Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Estheraiyeola"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/esther-aiyeola-4a10b5296/"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/essie_codes" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-gray-400" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Software Engineer and Facilitator with 2+ years of experience teaching, designing and delivering
                end-to-end solutions across full-stack environments. Proficient in system architecture, API design, and
                blockchain technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Skilled at translating business requirements into scalable, high-performing applications, driving
                efficiency and reliability while collaborating seamlessly within Agile teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-gray-600">Students Taught</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-gray-600">Technologies</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600">Major Projects</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
                color: "bg-blue-100 text-blue-800",
              },
              {
                category: "Backend",
                skills: ["Node.js", "Python", "Java", "Go"],
                color: "bg-pink-100 text-pink-800",
              },
              {
                category: "Database",
                skills: ["PostgreSQL", "MongoDB", "SQL"],
                color: "bg-purple-100 text-purple-800",
              },
              {
                category: "Blockchain",
                skills: ["Sui Move", "Smart Contracts", "Web3"],
                color: "bg-violet-100 text-violet-800",
              },
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${category.color}`}>
                      {category.category}
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-gray-600">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Database Management & Sui Move Facilitator",
                company: "Semicolon Academics",
                period: "Aug 2024 - Present",
                achievements: [
                  "Led workshops on relational and NoSQL databases to 5 cohorts with 20+ learners each",
                  "Achieved 95% mastery rate in SQL querying and schema design",
                  "Designed modules on smart contract development with Sui Move",
                ],
              },
              {
                title: "Software Engineering Apprentice",
                company: "Semicolon Labs",
                period: "May 2024 - Aug 2024",
                achievements: [
                  "Architected RESTful services and integrated third-party APIs",
                  "Cut average response latency by 20%",
                  "Reduced feature delivery time by 30% using Java, Node.js, and React.js",
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                        <p className="text-purple-600 font-medium">{job.company}</p>
                      </div>
                      <div className="text-gray-500 mt-2 md:mt-0">{job.period}</div>
                    </div>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notable Projects</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Ojamata - E-commerce Platform",
                description:
                  "Full-stack prototype facilitating online ordering for local vendors with Java backend and React.js frontend.",
                tech: ["Java", "React.js", "MySQL", "Node.js"],
                period: "Mar 2024 - May 2024",
              },
              {
                title: "Shortlet Apartment Management",
                description:
                  "Rental management tool with booking workflows and availability checks using modern tech stack.",
                tech: ["React.js", "Java", "MongoDB"],
                period: "Jan 2024 - Present",
              },
              {
                title: "Bondex - Blockchain Platform",
                description:
                  "48-hour hackathon project: blockchain-based bonding platform with Sui Move smart contracts.",
                tech: ["Sui Move", "Smart Contracts", "React.js"],
                period: "Nov 2024",
              },
              {
                title: "Sui_Box - Blockchain Middleware",
                description:
                  "Middleware solution exposing Sui blockchain storage via familiar API patterns for developers.",
                tech: ["Sui Move", "REST API", "SDK"],
                period: "Apr 2025 - Present",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <a href="http://www.github.com/Estheraiyeola/Estheraiyeola">
                        <ExternalLink className="text-gray-400 hover:text-purple-600 transition-colors" size={20} />
                      </a>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{project.period}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Mail className="text-purple-600 mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:estheraiyeola@yahoo.com"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    estheraiyeola@yahoo.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Phone className="text-purple-600 mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+2348138112782" className="text-gray-600 hover:text-purple-600 transition-colors">
                    +234-813-811-2782
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Linkedin className="text-purple-600 mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/esther-aiyeola-4a10b5296/"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Connect with me
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© {year} Esther Aiyeola. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
