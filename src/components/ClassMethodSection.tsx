import React from 'react';
import { UserCheck, MessageCircle, RefreshCw, Globe } from 'lucide-react';

const ClassMethodSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: <UserCheck className="text-blue-600" size={40} />,
      title: "학부모 상담",
      description: "아이의 성향과 학습 니즈를 정확히 파악합니다",
      details: "• 현재 영어 수준 확인\n• 학습 목표 설정\n• 성향별 맞춤 방법 제안"
    },
    {
      icon: <MessageCircle className="text-sky-500" size={40} />,
      title: "아이와 첫 미팅",
      description: "아이의 영어 반응과 학습 스타일을 관찰합니다",
      details: "• 편안한 분위기 조성\n• 영어에 대한 관심도 파악\n• 개별 맞춤 계획 수립"
    },
    {
      icon: <RefreshCw className="text-emerald-500" size={40} />,
      title: "체계적 수업 방식",
      description: "반복 → 교정 → 확장의 3단계 학습법",
      details: "• 문장 패턴 반복 학습\n• 자연스러운 문법 교정\n• 말하기 능력 단계별 확장"
    },
    {
      icon: <Globe className="text-purple-500" size={40} />,
      title: "외국인 수업 연계",
      description: "실전 영어 경험으로 자신감을 완성합니다",
      details: "• 한국인 선생님과의 기초 완성 후\n• 외국인과의 실전 대화 연습\n• 글로벌 영어 감각 향상"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">수업 진행</span> 방식
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            체계적이고 단계별로 진행되는 수업 방식으로 아이의 영어 실력을 확실하게 향상시킵니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-lg">{step.description}</p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-normal">
                        {step.details}
                      </pre>
                    </div>
                  </div>
                </div>
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

export default ClassMethodSection;