import { useEffect, useRef, useState } from "react";

const ParallaxFoodGallery = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const topContainerRef = useRef<HTMLDivElement | null>(null);
  const bottomContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const viewportHeight = window.innerHeight;
      
      const progress = 1 - (sectionTop / viewportHeight);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    const scrollHandler = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (!topContainerRef.current || !bottomContainerRef.current) return;
    
    const topTranslate = Math.max(150, scrollProgress * 500 + 150);
    const bottomTranslate = Math.max(-1800, scrollProgress * 1000 - 1800);
    
    topContainerRef.current.style.transform = `translate3d(-${topTranslate}px, 0, 0)`;
    bottomContainerRef.current.style.transform = `translate3d(${bottomTranslate}px, 0, 0)`;
  }, [scrollProgress]);

  const topRowItems = [
    { src: "/eggsToast.jpeg", alt: "Avocado Toast" },
    { src: "/eggCroisant.jpeg", alt: "Croissant with Eggs" },
    { src: "/caesarSalad.jpeg", alt: "Caesar Salad" },
    { src: "/caesar.jpeg", alt: "Bloody Mary Cocktail" },
  ];

  const bottomRowItems = [
    { src: "/peopleEating.jpeg", alt: "Appetizers that People Are Eating" },
    { src: "/bruchettaToast.jpeg", alt: "Bruschetta" },
    { src: "/pulledPorkSandwhiches.jpeg", alt: "Pulled Pork Sandwich" },
    { src: "/poutine.jpeg", alt: "Poutine" },
  ];

  return (
    <section ref={sectionRef} className="bg-[#FFF8D2] py-20 overflow-hidden relative">
      <div className="mb-8">
        <div 
          ref={topContainerRef} 
          className="flex space-x-8 py-4 pl-4"
          style={{ width: "300%", willChange: "transform" }}
        >
          {[...Array(2)].map((_, repeatIndex) => (
            topRowItems.map((item, index) => (
              <div 
                key={`top-${repeatIndex}-${index}`} 
                className="w-96 h-64 flex-shrink-0 rounded-lg overflow-hidden border-4 border-[#FF9F1C] shadow-lg"
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div 
          ref={bottomContainerRef} 
          className="flex space-x-8 py-4 pl-4"
          style={{ width: "300%", willChange: "transform" }}
        >
          {[...Array(2)].map((_, repeatIndex) => (
            bottomRowItems.map((item, index) => (
              <div 
                key={`bottom-${repeatIndex}-${index}`} 
                className="w-96 h-64 flex-shrink-0 rounded-lg overflow-hidden border-4 border-[#FF9F1C] shadow-lg"
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxFoodGallery;