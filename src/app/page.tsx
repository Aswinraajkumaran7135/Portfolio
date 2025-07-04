import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  Cpu,
  GraduationCap,
  Lightbulb,
  Mail,
  Phone,
  Trophy,
  Award,
  Linkedin,
  Github,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const skills = {
  languages: ["Python", "Java", "SQL"],
  frontend: ["HTML", "CSS", "JavaScript"],
  backend: ["Python"],
  webStack: ["WordPress"],
  versionControl: ["Git", "GitHub"],
  analyticsTools: ["Power BI", "MS Office"],
  uiUxTools: ["Figma", "Adobe Illustrator", "Canva"],
  videoEditing: ["CapCut", "Premiere Pro"],
};

const workExperience = [
  {
    role: "Web Developer",
    company: "Nextone Solutions",
    location: "Coimbatore",
    period: "Present",
    description: "Delivered 5+ client websites and projects, focusing on creating robust and scalable web solutions."
  },
  {
    role: "Junior Web Developer",
    company: "Technapie Solutions",
    location: "Coimbatore",
    period: "Aug 2023 – Feb 2024",
    description: "Built responsive websites using HTML, CSS, and JavaScript. Collaborated effectively in team-based development environments to meet project goals."
  }
];

const projects = [
  {
    title: "Acciviber",
    period: "Sep 2024 – Oct 2024",
    description: "Led a team to build a GPS-based accident tracker using accelerometer sensors with an integrated emergency response system.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "accident tracker"
  },
  {
    title: "SnapAds",
    period: "Apr 2024 – May 2024",
    description: "Contributed to QA processes in an ad software project, ensuring high-quality and bug-free releases.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "digital advertising"
  },
  {
    title: "SIH May",
    period: "Jun 2024 – Jul 2024",
    description: "Created an autonomous robot for a national hackathon using Embedded C and IoT systems for intelligent operation.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "robotics iot"
  },
  {
    title: "Web Scraping Tools",
    period: "Jan 2025 – Feb 2025",
    description: "Developed custom web scraping tools at Nextone Solutions to automate data extraction from various online sources.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "data scraping"
  }
];

const education = [
  {
    institution: "SNS College of Technology, Coimbatore",
    degree: "BE in Computer Science and Engineering",
    period: "Nov 2022 – Present",
    details: "CGPA: 8.4"
  },
  {
    institution: "URC Hr. Sec. School",
    degree: "Grade 12",
    period: "2021 – 2022",
    details: "Percentage: 87.8%"
  },
  {
    institution: "Janani Hr. Sec. School",
    degree: "Grade 10",
    period: "2019 – 2020",
    details: "Percentage: 80.2%"
  }
];

const certificates = [
  { name: "Python", issuer: "KnowledgeNest", date: "Apr 2024" },
  { name: "Full Stack Development", issuer: "LiveStream Tech", date: "Mar 2024" },
  { name: "SQL, Data Analytics, UI/UX", issuer: "Prepinsta" },
  { name: "Typewriting (English)", date: "Sep 2019" }
];

const achievements = [
  "Brown Medalist – Advanced Networking Exam",
  "Attended Machine Learning workshop at BIT",
  "Organized college symposium",
  "Participated in 2024 SIH Hackathon",
  "YRC Volunteer",
  "Athletics – 1st Prize (17-category West Zone)",
  "Football – Team captain, man of the match in junior tournament"
];

const Section = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <section className="py-12">
    <div className="flex items-center gap-3 mb-8">
      <Icon className="w-8 h-8 text-primary" />
      <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Hero Section */}
        <header className="text-center py-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl">
            Aswinraaj Kumaran M
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Aspiring Full Stack Developer
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 text-muted-foreground">
            <Link href="mailto:raajkumaranaswin@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">raajkumaranaswin@gmail.com</span>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <Link href="tel:6374555242" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">6374555242</span>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </header>

        {/* About Me */}
        <section className="py-12 text-center">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground">
            Passionate about building scalable and efficient applications, with hands-on experience in problem-solving, data structures, and modern web development best practices.
          </p>
        </section>

        <Separator />

        {/* Skills Section */}
        <Section icon={Cpu} title="Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="capitalize text-primary">{category.replace(/([A-Z])/g, ' $1')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm bg-accent/20 text-accent-foreground hover:bg-accent/40">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        
        <Separator />

        {/* Work Experience */}
        <Section icon={Briefcase} title="Work Experience">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border/50">
            {workExperience.map((job, index) => (
              <div key={index} className="pl-12 relative">
                <div className="absolute left-5 top-1 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>
                <p className="text-sm text-muted-foreground">{job.period}</p>
                <h3 className="text-xl font-semibold text-primary">{job.role}</h3>
                <p className="font-medium text-muted-foreground">{job.company}, {job.location}</p>
                <p className="mt-2 text-foreground/80">{job.description}</p>
              </div>
            ))}
          </div>
        </Section>
        
        <Separator />

        {/* Projects Spotlight */}
        <Section icon={Lightbulb} title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-card/50 border-border/50 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.aiHint}
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Separator />
        
        {/* Education */}
        <Section icon={GraduationCap} title="Education">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-primary">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.period} | {edu.details}</p>
              </div>
            ))}
          </div>
        </Section>
        
        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Certificates */}
            <Section icon={Award} title="Certificates">
              <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                {certificates.map((cert, index) => (
                  <li key={index}>
                    <span className="font-semibold text-foreground">{cert.name}</span>
                    {cert.issuer && ` from ${cert.issuer}`}
                    {cert.date && ` (${cert.date})`}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Achievements & Activities */}
            <Section icon={Trophy} title="Achievements & Activities">
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                {achievements.map((ach, index) => (
                  <li key={index}><span className="text-foreground">{ach}</span></li>
                ))}
              </ul>
            </Section>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Aswinraaj Kumaran M. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
