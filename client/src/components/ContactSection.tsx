import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="heading-contact">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to contribute to innovative AI
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <Card className="p-6 lg:p-8 space-y-6 hover-elevate" data-testid="card-contact-info">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:Faatima.mir@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                    data-testid="link-contact-email"
                  >
                    Faatima.mir@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a
                    href="tel:+923179394423"
                    className="text-foreground hover:text-primary transition-colors"
                    data-testid="link-contact-phone"
                  >
                    +92 317 9394423
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground" data-testid="text-contact-location">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">Connect on social media</p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild data-testid="link-contact-linkedin">
                  <a href="https://linkedin.com/in/faatimamir" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild data-testid="link-contact-github">
                  <a href="https://github.com/faatimamir" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 lg:p-8 space-y-6 hover-elevate" data-testid="card-availability">
            <h3 className="text-2xl font-semibold">Currently Available For</h3>

            <ul className="space-y-3">
              {[
                'AI/ML Consulting Projects',
                'Full-time Opportunities',
                'Research Collaborations',
                'Technical Speaking Engagements',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">▪</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button asChild className="w-full" data-testid="button-send-message">
                <a href="mailto:Faatima.mir@gmail.com">Send a Message</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
