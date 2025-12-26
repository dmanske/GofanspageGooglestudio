import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useSmartNavigation } from "@/hooks/useSmartNavigation";
import gofansIcon from "@/assets/gofans-icon.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const { navigateToSection } = useSmartNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["hero", "what-is", "screenshots", "modules", "videos", "comparison", "supabase", "pricing", "cta"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", id: "hero" },
    { label: "O que é?", id: "what-is" },
    { label: "Screenshots", id: "screenshots" },
    { label: "Módulos", id: "modules" },
    { label: "TOP 7", id: "videos" },
    { label: "Comparação", id: "comparison" },
    { label: "Banco de Dados", id: "supabase" },
    { label: "Planos", id: "pricing" }
  ];

  const NavLink = ({ label, id, mobile = false }: { label: string; id: string; mobile?: boolean }) => {
    return (
      <button
        onClick={() => navigateToSection(id)}
        className={`text-base font-bold tracking-wide transition-colors ${
          activeSection === id ? "text-blue-400" : "text-slate-300 hover:text-white"
        } ${mobile ? "block w-full text-left py-3" : ""}`}
      >
        {label}
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/95 backdrop-blur-lg border-b border-slate-700/50 h-16" 
          : "bg-slate-950/80 backdrop-blur-sm h-20"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigateToSection("hero")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img src={gofansIcon} alt="GoFans" className="h-10 w-auto" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.id} {...link} />
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button onClick={() => navigate("/portal")} variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500/50 hover:text-white">
            Portal
          </Button>
          <Button onClick={() => navigate("/admin")} variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500/50 hover:text-white">
            Admin
          </Button>
          <Button onClick={() => navigate("/checkout")} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold shadow-lg shadow-blue-500/25">
            Contratar Agora
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-slate-800">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-slate-950 border-slate-700">
            <div className="flex flex-col gap-6 mt-8">
              <img src={gofansIcon} alt="GoFans" className="h-12 w-auto" />
              {navLinks.map((link) => (
                <NavLink key={link.id} {...link} mobile />
              ))}
              <Button onClick={() => navigate("/portal")} variant="outline" className="w-full mt-4 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                Portal
              </Button>
              <Button onClick={() => navigate("/admin")} variant="outline" className="w-full mt-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                Admin
              </Button>
              <Button onClick={() => navigate("/checkout")} className="w-full mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold">
                Contratar Agora
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
