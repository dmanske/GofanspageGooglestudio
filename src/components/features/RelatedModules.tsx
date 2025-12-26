import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { features, Feature } from "@/data/features";

interface RelatedModulesProps {
  currentFeatureId: string;
  relatedIds: string[];
}

export const RelatedModules = ({ currentFeatureId, relatedIds }: RelatedModulesProps) => {
  const navigate = useNavigate();
  
  const relatedFeatures = features.filter(
    (f) => relatedIds.includes(f.id) && f.id !== currentFeatureId
  );

  if (relatedFeatures.length === 0) return null;

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Funciona Melhor Com
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {relatedFeatures.slice(0, 3).map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {feature.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate(`/funcionalidades/${feature.slug}`)}
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
