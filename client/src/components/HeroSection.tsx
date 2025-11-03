import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import heroImage from '@assets/generated_images/AI_neural_network_visualization_2dc5c1e3.png';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-name">
                Fatima Mir
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground font-normal" data-testid="text-title">
                AI Engineer | Backend Developer
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span data-testid="text-location">Islamabad, Pakistan</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground max-w-2xl" data-testid="text-summary">
              Driven BS-IT graduate with 1.5 years of experience in cutting-edge AI, specializing in deep learning,
              computer vision, NLP, and data mining. Proven ability to develop and deploy innovative, AI-driven
              solutions. Passionate about building intelligent systems and pushing the boundaries of machine learning
              and AI.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                data-testid="button-download-cv"
              >
                <a href="/attached_assets/Fatima_Mir (1)_1762159241854.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-linkedin"
              >
                <a href="https://linkedin.com/in/faatimamir" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-github"
              >
                <a href="https://github.com/faatimamir" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-email"
              >
                <a href="mailto:Faatima.mir@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative">
              <img
                src={heroImage}
                alt="AI Neural Network Visualization"
                className="w-full rounded-md"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
