"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Terminal, Cpu, Layers } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { StatsBar } from "@/components/home/stats-bar"

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
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
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
              <Image
                src="/images/SteveBW.jpg"
                alt="Stephen Moy"
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* 
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-mono text-xs text-center p-4">
                [Profile Image Placement]<br />
                Black & White Theme
              </div> */}
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

        {/* CENTERED BUTTONS: */}
        {/* <div className="flex items-center justify-center space-x-2 bg-neutral-900 border border-white/5 p-2 rounded transition ease-in-out duration-200 hover:bg-gray-700">
              <img src="icons/appwrite-original.svg" alt="Appwrite" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-200">Appwrite</span>
            </div> */}


        <div className="mb-4 pt-16 max-w-4xl mx-auto">
          <p className="text-xs font-mono text-neutral-600 mb-8 uppercase tracking-wider text-center">
            Core Technologies
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5  gap-3">
            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/appwrite-original.svg" alt="Appwrite" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Appwrite</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/astro-original.svg" alt="Astro" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Astro</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/cuda-original.svg" alt="CUDA / Nvidia" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">CUDA / Nvidia</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/digitalocean-original.svg" alt="DigitalOcean" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">DigitalOcean</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/docker-original.svg" alt="Docker" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Docker</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/express-original.svg" alt="Express" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Express</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/firebase-original.svg" alt="Firebase" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Firebase</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/flask-original.svg" alt="Flask" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Flask</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/git-original.svg" alt="Git" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Git</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/googlecloud-original.svg" alt="GCP" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">GCP</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/html5-original.svg" alt="HTML" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">HTML</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/javascript-original.svg" alt="JavaScript" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">JavaScript</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/json-original.svg" alt="JSON" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">JSON</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/linux-original.svg" alt="Linux" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Linux</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/mongodb-original.svg" alt="MongoDB" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">MongoDB</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/nextjs-original.svg" alt="Next.js" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Next.js</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/nginx-original.svg" alt="Nginx" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Nginx</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/nodejs-original.svg" alt="Node.js" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Node.js</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/npm-original-wordmark.svg" alt="npm" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">npm</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/objectivec-plain.svg" alt="Objective-C" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Objective-C</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/pfsense-original.svg" alt="pfSense" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">pfSense</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/postman-original.svg" alt="Postman" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Postman</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/python-original.svg" alt="Python" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Python</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/pytorch-original.svg" alt="PyTorch" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">PyTorch</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/rabbitmq-original.svg" alt="RabbitMQ" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">RabbitMQ</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/solidity-original.svg" alt="Solidity" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Solidity</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/sqlite-original.svg" alt="SQLite" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">SQLite</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/ssh-original.svg" alt="SSH" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">SSH</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/ssl2.png" alt="SSL" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">SSL</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/swift-original.svg" alt="Swift" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Swift</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/ubuntu-original.svg" alt="Ubuntu" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Ubuntu</span>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-700 min-h-[44px]">
              <img src="/icons/xcode-original.svg" alt="Xcode" className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-200 truncate">Xcode</span>
            </div>
          </div>
        </div>

      </Section>

      {/* Stats Bar */}
      <StatsBar />

      <Section className="py-8">
        {/* Capabilities Section */}
        <div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Capabilities</h2>
            <p className="text-neutral-400 max-w-2xl">The toolbox I use to build systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Systems & Applied Models",
                description: "Designing practical AI pipelines, from local inference to cloud-scale LLM workflows.",
                skills: [
                  "Diarization Models",
                  "Transcription Models",
                  "Mel-Band Roformer",
                  "Demucs Stem Separation",
                  "Local & API LLMs",
                  "Embeddings",
                  "Vector Databases (Pinecone, FAISS)"
                ]
              },
              {
                title: "Media Processing",
                description: "Robust audio and video workflows for automation, cleanup, and editing pipelines.",
                skills: [
                  "FFmpeg Tooling",
                  "Audio Cleanup & Noise Separation",
                  "Stem Extraction",
                  "Video Conversion & Optimization",
                  "Timeline Generation",
                  "FCPXML Authoring"
                ]
              },
              {
                title: "Full-Stack Web",
                description: "Modern, scalable applications across Python, Node, and reactive front-ends.",
                skills: [
                  "Python",
                  "Node.js",
                  "Flask",
                  "MongoDB",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS"
                ]
              },
              {
                title: "Desktop Application Development",
                description: "Local-first tools that feel native, fast, and reliable for power users.",
                skills: [
                  "PySide6 (Qt)",
                  "Electron",
                  "Threading & Async Pipelines",
                  "Local File Systems",
                  "Cross-Platform Packaging"
                ]
              },
              {
                title: "DevOps & Infrastructure",
                description: "From local inference machines to cloud deployments and home-lab orchestration.",
                skills: [
                  "Docker",
                  "Nginx",
                  "Linux (Ubuntu)",
                  "PfSense",
                  "Proxmox",
                  "QNAP"
                ]
              },
              {
                title: "Product Strategy & System Design",
                description: "Turning complex requirements into usable, high-leverage tools.",
                skills: [
                  "Architecture Planning",
                  "Workflow Optimization",
                  "User Experience Intuition",
                  "Technical Communication",
                  "Rapid Prototyping"
                ]
              }
            ].map(({ title, description, skills }) => (
              <Card key={title} className="p-6 bg-neutral-900 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-neutral-800 border border-white/5 rounded text-neutral-300"
                    >
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
                  <Cpu className="h-3 w-3" /> Local-First AI & Media Systems
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  VidCutAI
                </h3>
                <p className="text-neutral-400 text-lg mb-8 max-w-md">
                  An AI-powered desktop application for automated podcast multicam editing.
                  AI-powered diarization and transcription, and
                  FFmpeg-driven timelines exported directly to XML for Final Cut Pro and DaVinci Resolve.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">PySide6</span>
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">FFmpeg</span>
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">Diarization</span>
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">Transcription</span>
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">FCPXML</span>
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">Local Pipelines</span>
                </div>
              </div>

              {/* Abstract Visual / Placeholder */}
              <div className="flex-1 bg-neutral-900/50 relative overflow-hidden min-h-[300px] md:min-h-auto">
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                  <Layers className="h-32 w-32 text-indigo-900" />
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
