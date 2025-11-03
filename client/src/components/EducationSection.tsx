import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="heading-education">
            Education
          </h2>
        </div>

        <Card className="p-6 lg:p-8 max-w-3xl hover-elevate" data-testid="card-education">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-semibold" data-testid="text-degree">
                    BS in Information Technology
                  </h3>
                  <p className="text-lg text-foreground" data-testid="text-university">
                    Quaid-i-Azam University, Islamabad
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant="secondary" data-testid="badge-years">
                    2019-2023
                  </Badge>
                  <Badge variant="default" data-testid="badge-gpa">
                    CGPA: 3.3/4.0
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
