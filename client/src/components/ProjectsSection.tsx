import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Brain, FileText, Mic, Image as ImageIcon, Eye, Bot } from 'lucide-react';

interface Project {
  title: string;
  link?: string; 
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: any;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'AI Attorney – Pakistan Legal Chatbot',
    link: 'https://www.aiattorney.com.pk/',

    company: 'FireFly Tech. Solutions',
    description: 'Built a comprehensive legal chatbot using advanced RAG techniques',
    achievements: [
      'Built using langchain, OpenAI, FAISS, Whoogle, Redis, and BM25 vector stores',
      'Embeddings of ~200k cases/statutes for comprehensive legal knowledge',
      'Multi-agent query classification for legal advice, precedent search, and statute lookup',
      'Automatic generation of legal drafts and templates',
      'Integrated TTS/STT pipelines using Whisper, reducing latency by ~40%',
      'Deployed via FastAPI and Docker achieving 95% relevance in retrieval-based answers',
    ],
    technologies: ['LangChain', 'OpenAI', 'FAISS', 'Redis', 'Whisper', 'FastAPI', 'Docker'],
    icon: Brain,
    featured: true,
  },

  {
    title: 'CMontheGo – AI Marketing Assistant',
    company: 'FireFly Tech. Solutions',
    description: 'Multi-agent marketing assistant with automated analysis capabilities',
    achievements: [
      'Automated SEO, website, and social media audits',
      'Web scrapers and platform APIs for data collection',
      'LLM-based summarization for actionable recommendations',
    ],
    technologies: ['Multi-Agent Systems', 'LLM', 'Web Scraping', 'SEO'],
    icon: Rocket,
  },

  {
    title: 'Sigma - personal assistant',
    link: 'https://sigma-v1-mvp-complete.vercel.app/',
    company: 'SolnetInfo Technologies',
    description: 'Built an AI personal assistant with automatic task detection, memory storage, and context-aware responses.',
    achievements: [
      'Designed a Sigma-style assistant that classifies every user message as a task, memory, or normal query',
      'Automatically updates task lists and memory logs based on natural user input — no explicit commands required',
      'Implements multi-agent routing for message classification, task handling, memory recall, and conversation flow',
      'Supports long-term contextual memory, enabling the assistant to remember and reference past information',
    ],
    technologies: ['Nodejs', 'OpenAI', 'Langchang','versel'],
    icon: Robot,
  
  },
  {
    title: 'Chat with PDF – Document Q&A System',
    company: 'Funsol Technologies',
    description: 'RAG-based chatbot for natural language queries on PDF documents',
    achievements: [
      'Implemented Hugging Face Transformers and OpenAI APIs',
      'Improved answer relevance by ~30%',
      'Natural language processing for document understanding',
    ],
    technologies: ['RAG', 'Hugging Face', 'OpenAI', 'NLP'],
    icon: FileText,
  },
  {
    title: 'Voice Cloning – Celebrity Voice Models',
    company: 'Funsol Technologies',
    description: 'Large-scale voice cloning project for famous personalities',
    achievements: [
      'Trained 50+ voice models of famous personalities',
      'Extracted and processed audio data from YouTube',
      'Used Applio locally for high-quality training',
      'Text-to-speech generation in cloned voices',
    ],
    technologies: ['Applio', 'Audio Processing', 'TTS', 'Voice Cloning'],
    icon: Mic,
  },
  {
    title: 'AI Gallery – Face Recognition Photo Organizer',
    company: 'Funsol Technologies',
    description: 'Automated photo organization using face recognition',
    achievements: [
      'Clustered and tagged photos using face recognition models',
      'Optimized face embedding pipelines',
      '>90% accuracy with deepface (facenet-512)',
    ],
    technologies: ['Deepface', 'Face Recognition', 'Computer Vision'],
    icon: ImageIcon,
  },
  {
    title: 'Object Recognition Models',
    company: 'Funsol Technologies',
    description: 'Fine-tuned object detection for domain-specific applications',
    achievements: [
      'Fine-tuned YOLOv5 on custom dataset',
      'Domain-specific object detection',
      'Optimized for real-time performance',
    ],
    technologies: ['YOLOv5', 'Object Detection', 'Computer Vision'],
    icon: Eye,
  },
];

export default function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="heading-projects">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Innovative AI solutions across NLP, computer vision, and machine learning
          </p>
        </div>

        <div className="space-y-12">
          {featuredProject && (
            <Card className="p-8 lg:p-12 hover-elevate" data-testid="card-featured-project">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center">
                    <featuredProject.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <Badge className="mb-3">Featured Project</Badge>
                    {/* <h3 className="text-3xl font-semibold mb-2" data-testid="text-featured-title">
                      {featuredProject.title}
                    </h3> */}

                    <h3 className="text-3xl font-semibold mb-2" data-testid="text-featured-title">
                        {featuredProject.link ? (
                          <a
                            href={featuredProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {featuredProject.title}
                          </a>
                        ) : (
                          featuredProject.title
                        )}
                      </h3>

                    <p className="text-muted-foreground">{featuredProject.company}</p>
                  </div>

                  <p className="text-lg leading-relaxed">{featuredProject.description}</p>

                  <div>
                    <h4 className="font-medium mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {featuredProject.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1">▪</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="p-6 lg:p-8 hover-elevate"
                data-testid={`card-project-${index}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1" data-testid={`text-project-title-${index}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.company}</p>
                    </div>
                  </div>

                  <p className="leading-relaxed">{project.description}</p>

                  <ul className="space-y-2">
                    {project.achievements.map((achievement, aIndex) => (
                      <li key={aIndex} className="flex items-start gap-3 text-sm">
                        <span className="text-primary mt-1">▪</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
