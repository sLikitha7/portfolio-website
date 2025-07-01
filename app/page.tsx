"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Code,
  Database,
  BarChart3,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

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
  const element = document.getElementById(sectionId);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, 100); // Adding a small delay before scrolling
  }
  setIsMenuOpen(false);
};


  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form and close modal
    setContactForm({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    setIsContactFormOpen(false)

    // You could add a success toast here
    alert("Message sent successfully! I'll get back to you soon.")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const skills = {
    "Programming Languages": ["Python", "R", "Java", "SQL"],
    Databases: ["MySQL", "PostgreSQL", "Redshift", "Snowflake"],
    "BI Tools": ["Tableau", "Power BI", "Excel", "Google Analytics"],
    "Machine Learning": ["Regression", "Classification", "Clustering", "Feature Engineering"],
    Tools: ["Git", "Jupyter", "Jira", "Kanban"],
    "Data Management": ["ETL", "Data Mining", "Data Cleaning", "Statistical Analysis"],
  }

  const experiences = [
    {
      title: "Graduate Data Analyst",
      company: "University of Florida",
      period: "January 2025 – Present",
      description: [
        "Analyzed 10 years of student data (~100,000+ records) to identify enrollment trends and demographic shifts",
        "Built Python-based preprocessing pipeline with optimized SQL queries in Snowflake, boosting data accuracy by 30%",
        "Designed dynamic Tableau dashboards for university leadership to translate insights into actionable strategies",
      ],
    },
    {
      title: "Data Analyst",
      company: "Vamstar Limited",
      period: "July 2022 – August 2023",
      description: [
        "Executed geo- and product-specific SQL queries to optimize search relevance, improving accuracy by 30%",
        "Refined data tags through classification audits, boosting market intelligence reliability by 25%",
        "Conducted large-scale trend analysis on MedTech data to support strategic planning",
        "Designed client-specific Tableau dashboards for sales performance visualization",
      ],
    },
  ]

  const projects = [
    {
      title: "Heart Disease Classification Prediction Model",
      description:
        "Built ML models using Logistic Regression, KNN, Random Forest, and Gradient Boosting achieving 90% accuracy",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      link: "#",
    },
    {
      title: "Global Neonatal Mortality Analysis",
      description:
        "Created interactive Tableau dashboard to visualize neonatal mortality trends and economic correlations",
      technologies: ["Python", "SQL", "Tableau", "Excel"],
      link: "#",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isDark ? "bg-gray-900/95 border-gray-700" : "bg-white/95 border-gray-200"
        } backdrop-blur-sm border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-lg sm:text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Portfolio.
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm lg:text-base transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-cyan-500"
                      : isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`h-8 w-8 ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`h-8 w-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`h-8 w-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} border-t`}
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base transition-colors ${
                      activeSection === item.id
                        ? "text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20"
                        : isDark
                          ? "text-gray-300 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-base sm:text-lg mb-3 sm:mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Hello, It's Me
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Likitha Shatdarsanam
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                And I'm a <span className="text-cyan-500 font-semibold">Data Analyst</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className={`text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Passionate about transforming data into actionable insights. Experienced in machine learning, data
                visualization, and statistical analysis with a strong background in Python, SQL, and Tableau.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full ${isDark ? "text-gray-300 hover:text-cyan-400 hover:bg-gray-800" : "text-gray-600 hover:text-cyan-600 hover:bg-gray-100"}`}
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full ${isDark ? "text-gray-300 hover:text-cyan-400 hover:bg-gray-800" : "text-gray-600 hover:text-cyan-600 hover:bg-gray-100"}`}
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full ${isDark ? "text-gray-300 hover:text-cyan-400 hover:bg-gray-800" : "text-gray-600 hover:text-cyan-600 hover:bg-gray-100"}`}
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full ${isDark ? "text-gray-300 hover:text-cyan-400 hover:bg-gray-800" : "text-gray-600 hover:text-cyan-600 hover:bg-gray-100"}`}
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                      "0 0 40px rgba(6, 182, 212, 0.5)",
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-cyan-500"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <img src="/images/profile.png" alt="Likitha Shatdarsanam" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 sm:py-20 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              About Me
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="/images/profile.png"
                alt="About Likitha"
                className="w-full max-w-sm sm:max-w-md mx-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <p className={`text-base sm:text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                I'm a passionate Data Analyst with a Master's degree in Information Systems and Operations Management
                from the University of Florida. With hands-on experience in data analysis, machine learning, and
                business intelligence, I transform complex datasets into actionable insights.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                  <span className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"} break-all`}>
                    shatdars@ufl.edu
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                  <span className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    +1 (111) 2222 3333
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                  <span className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    Florida, USA
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
                <Card className={isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50"}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Award className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />
                      <h3 className={`font-semibold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                        Education
                      </h3>
                    </div>
                    <p className={`text-xs sm:text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      MS in Information Systems
                      <br />
                      University of Florida
                    </p>
                  </CardContent>
                </Card>

                <Card className={isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50"}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />
                      <h3 className={`font-semibold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                        Experience
                      </h3>
                    </div>
                    <p className={`text-xs sm:text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      2+ Years
                      <br />
                      Data Analysis
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 sm:py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      {category.includes("Programming") && <Code className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />}
                      {category.includes("Database") && <Database className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />}
                      {category.includes("BI") && <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />}
                      {category.includes("Machine") && <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />}
                      {category.includes("Tools") && <Award className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />}
                      {category.includes("Data Management") && (
                        <Database className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />
                      )}
                      <CardTitle className={`text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                        {category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`text-xs ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-16 sm:py-20 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50"}`}>
                  <CardHeader className="pb-3">
                    <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className={`text-lg sm:text-xl ${isDark ? "text-white" : "text-gray-900"}`}>
                          {exp.title}
                        </CardTitle>
                        <CardDescription
                          className={`text-base sm:text-lg font-medium ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
                        >
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className={`self-start sm:self-center text-xs sm:text-sm ${isDark ? "border-gray-500 text-gray-300" : "border-gray-300"}`}
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start space-x-2 text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}
                        >
                          <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
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
      <section id="projects" className={`py-16 sm:py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full ${isDark ? "bg-gray-800 border-gray-700" : "bg-white"} hover:shadow-lg transition-shadow`}
                >
                  <CardHeader className="pb-3">
                    <img
                      src={`/placeholder.svg?height=200&width=400`}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className={`text-base sm:text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`text-xs ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className={`w-full text-sm ${isDark ? "border-gray-600 text-gray-300 hover:bg-gray-700" : ""}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 sm:py-20 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6 sm:mb-8"></div>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about data
              science and analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? "bg-gray-700" : "bg-gray-100"}`}
              >
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-500" />
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                Email
              </h3>
              <p className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"} break-all`}>
                shatdars@ufl.edu
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? "bg-gray-700" : "bg-gray-100"}`}
              >
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-500" />
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                Phone
              </h3>
              <p className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>+1 (111) 2222 3333</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? "bg-gray-700" : "bg-gray-100"}`}
              >
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-500" />
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                Location
              </h3>
              <p className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>Florida, USA</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <Button
              onClick={() => setIsContactFormOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-6 sm:py-8 ${isDark ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200"} border-t`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className={`text-xs sm:text-sm text-center sm:text-left ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              © 2025 Likitha Shatdarsanam. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 rounded-full ${isDark ? "text-gray-400 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"}`}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 rounded-full ${isDark ? "text-gray-400 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"}`}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 rounded-full ${isDark ? "text-gray-400 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"}`}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsContactFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`w-full max-w-md ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-lg border p-6`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Send Message</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsContactFormOpen(false)}
                  className={`h-8 w-8 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsContactFormOpen(false)}
                    className={`flex-1 ${isDark ? "border-gray-600 text-gray-300 hover:bg-gray-700" : ""}`}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
