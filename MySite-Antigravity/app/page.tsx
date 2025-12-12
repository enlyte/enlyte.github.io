"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Terminal, Cpu, Layers } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

export default function Home() {
  const stack = ["Python", "Flask", "PySide6", "Next.js", "TypeScript", "Docker", "FFmpeg", "Nginx"]

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <Section className="py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                Technical Founder <br />
                <span className="text-neutral-500">building intelligent tools.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-neutral-400 max-w-2xl leading-relaxed"
            >
              I architect and ship complex systems across the stack. From desktop AI media tools to scalable cloud infrastructure.
              Founder of <span className="text-indigo-400 font-medium">Nulite / VidCutAI</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
              >
                My Story
              </Link>
            </motion.div>
          </div>

          {/* Hero Image / Profile Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-neutral-800 border border-white/5 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder for Profile Image */}
              {/* <Image src="/path/to/profile.jpg" fill className="object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-mono text-xs text-center p-4">
                [Profile Image Placement]<br />
                Black & White Theme
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stack Marquee / List */}
        {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-12"
          >
            <p className="text-xs font-mono text-neutral-600 mb-4 uppercase tracking-wider">Core Technologies</p>
            <div className="flex flex-wrap gap-2">

              {stack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-neutral-900 border border-white/5 rounded-md text-xs font-mono text-neutral-400">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div> */}

        {/* <div className="mb-12 pt-4"> */}
        <div className="mb-12 pt-16 max-w-4xl mx-auto">


          {/* <h2 className="text-xl font-bold text-gray-200 mb-4">Skills</h2> */}
          <p className="text-xs font-mono text-neutral-600 mb-8 uppercase tracking-wider text-center">Core Technologies</p>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
             */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"> */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/appwrite-original.svg" alt="Appwrite" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Appwrite</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/astro-original.svg" alt="Astro" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Astro</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/digitalocean-original.svg" alt="DigitalOcean" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">DigitalOcean</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/docker-original.svg" alt="Docker" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Docker</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/express-original.svg" alt="Express" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Express</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/firebase-original.svg" alt="Firebase" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Firebase</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/flask-original.svg" alt="Flask" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Flask</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/git-original.svg" alt="Git" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Git</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/googlecloud-original.svg" alt="GCP" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">GCP</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/html5-original.svg" alt="HTML" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">HTML</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">JavaScript</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/json-original.svg" alt="JSON" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">JSON</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/linux-original.svg" alt="Linux" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Linux</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">MongoDB</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/nextjs-original.svg" alt="Next.js" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Next.js</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/nginx-original.svg" alt="Nginx" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Nginx</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Node.js</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/npm-original-wordmark.svg" alt="npm" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">npm</span>
            </div>

            {/* <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
                <img src="icons/objectivec-plain.svg" alt="Objective-C" className="w-6 h-6" />
                <span className="text-sm font-medium text-gray-200">Objective-C</span>
              </div> */}

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/pfsense-original.svg" alt="pfSense" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">pfSense</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/postman-original.svg" alt="Postman" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Postman</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/python-original.svg" alt="Python" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Python</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/pytorch-original.svg" alt="PyTorch" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">PyTorch</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/rabbitmq-original.svg" alt="RabbitMQ" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">RabbitMQ</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/solidity-original.svg" alt="Solidity" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Solidity</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/sqlite-original.svg" alt="SQLite" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">SQLite</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/ssh-original.svg" alt="SSH" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">SSH</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/ssl2.png" alt="SSL" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">SSL</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/swift-original.svg" alt="Swift" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Swift</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/ubuntu-original.svg" alt="Ubuntu" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Ubuntu</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/xcode-original.svg" alt="Xcode" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Xcode</span>
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="py-24">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Capabilities</h2>
            <p className="text-neutral-400 max-w-2xl">The toolbox I use to build systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI & Media Processing",
                description: "Building intelligent pipelines for audio/video.",
                skills: ["Python", "OpenAI Whisper", "FFmpeg", "Pyannote", "FCPXML", "Computer Vision"]
              },
              {
                title: "Full-Stack Web",
                description: "Modern, reactive web applications.",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flask", "PostgreSQL"]
              },
              {
                title: "Desktop App Dev",
                description: "High-performance native-feeling tools.",
                skills: ["PySide6 (Qt)", "Electron", "Threading/Async", "Local File Systems"]
              },
              {
                title: "DevOps & Infrastructure",
                description: "Bare-metal to cloud scaling.",
                skills: ["Docker", "Nginx", "Linux (Ubuntu)", "PfSense", "Proxmox", "TrueNAS"]
              },
              {
                title: "Product & Design",
                description: "From concept to shipped user experience.",
                skills: ["Figma", "User Research", "Systems Architecture", "Technical Sales"]
              }
            ].map((category) => (
              <Card key={category.title} className="p-8 hover:border-indigo-500/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-sm text-neutral-500 mb-6 min-h-[40px]">{category.description}</p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="text-xs font-mono text-neutral-300 bg-neutral-800 px-2 py-1 rounded border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Project Preview - VidCutAI */}
      <Section className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Work</h2>
            <Link href="/projects" className="text-sm text-neutral-500 hover:text-white transition-colors">View all projects &rarr;</Link>
          </div>

          <Link href="/projects/vidcut-ai">
            <Card className="group overflow-hidden relative min-h-[400px] flex flex-col md:flex-row bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 hover:border-indigo-500/30">
              {/* Content */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium w-fit mb-6">
                  <Cpu className="h-3 w-3" /> AI & Media Systems
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">VidCutAI</h3>
                <p className="text-neutral-400 text-lg mb-8 max-w-md">
                  An intelligent desktop application for automated multicam media processing.
                  Local-first AI pipeline with diarization, transcription, and FCPXML export.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">PySide6</span>
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">FFmpeg</span>
                </div>
              </div>

              {/* Abstract Visual / Placeholder */}
              <div className="flex-1 bg-neutral-900/50 relative overflow-hidden min-h-[300px] md:min-h-auto">
                {/* Decorative Elements resembling a timeline */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                  <Layers className="h-32 w-32 text-indigo-900 " />
                </div>
                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-neutral-950 to-transparent" />
              </div>
            </Card>
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
