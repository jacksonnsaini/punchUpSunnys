import { useEffect, useRef, useState } from "react";

const ParallaxFoodGallery = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const topContainerRef = useRef<HTMLDivElement | null>(null);
  const bottomContainerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const viewportHeight = window.innerHeight;
      
      const scrollProgress = 1 - (sectionTop / viewportHeight);
      setScrollPosition(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!topContainerRef.current || !bottomContainerRef.current) return;
    
    // Set initial positions with offsets (even when not visible)
    topContainerRef.current.style.transform = `translateX(-150px)`;
    bottomContainerRef.current.style.transform = `translateX(-2000px)`; 
    
    if (!isVisible) return;
    
    const topScrollAmount = Math.max(150, scrollPosition * 500 + 150); // Start from 150px offset
    const bottomScrollAmount = Math.max(-1800, scrollPosition * 1000 - 1800); // Start from 100px offset
    
    topContainerRef.current.style.transform = `translateX(-${topScrollAmount}px)`;
    bottomContainerRef.current.style.transform = `translateX(${bottomScrollAmount}px)`;
    
    topContainerRef.current.style.transition = "transform 0.3s ease-out";
    bottomContainerRef.current.style.transition = "transform 0.3s ease-out";
    
  }, [isVisible, scrollPosition]);

  // Food items data
  const topRowItems = [
    { src: "/eggsToast.jpeg", alt: "Avocado Toast" },
    { src: "/eggCroisant.jpeg", alt: "Croissant with Eggs" },
    { src: "/caesarSalad.jpeg", alt: "Caesar Salad" },
    { src: "/caesar.jpeg", alt: "Bloody Mary Cocktail" },
    { src: "/eggsToast.jpeg", alt: "Avocado Toast" },
    { src: "/eggCroisant.jpeg", alt: "Croissant with Eggs" },
  ];

  const bottomRowItems = [
    { src: "/peopleEating.jpeg", alt: "Appetizers that People Are Eating" },
    { src: "/bruchettaToast.jpeg", alt: "Bruschetta" },
    { src: "/pulledPorkSandwhiches.jpeg", alt: "Pulled Pork Sandwich" },
    { src: "/poutine.jpeg", alt: "Poutine" },
    { src: "nachos.jpeg", alt: "Nachos" },
  ];

  return (
    <section ref={sectionRef} className="bg-[#FFF8D2] py-20 overflow-hidden relative">

      {/* Top row - scrolls right to left */}
      <div className="mb-8">
        <div 
          ref={topContainerRef} 
          className="flex space-x-8 py-4 pl-4"
          style={{ width: "300%" }}
        >
          {topRowItems.map((item, index) => (
            <div 
              key={index} 
              className="w-96 h-64 flex-shrink-0 rounded-lg overflow-hidden border-4 border-[#FF9F1C] shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Duplicate items to create infinite effect */}
          {topRowItems.map((item, index) => (
            <div 
              key={`dup-${index}`} 
              className="w-96 h-64 flex-shrink-0 rounded-lg overflow-hidden border-4 border-[#FF9F1C] shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - scrolls left to right */}
      <div className="mt-8">
        <div 
          ref={bottomContainerRef} 
          className="flex space-x-8 py-4 pl-4"
          style={{ width: "300%" }}
        >
          {bottomRowItems.map((item, index) => (
            <div 
              key={index} 
              className="w-96 h-64 flex-shrink-0 rounded-lg overflow-hidden border-4 border-[#FF9F1C] shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Duplicate items to create infinite effect */}
          {bottomRowItems.map((item, index) => (
            <div 
              key={`dup-${index}`} 
              className="w-96 h-64 flex-shrink-0 rounded-lg overflow-hidden border-4 border-[#FF9F1C] shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxFoodGallery;