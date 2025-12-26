import { useState } from "react";
import { Play, ChevronRight, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TourStep {
  step: number;
  title: string;
  description: string;
  screenshot?: string;
}

interface InteractiveTourProps {
  title: string;
  steps: TourStep[];
}

export const InteractiveTour = ({ title, steps }: InteractiveTourProps) => {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const startTour = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  const closeTour = () => {
    setIsActive(false);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      closeTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (steps.length === 0) return null;

  return (
    <>
      {/* Trigger Button */}
      {!isActive && (
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Tour Interativo</h3>
            <p className="text-muted-foreground mb-6">
              Veja passo a passo como o {title} funciona na prática
            </p>
            <Button size="lg" onClick={startTour}>
              <Play className="w-4 h-4 mr-2" />
              Iniciar Tour Guiado
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Tour Modal */}
      {isActive && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-4">
                <Badge variant="default">
                  Passo {currentStep + 1} de {steps.length}
                </Badge>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={closeTour}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                {steps[currentStep].screenshot && (
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src={steps[currentStep].screenshot}
                      alt={steps[currentStep].title}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-2xl font-bold mb-3">
                    {steps[currentStep].title}
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-2 bg-muted/50">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>
              <div className="text-sm text-muted-foreground">
                {currentStep + 1} / {steps.length}
              </div>
              <Button onClick={nextStep}>
                {currentStep < steps.length - 1 ? (
                  <>
                    Próximo
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  "Finalizar Tour"
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
