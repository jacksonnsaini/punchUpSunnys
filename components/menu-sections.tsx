import React from 'react';
import localFont from "next/font/local";

const pallyBold = localFont({
  src: "../public/fonts/Pally-Bold.otf",
  variable: "--font-pally-bold",
});

const pallyRegular = localFont({
  src: "../public/fonts/Pally-Regular.otf",
  variable: "--font-pally-regular",
});

const roboto = localFont({
  src: "../public/fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
});

const MenuSections = () => {
  return (
    <div className={`${pallyBold.variable} ${pallyRegular.variable} ${roboto.variable} flex flex-col w-full`}>
      <div className="flex flex-row w-full h-screen">
        <div className="w-1/2 h-full bg-[#FADE50] flex items-center justify-center">
          <div className="p-52 text-left">
            <h2 className="text-4xl font-[family-name:var(--font-pally-bold)] mb-4">
              Sip, Savor, <span className="text-[#EB6862]">Repeat!</span>
            </h2>
            <p className="text-2xl font-[family-name:var(--font-roboto)] mb-6">
              Our drinks menu is packed with sunshine in every sip. <br /><br /> From handcrafted cocktails to fresh-pressed juices, our menu is full of bold flavors and refreshing sips made to elevate every moment.
            </p>
            <button className="btn font-[family-name:var(--font-pally-bold)] text-2xl bg-[#EB6862] mt-8 p-1 pl-8 pr-8 rounded-sm text-[#FFFFFF] block mx-auto">
              Menu
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <img 
            src="/mimosa.jpeg" 
            alt="Menu section" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-row w-full h-screen">
        <div className="w-1/2 h-full">
          <img 
            src="/eggCroisant.jpeg" 
            alt="Menu section" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full bg-[#52B4D9] flex items-center justify-center">
        <img src='/cloud3.svg' alt='cloud' className='absolute mb-135 ml-85 w-75 transform scale-x-[-1] z-2' />
            <div
            className="absolute mb-155 ml-125 rounded-full blur-lg z-1"
            style={{
                background:
                'radial-gradient(circle, #FADE50 37%, rgb(255, 170, 0) 81%, #FFBB3D 100%)',
                width: '175px',
                height: '175px',
            }}
            ></div>
        <div className="p-52 text-left">
            <h2 className="text-4xl font-[family-name:var(--font-pally-bold)] mb-4 text-white">
              Rise, <span className="text-[#FADE50]">shine,</span> and dig in!
            </h2>
            <p className="text-2xl font-[family-name:var(--font-roboto)] mb-6 text-white">
              From fluffy omelets to hearty bennies, our breakfast is made fresh and full of flavor to start your day right.
            </p>
            <p className="text-2xl font-[family-name:var(--font-roboto)] mb-8 text-white">
              Pair it with a fresh-brewed coffee and make your morning even better!
            </p>
            <button className="btn font-[family-name:var(--font-pally-bold)] text-2xl bg-[#F7941D] mt-8 p-1 pl-8 pr-8 rounded-sm text-[#FFFFFF] block mx-auto">
              Menu
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full h-screen">
        <div className="w-1/2 h-full bg-[#EB6862] flex items-center justify-center">
          <div className="p-52 text-left">
            <h2 className="text-4xl font-[family-name:var(--font-pally-bold)] mb-4 text-white">
              Little appetites, <span className='text-[#FADE50]'>big perks!</span>
            </h2>
            <p className="text-2xl font-[family-name:var(--font-roboto)] mb-6 text-white">
              Bring the family and let the little ones enjoy something delicious... on the house! Kids under 10 eat free with the purchase of an adult meal, because great food should be fun for the whole family!
            </p>
            <button className="btn font-[family-name:var(--font-pally-bold)] text-2xl bg-[#FADE50] mt-8 p-1 pl-8 pr-8 rounded-sm text-[#FFFFFF] block mx-auto">
              Menu
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <img 
            src="/waffles.jpeg" 
            alt="Menu section" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuSections;
