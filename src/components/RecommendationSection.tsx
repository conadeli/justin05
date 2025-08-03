import React from 'react';
import { Users, BookOpen, MessageSquare, Lightbulb, Heart } from 'lucide-react';

const RecommendationSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const recommendations = [
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: "1:1 수업이 꼭 필요한 아이",
      description: "아이의 속도에 맞춘 학습효과를위해 "방법"을 찾아 수업해야하는 아이",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      icon: <BookOpen className="text-sky-500" size={32} />,
      title: "학원 수업에서 효과를 못 느끼는 아이",
      description: "학원은 열심히 나가는데 실제적인 이해도나 숙지가 느린아이",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      icon: <MessageSquare className="text-emerald-500" size={32} />,
      title: "문장으로 말하기를 원하는 아이",
      description: "단어가 아닌 완전한 문장으로 표현하는 실력향상",
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      icon: <Lightbulb className="text-orange-500" size={32} />,
      title: "수업에 흥미를 느끼지 못하는 아이",
      description: "영어에 연계된 그 어떤 작은것으로도 칭찬받아 흥미를 찾고 즐겁게 수업",
      image: "https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      icon: <Heart className="text-pink-500" size={32} />,
      title: "내성적이지만 영어에 관심 있는 아이",
      description: "열린공간및 여러아이들과 함께하는것을 부담스러워하는아이 ",
      image: "https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            이런 아이에게 <span className="text-blue-600">추천해요</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            우리 아이의 특성에 맞는 맞춤형 영어 교육으로 확실한 변화를 경험해보세요
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            무료 체험 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;