
import React, { useState, useEffect } from 'react';
import { Star, Calendar, Clock, MapPin } from 'lucide-react';
import Transition from './Transition';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set hackathon date - September 5, 2025
  const hackathonDate = new Date('2025-09-05T09:00:00');
  
  useEffect(() => {
    setLoaded(true);
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = hackathonDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background imagery with new hero image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/6bf8daba-7fd7-44f2-bd14-e93072eb3692.png" 
          alt="HackQuanta Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      
      {/* Subtle glowing effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-marvel-red/10 blur-[100px] -top-40 -left-40" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-marvel-blue/5 blur-[100px] -bottom-40 -right-40" />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 md:pr-8">
            {/* Event tag */}
            <Transition animation="fade-in-up" delay={100}>
              <div className="flex items-center gap-2 mb-6">
                <div className="px-3 py-1 rounded-full text-sm font-medium bg-marvel-red/20 text-white border border-marvel-red/30 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>September 5-6, 2025</span>
                </div>
              </div>
            </Transition>
            
            {/* Heading */}
            <Transition animation="fade-in-up" delay={300}>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 text-white">
                <span className="block mb-2 text-white font-marvel marvel-gradient">HACKQUANTA:</span>
                <span className="block text-marvel-cyan text-3xl md:text-4xl">CODE FOR THE MULTIVERSE</span>
              </h1>
            </Transition>
            
            {/* Description */}
            <Transition animation="fade-in-up" delay={500}>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Join India's most ambitious student hackathon where innovation meets technology. Build revolutionary solutions and win exciting prizes.
              </p>
              <p className="text-md text-marvel-red mb-4 font-marvel tracking-wider">
                DATA. STRATEGY. DOMINATION.
              </p>
            </Transition>
            
            {/* Countdown timer */}
            <Transition animation="fade-in-up" delay={600}>
              <div className="mb-8">
                <p className="text-sm text-marvel-white mb-2 font-marvel">HACKATHON BEGINS IN:</p>
                <div className="flex justify-start space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-marvel-red/20 w-16 h-16 flex items-center justify-center rounded-md border border-marvel-red/30">
                      <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">DAYS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-marvel-red/20 w-16 h-16 flex items-center justify-center rounded-md border border-marvel-red/30">
                      <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">HOURS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-marvel-red/20 w-16 h-16 flex items-center justify-center rounded-md border border-marvel-red/30">
                      <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">MINUTES</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-marvel-red/20 w-16 h-16 flex items-center justify-center rounded-md border border-marvel-red/30">
                      <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">SECONDS</span>
                  </div>
                </div>
              </div>
            </Transition>
            
            {/* Call to action */}
            <Transition animation="fade-in-up" delay={700}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#register" className="bg-marvel-red text-white py-3 px-8 rounded hover:bg-marvel-red/90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-marvel">
                  Register Now
                  <Star className="w-4 h-4 animate-pulse-slow" />
                </a>
                <a href="#about" className="border border-marvel-cyan text-marvel-cyan py-3 px-8 rounded hover:bg-marvel-cyan/10 transition-all duration-300 flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </Transition>

            {/* Event details */}
            <Transition animation="fade-in-up" delay={900}>
              <div className="mt-8 bg-marvel-navy/50 backdrop-blur-md p-4 rounded-lg border border-marvel-grey/30 hover:border-marvel-cyan/50 transition-all duration-300">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-marvel-cyan mx-auto mb-1" />
                    <p className="text-marvel-cyan font-bold">Duration</p>
                    <p className="text-white text-sm">30 Hours</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-5 h-5 text-marvel-cyan mx-auto mb-1" />
                    <p className="text-marvel-cyan font-bold">Format</p>
                    <p className="text-white text-sm">Offline</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-5 h-5 text-marvel-cyan mx-auto mb-1" />
                    <p className="text-marvel-cyan font-bold">Prize Pool</p>
                    <p className="text-white text-sm">₹30,000+</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <Transition animation="fade-in" delay={500} once={true}>
              <div className="relative">
                {/* Modern flat frame */}
                <div className="absolute inset-0 border-[2px] border-marvel-red rounded-lg shadow-md -m-2 opacity-30"></div>
                <div className="absolute inset-0 border-[2px] border-marvel-blue rounded-lg shadow-md m-2 opacity-10"></div>
                
                {/* Hero image - using the new HackQuanta poster */}
                <div className="relative z-10 overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/97b241be-4376-4d85-891e-b964f6c95d00.png" 
                    alt="HackQuanta Hackathon poster" 
                    className={`rounded-lg object-cover w-full transition-all duration-1000 ${
                      loaded ? 'opacity-100' : 'opacity-0 blur-lg'
                    }`}
                  />
                </div>
                
                {/* Event tag */}
                <div className="absolute bottom-[-55px] -right-1 bg-marvel-red text-white py-2 px-4 rounded font-marvel shadow-md">
                  SEPT 5-6, 2025
                </div>
              </div>

            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

