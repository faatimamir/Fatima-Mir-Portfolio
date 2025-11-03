import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Github, Clock } from 'lucide-react';

interface Article {
  title: string;
  link?: string; 
  url: string;
  publishDate: string;
  readTime: string;
  description: string;
  tags: string[];
  githubUrl?: string;
}

const articles: Article[] = [
  {
    title: 'Image Recoloring with BiRefNet: Fine-Grained Segmentation Meets Realism',
    url: 'https://medium.com/@faatima.mir/image-recoloring-with-birefnet-fine-grained-segmentation-meets-realism-ead25f608937',
    publishDate: 'June 2025',
    readTime: '4 min read',
    description: 'Exploring how BiRefNet\'s bidirectional feature refinement enables precise image segmentation for realistic object recoloring, with applications in e-commerce, interior design, and augmented reality.',
    tags: ['Deep Learning', 'Computer Vision', 'Image Processing', 'AI'],
    githubUrl: 'https://github.com/faatimamir/DressColorChanger',
  },
  {
    title: 'How to Optimize LLM Responses Using OpenAI Graders',
    url: 'https://medium.com/@faatima.mir/how-to-optimize-llm-responses-using-openai-graders-cde8171f903f',
    publishDate: 'July 2025',
    readTime: '3 min read',
    description: 'A comprehensive guide to using LLMs as expert evaluators for measuring and improving response quality through automated grading, enabling scalable optimization of AI products.',
    tags: ['LLM', 'OpenAI', 'AI Optimization', 'NLP'],
  },
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="heading-articles">
            Publications & Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-articles-description">
            Technical writing on AI, deep learning, and machine learning optimization techniques
          </p>
        </div>

        <div className="grid gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 hover-elevate"
              data-testid={`card-article-${index}`}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2" data-testid={`text-article-title-${index}`}>
                        {article.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                        <span data-testid={`text-article-date-${index}`}>{article.publishDate}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span data-testid={`text-article-readtime-${index}`}>{article.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed" data-testid={`text-article-description-${index}`}>
                      {article.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          data-testid={`badge-article-tag-${index}-${tagIndex}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        asChild
                        variant="default"
                        data-testid={`button-read-article-${index}`}
                      >
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read on Medium
                        </a>
                      </Button>
                      {article.githubUrl && (
                        <Button
                          asChild
                          variant="outline"
                          data-testid={`button-github-${index}`}
                        >
                          <a href={article.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
