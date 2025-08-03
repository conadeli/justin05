import React from 'react';
import { Phone, Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              저스틴 선생님과 함께하는<br />
              <span className="text-sky-300">1:1 온라인 집중 영어</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              한국인 선생님과 기초부터, 외국인 선생님과 실전까지<br />
              연결되는 영어 말하기 수업!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-150 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Play size={20} />
                무료 체험 수업 신청하기
              </button>
              <a 
                href="tel:010-8678-0842"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-150 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Phone size={20} />
                빠른 전화 상담하기
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop" 
                  alt="아이가 화상 수업하는 모습" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-4 rounded-full shadow-lg">
                <Play size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;