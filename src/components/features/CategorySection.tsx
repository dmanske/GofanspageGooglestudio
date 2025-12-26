import { Feature } from "@/data/features";
import { ModernFeatureCard } from "./ModernFeatureCard";
import { LucideIcon } from "lucide-react";

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
}

export const CategorySection = ({ id, title, description, icon: Icon, features }: CategorySectionProps) => {
  if (features.length === 0) return null;

  return (
    <section id={`category-${id}`} className="py-20 scroll-mt-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <ModernFeatureCard 
                feature={feature} 
                size={idx === 0 ? "medium" : "small"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
