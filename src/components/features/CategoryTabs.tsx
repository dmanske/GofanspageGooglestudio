import { Bus, DollarSign, MessageCircle, Settings } from "lucide-react";
import { useState } from "react";

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs = ({ onCategoryChange }: CategoryTabsProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "all",
      label: "Todos os Módulos",
      icon: Settings,
      description: "Ver funcionalidades completas"
    },
    {
      id: "operacional",
      label: "Operacional",
      icon: Bus,
      description: "Gestão de viagens e passageiros"
    },
    {
      id: "financeiro",
      label: "Financeiro",
      icon: DollarSign,
      description: "Controle de receitas e despesas"
    },
    {
      id: "comunicacao",
      label: "Comunicação",
      icon: MessageCircle,
      description: "WhatsApp e notificações"
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
    
    // Smooth scroll to section with delay to allow rendering
    if (categoryId !== "all") {
      setTimeout(() => {
        const section = document.getElementById(`category-${categoryId}`);
        if (section) {
          const offset = 150; // Account for sticky header
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  return (
    <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-2 py-6 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`
                  flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 whitespace-nowrap
                  ${isActive 
                    ? "bg-primary text-primary-foreground shadow-glow scale-105" 
                    : "bg-card/50 hover:bg-card text-foreground hover:scale-102"
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? "animate-pulse" : ""}`} />
                <div className="text-left">
                  <div className="font-semibold text-sm">{category.label}</div>
                  <div className={`text-xs ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {category.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
