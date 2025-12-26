import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Monitor, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import lockerRoomBg from "@/assets/football/locker-room.jpg";

// Import screenshots
import ingressosDesktop from "@/assets/screenshots/ingressos.png";
import ingressosMobile from "@/assets/screenshots/ingressos-mobile.png";
import aniversarios from "@/assets/screenshots/aniversarios.png";
import clientes from "@/assets/screenshots/clientes.png";
import clienteDetalhe from "@/assets/screenshots/cliente-detalhe.png";

interface Screenshot {
  image: string;
  title: string;
  description: string;
  type: "desktop" | "mobile";
}

const screenshots: Screenshot[] = [
  {
    image: ingressosDesktop,
    title: "Sistema de Ingressos",
    description: "Controle completo de vendas de ingressos com visualização de jogos futuros e passados",
    type: "desktop"
  },
  {
    image: ingressosMobile,
    title: "Ingressos Mobile",
    description: "Versão responsiva do sistema de ingressos para acesso em qualquer dispositivo",
    type: "mobile"
  },
  {
    image: aniversarios,
    title: "Gestão de Aniversários",
    description: "Acompanhe e parabenize seus clientes nos aniversários",
    type: "desktop"
  },
  {
    image: clientes,
    title: "Lista de Clientes",
    description: "Visualização completa de todos os contatos cadastrados",
    type: "desktop"
  },
  {
    image: clienteDetalhe,
    title: "Detalhes do Cliente",
    description: "Perfil completo com dados pessoais, viagens, financeiro e insights",
    type: "desktop"
  }
];

export const ScreenshotsGalleryFootball = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + screenshots.length) % screenshots.length);
    }
  };

  return (
    <section id="screenshots" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${lockerRoomBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950/95"></div>
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Conheça o Sistema</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galeria de <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Screenshots</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Veja as principais telas do GoFans e descubra como é fácil gerenciar suas caravanas
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Type badge */}
                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 border border-slate-700/50">
                  {screenshot.type === "desktop" ? (
                    <Monitor className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                  )}
                  <span className="text-xs text-slate-300 capitalize">{screenshot.type}</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium px-4 py-2 bg-blue-500/90 rounded-full text-sm">
                    Ver em tela cheia
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{screenshot.title}</h3>
                <p className="text-sm text-slate-400">{screenshot.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="max-h-[85vh] max-w-[90vw] relative">
            <img
              src={screenshots[selectedImage].image}
              alt={screenshots[selectedImage].title}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-bold text-white mb-1">{screenshots[selectedImage].title}</h3>
            <p className="text-sm text-slate-400">{selectedImage + 1} / {screenshots.length}</p>
          </div>
        </div>
      )}
    </section>
  );
};