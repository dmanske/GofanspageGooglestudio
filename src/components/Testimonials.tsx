import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Diretor de Operações",
    company: "Torcida Organizada Paulista",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    quote: "Reduzimos em 80% o tempo de organização de cada caravana. O GoFans transformou completamente nossa operação.",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Gerente Financeira",
    company: "Viagens Esportivas Brasil",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    quote: "Conseguimos aumentar nossa receita em 15% com o controle financeiro automatizado. Não consigo imaginar trabalhar sem o sistema.",
    rating: 5
  },
  {
    name: "João Oliveira",
    role: "Coordenador de Viagens",
    company: "Caravanas do Interior",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    quote: "A comunicação com os passageiros ficou 5x mais eficiente. O WhatsApp integrado é simplesmente perfeito!",
    rating: 5
  },
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-foreground mb-6">Casos Reais de Sucesso</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como empresas como a sua estão transformando suas operações
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background border border-border rounded-2xl p-8 md:p-12 shadow-[var(--shadow-card)] animate-scale-in">
            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-foreground text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-2 border-primary"
              />
              <div className="text-left">
                <div className="font-bold text-foreground text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-primary font-semibold">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="hover:bg-primary/10 hover:border-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="hover:bg-primary/10 hover:border-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? "bg-primary w-8" 
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
