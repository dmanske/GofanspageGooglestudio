import { Feature } from "@/data/features";
import { ArrowRight, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface FeaturedSectionProps {
  features: Feature[];
}

export const FeaturedSection = ({ features }: FeaturedSectionProps) => {
  const navigate = useNavigate();

  return (
    <section id="featured" className="py-24 bg-gradient-to-b from-primary/5 via-background to-background scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">⭐ Carros-Chefe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Os Módulos Mais Poderosos do <span className="text-primary">GoFans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Funcionalidades que sozinhas já transformam sua operação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant"
              >
                {/* Badge */}
                <div className="absolute -top-3 left-8">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {feature.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.shortDescription}</p>
                  </div>
                </div>

                {/* Benefits Preview */}
                <div className="space-y-3 mb-6">
                  {feature.subFeatures.slice(0, 4).map((subFeature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-sm">{subFeature.title}</span>
                        <span className="text-muted-foreground text-sm"> - {subFeature.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-background/50 rounded-xl">
                  {feature.realBenefits.map((benefit, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-primary">{benefit.stat}</div>
                      <div className="text-xs text-muted-foreground">{benefit.description}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={() => navigate(`/funcionalidades/${feature.slug}`)}
                  className="w-full group/btn"
                  size="lg"
                >
                  <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Ver em Ação
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
