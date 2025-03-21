import { useEffect, useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';

const pallyBold = localFont({
  src: '../public/fonts/Pally-Bold.otf',
  variable: '--font-pally-bold',
});

const pallyRegular = localFont({
  src: '../public/fonts/Pally-Regular.otf',
  variable: '--font-pally-regular',
});

const pallyMedium = localFont({
  src: '../public/fonts/Pally-Medium.otf',
  variable: '--font-pally-medium',
});

export default function Home() {
  const [viewportProgress, setViewportProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate progress based on first viewport height only
      // This ensures animations complete within the first screen regardless of total page length
      const viewportHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Progress will be 0 at top of page and 1 at bottom of first viewport
      const progress = Math.min(currentScroll / viewportHeight, 1);
      setViewportProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scale sun size based on viewport progress (0-100%)
  const progressPercentage = viewportProgress * 100;
  const sunSize = 130 + (progressPercentage * 2);
  
  // Initial content fades out by 50% of viewport scroll
  const contentOpacity = Math.max(1 - (viewportProgress * 2), 0);
  
  // New tagline fades in from 60% to 80% of viewport scroll
  const newTaglineOpacity = Math.min(Math.max((progressPercentage - 60) / 20, 0), 1);
  
  return (
    <div className={`${pallyBold.variable} ${pallyMedium.variable} ${pallyRegular.variable} font-[family-name:var(--font-geist-sans)]`}>
      {/* Hero Section with Animation */}
      <div className="grid grid-rows-[auto_1fr_20px] min-h-screen">
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center w-full h-20 bg-white/40 px-[240px] py-8 z-50">
          <button className="btn font-[family-name:var(--font-pally-bold)] text-2xl bg-[#FADE50] p-1 pl-9.5 pr-9.5 rounded-sm text-[#FFFFFF]">Menu</button>
          <img src="/logo.svg" alt="Logo" width="200" height="auto" />
          <button className="btn font-[family-name:var(--font-pally-bold)] text-2xl bg-[#FADE50] p-1 pl-2 pr-2 rounded-sm text-[#FFFFFF]">Get a Table</button>
        </nav>
        
        <main className="flex flex-col items-center justify-center w-full h-full">
          <div className="bg-[#52B4D9] w-screen h-screen fixed left-0 top-0 -z-10 overflow-hidden">
            <div 
              className="absolute left-1/2 top-275 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-all duration-200 ease-out"
              style={{
                background: 'radial-gradient(circle, #FADE50 37%, rgb(255, 170, 0) 81%, #FFBB3D 100%)',
                width: `${sunSize}vh`,
                height: `${sunSize}vh`,
              }}
            ></div>          
            <img 
              src="/cloud1.svg" 
              alt="Cloud" 
              className="absolute top-75 left-20 w-110 h-auto transition-opacity duration-300" 
              style={{ opacity: contentOpacity }}
            />
            <img 
              src="/cloud2.svg" 
              alt="Cloud" 
              className="absolute top-110 right-15 w-80 h-auto transition-opacity duration-300" 
              style={{ opacity: contentOpacity }}
            />
            <div 
              className="flex flex-col items-center text-center mt-40 relative z-10 transition-opacity duration-300"
              style={{ opacity: contentOpacity }}
            >
              <img src="/logo.svg" alt="Logo" width="700" height="auto"/>
              <h1 className="font-[family-name:var(--font-pally-bold)] text-5xl mt-8 text-white">A Brighter Way to Brunch</h1>
            </div>
            
            {/* New tagline that fades in */}
            <div 
              className="fixed inset-0 flex items-center justify-center z-10 transition-opacity duration-500"
              style={{ opacity: newTaglineOpacity }}
            >
              <h1 className="font-[family-name:var(--font-pally-bold)] text-5xl text-white text-center">
                Where Every Bite Feels Like Sunshine
              </h1>
            </div>
          </div>
        </main>
      </div>

      {/* Content Section (below the hero) */}
      <section className="relative bg-[#FEF9E1] min-h-screen py-20 px-[240px] mt-400">
        <div className="grid grid-cols-2 gap-16 items-center mt-10">
          {/* Left Column - Text Content */}
          <div className="">
            <h2 className="text-5xl font-[family-name:var(--font-pally-bold)] text-[#FF6B6B] mb-8">
              Bright, Bold, and Flavorful
            </h2>
            
            <p className="text-xl mb-4">
              Welcome to <span className="text-[#FF6B6B] font-[family-name:var(--font-pally-bold)]">Sunnys!</span> A family friendly, award-winning bistro!
            </p>
            
            <p className="text-xl mb-4">
              At <span className="text-[#FF6B6B] font-[family-name:var(--font-pally-bold)]">Sunnys</span>, we're all about <span className="font-[family-name:var(--font-pally-medium)]">delicious food, good vibes</span>, and a sprinkle of <span className="text-[#FF9F1C] font-[family-name:var(--font-pally-bold)]">sunshine</span> in every bite. Whether you're here to snack, sip, or indulge in something <span className="underline decoration-wavy decoration-[#000000]">special</span>, our menu has something that'll make you smile :)
            </p>
            
            <p className="text-xl mb-8">
              So <span className="font-[family-name:var(--font-pally-bold)]">kick back</span>, <em>relax</em>, and let the <span className="text-[#FF9F1C] font-semibold">sunshine</span> <em>(and tasty food)</em> soak in!
            </p>
            
            <button className="btn font-[family-name:var(--font-pally-bold)] text-2xl bg-[#FADE50] p-1 px-10 rounded-md text-[#FFFFFF]">
              Menu
            </button>
          </div>
          
          {/* Right Column - Food Images with Clouds */}
          <div className="relative">
            {/* Main large circle with food image */}
            <div className="relative rounded-full overflow-hidden border-3 border-[#FF9F1C] w-[600px] h-[600px] mx-auto">
              <div className="w-full h-full bg-[#FFC540] flex items-center justify-center">
                {/* Placeholder for first food image */}
                <div className="text-center text-gray-600">
                  <img src="/eggsBenny.jpg" alt="Eggs Benedict" className="w-full h-auto" />
                </div>
              </div>
              
              {/* Cloud decoration */}
            </div>
            
            {/* Small circle with second food image */}
            <div className="absolute bottom-[-60px] left-80 rounded-full overflow-hidden border-3 border-[#FF9F1C] w-[300px] h-[300px]">
              <div className="w-full h-full bg-[#FFC540] flex items-center justify-center">
                {/* Placeholder for second food image */}
                <div className="text-center text-gray-600">
                  <img src="/steak-and-eggs.jpg" alt="Steak and Eggs" className="w-full h-auto" />
                </div>
              </div>
            </div>
            
            {/* Cloud decoration */}
            <img 
              src="/cloud3.svg" 
              alt="Cloud" 
              className="absolute top-[-20px] right-[-30px] w-[280px] h-auto z-10"
            />
            <img 
              src="/cloud4.svg" 
              alt="Cloud" 
              className="absolute bottom-[10px] right-100 w-[280px] h-auto z-10"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FEF9E1]">
        <h2 className="whitespace-nowrap text-6xl font-[family-name:var(--font-pally-bold)] text-[#FF6B6B]">
          Savory * Satisfying * Vibrant * Cheery * Sunny * Delicious * Friendly * Special * Sweet *
        </h2>
      </section>




      {/* Footer or other sections */}
      <footer className="bg-[#52B4D9] text-white py-10 px-[240px] text-center">
        <p>© 2025 Sunnys. All rights reserved.</p>
      </footer>
    </div>
  );
}