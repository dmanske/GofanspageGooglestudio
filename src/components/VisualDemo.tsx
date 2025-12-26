import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import passengersMockup from "@/assets/passengers-mockup.jpg";
import whatsappMockup from "@/assets/whatsapp-mockup.jpg";

const slides = [
  {
    image: dashboardMockup,
    title: "Dashboard Financeiro",
    description: "Visualize receitas, despesas e KPIs em tempo real"
  },
  {
    image: passengersMockup,
    title: "Lista de Passageiros",
    description: "Filtros avançados e status de pagamento de cada passageiro"
  },
  {
    image: whatsappMockup,
    title: "Comunicação WhatsApp",
    description: "Envie mensagens automatizadas para todos os passageiros"
  },
];

export const VisualDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-foreground mb-6">Veja o Sistema em Ação</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interface intuitiva e poderosa para gerenciar toda sua operação
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Carousel */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border">
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="w-full h-auto object-contain animate-fade-in"
            />
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-2"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-2"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Slide Info */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {slides[currentSlide].title}
            </h3>
            <p className="text-muted-foreground">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-primary w-8" 
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
