import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const beforeAfter = [
    {
      before: "Apple... red...",
      after: "I like red apples because they're sweet!",
      student: "김민준 (초2)",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      before: "Go... school...",
      after: "I go to school by bus every morning.",
      student: "이서연 (초1)",
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      before: "Play... friend...",
      after: "I want to play soccer with my friends.",
      student: "박지훈 (초3)",
      image: "https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    }
  ];

  const testimonials = [
    {
      text: "우리 아이가 처음으로 영어로 완전한 문장을 말했어요! 3개월 만에 이런 변화가 일어날 줄 몰랐습니다.",
      parent: "김민준 엄마",
      rating: 5
    },
    {
      text: "내성적인 아이라 걱정했는데, 저스틴 선생님과는 편하게 대화해요. 영어에 대한 자신감이 생겼어요!",
      parent: "이서연 아빠",
      rating: 5
    },
    {
      text: "학원에서는 효과를 못 봤는데, 1:1 수업으로 바꾸니까 확실히 달라지네요. 매일 영어로 말하려고 해요.",
      parent: "박지훈 엄마",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">실제 수업 모습</span> & 후기
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            단어 몇 개로 시작했던 아이들이 완전한 문장으로 대화하는 놀라운 변화를 경험해보세요
          </p>
        </div>

        {/* Before & After */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Before & After 변화 모습
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {beforeAfter.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex justify-center p-4 bg-gray-50">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={item.image} 
                      alt={item.student} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.student}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-600 font-semibold text-sm">BEFORE</span>
                      </div>
                      <p className="text-gray-700 italic">"{item.before}"</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-600 font-semibold text-sm">AFTER</span>
                      </div>
                      <p className="text-gray-700 font-medium">"{item.after}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            학부모 후기
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg relative">
                <Quote className="absolute top-4 right-4 text-blue-200" size={32} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">
                      {testimonial.parent.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.parent}</p>
                    <p className="text-sm text-gray-500">학부모</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default ReviewsSection;