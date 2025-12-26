import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

const categoryColors = {
  operacional: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  financeiro: "bg-green-500/10 text-green-500 border-green-500/20",
  comunicacao: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  configuracao: "bg-orange-500/10 text-orange-500 border-orange-500/20"
};

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  const navigate = useNavigate();
  const Icon = feature.icon;

  return (
    <Card 
      className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
      onClick={() => navigate(`/funcionalidades/${feature.slug}`)}
    >
      {feature.isFeatured && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
          ⭐ {feature.badge}
        </div>
      )}

      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <Badge variant="outline" className={categoryColors[feature.category]}>
            {feature.category.charAt(0).toUpperCase() + feature.category.slice(1)}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {feature.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {feature.shortDescription}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <Button 
          variant="ghost" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/funcionalidades/${feature.slug}`);
          }}
        >
          Ver Detalhes
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
