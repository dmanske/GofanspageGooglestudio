import { useLocation, useNavigate } from 'react-router-dom';

// Páginas de landing que têm seções próprias
const LANDING_PAGES = ['/', '/v-football', '/v-professional'];

export const useSmartNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLandingPage = LANDING_PAGES.includes(location.pathname);

  const navigateToSection = (sectionId: string) => {
    if (isLandingPage) {
      // Se já está em uma landing page, scroll direto na página atual
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Em outra página (checkout, portal, etc.), navegar para a homepage original
      navigate(`/#${sectionId}`);
    }
  };

  return { navigateToSection, isLandingPage };
};
