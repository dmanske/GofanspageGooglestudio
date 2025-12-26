import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Check } from "lucide-react";

interface ComparisonItem {
  aspect: string;
  before: string;
  after: string;
}

interface ComparisonSliderProps {
  title: string;
  comparisons: ComparisonItem[];
}

export const ComparisonSlider = ({ title, comparisons }: ComparisonSliderProps) => {
  if (comparisons.length === 0) return null;

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Antes vs Depois com {title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Antes */}
            <Card className="border-2 border-destructive/20">
              <CardHeader className="text-center pb-6 bg-destructive/5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 mx-auto mb-3">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-xl text-destructive">
                  Antes (Sem Sistema)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {comparisons.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{item.aspect}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.before}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Depois */}
            <Card className="border-2 border-secondary/20 shadow-glow">
              <CardHeader className="text-center pb-6 bg-secondary/5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mx-auto mb-3">
                  <Check className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl text-secondary">
                  Depois (Com {title})
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {comparisons.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/5">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{item.aspect}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.after}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-6">
                <p className="text-lg font-bold mb-2">Resultado Final</p>
                <p className="text-2xl font-bold text-primary">
                  Economia de tempo + Aumento de receita + Controle total
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
