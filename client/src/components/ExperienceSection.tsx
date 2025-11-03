import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    title: 'AI Engineer',
    company: 'FireFly Tech. Solutions',
    location: 'Islamabad, Pakistan',
    period: 'Aug 2024–Present',
    description: 'Focused on multi-agent AI systems, RAG, and domain-specific chatbots',
    highlights: [
      'Backend development in Python and Node.js',
      'Deployment and ongoing maintenance of AI systems',
      'Multi-agent system architecture',
    ],
    current: true,
  },
  {
    title: 'AI/ML Engineer Intern',
    company: 'Funsol Technologies (Pvt.) Ltd.',
    location: 'Islamabad, Pakistan',
    period: 'Feb 2024–Jul 2024',
    description: 'Contributed to AI solutions across multiple domains',
    highlights: [
      'Document QA systems',
      'Face recognition pipelines',
      'Object detection models',
      'Large-scale voice cloning projects',
    ],
  },
  {
    title: 'Web Front-End Developer Intern',
    company: 'SOFTOO, Brillanz Group',
    location: 'Islamabad, Pakistan',
    period: 'June–July 2022',
    description: 'Contributed to web development and responsive UI/UX enhancements',
    highlights: [
      'Responsive web design',
      'UI/UX improvements',
      'Frontend development',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="heading-experience">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Building innovative AI solutions across multiple domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 hover-elevate"
              data-testid={`card-experience-${index}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold" data-testid={`text-role-${index}`}>
                        {exp.title}
                      </h3>
                      <p className="text-lg text-foreground" data-testid={`text-company-${index}`}>
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary" data-testid={`badge-period-${index}`}>
                        {exp.period}
                      </Badge>
                      {exp.current && (
                        <Badge variant="default" data-testid={`badge-current-${index}`}>
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-base leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-3 text-sm"
                        data-testid={`text-highlight-${index}-${hIndex}`}
                      >
                        <span className="text-primary mt-1">▪</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
