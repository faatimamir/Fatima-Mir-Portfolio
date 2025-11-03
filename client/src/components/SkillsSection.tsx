import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Server, Wrench, GitBranch } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Core AI/ML',
    icon: Brain,
    skills: [
      'Deep Learning',
      'Computer Vision',
      'Vector Databases',
      'NLP',
      'Data Mining',
      'LLMs',
      'RAG',
      'Fine-Tuning',
      'Model Training',
    ],
  },
  {
    title: 'Backend & DevOps',
    icon: Server,
    skills: ['SQL', 'Docker', 'Flask', 'Node.js', 'Python', 'TypeScript'],
  },
  {
    title: 'ML/DS Tools',
    icon: Wrench,
    skills: [
      'OpenCV',
      'NumPy',
      'PyTorch',
      'TensorFlow',
      'NLTK',
      'LangChain',
      'OpenAI API',
      'Hugging Face',
      'Ultralytics (YOLOv8)',
      'Roboflow',
      'Deepface',
    ],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="heading-skills">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive expertise across AI/ML, backend development, and modern tooling
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 hover-elevate"
              data-testid={`card-skill-category-${index}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold" data-testid={`text-category-${index}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-mono text-xs"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
