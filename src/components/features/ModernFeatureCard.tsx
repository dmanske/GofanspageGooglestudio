import { Feature } from "@/data/features";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ModernFeatureCardProps {
  feature: Feature;
  size?: "small" | "medium";
}

export const ModernFeatureCard = ({ feature, size = "medium" }: ModernFeatureCardProps) => {
  const navigate = useNavigate();
  const Icon = feature.icon;

  const getCategoryColor = (category: string) => {
    const colors = {
      operacional: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      financeiro: "bg-green-500/10 text-green-500 border-green-500/20",
      comunicacao: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      configuracao: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    };
    return colors[category as keyof typeof colors] || colors.operacional;
  };

  const categoryLabels = {
    operacional: "Operacional",
    financeiro: "Financeiro",
    comunicacao: "Comunicação",
    configuracao: "Configuração"
  };

  return (
    <div
      onClick={() => navigate(`/funcionalidades/${feature.slug}`)}
      className={`
        group relative bg-card/30 backdrop-blur-sm border-2 border-border rounded-2xl overflow-hidden
        hover:border-primary/50 hover:shadow-elegant transition-all duration-500 cursor-pointer
        hover:scale-[1.03] hover:-translate-y-2
        ${size === "small" ? "p-6" : "p-8"}
      `}
    >
      {/* Clickable Indicator */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
          Clique para ver →
        </div>
      </div>

      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(feature.category)}`}>
          {categoryLabels[feature.category]}
        </span>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <div className="inline-flex p-3 bg-primary/10 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Title & Description */}
      <h3 className={`font-bold mb-3 ${size === "small" ? "text-lg" : "text-xl"}`}>
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
        {feature.shortDescription}
      </p>

      {/* Benefits Preview */}
      <div className="space-y-2 mb-6">
        {feature.subFeatures.slice(0, 3).map((subFeature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-xs text-muted-foreground">{subFeature.title}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        onClick={() => navigate(`/funcionalidades/${feature.slug}`)}
        variant="outline"
        className="w-full group/btn"
        size={size === "small" ? "sm" : "default"}
      >
        Conhecer Módulo
        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
      </Button>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};
