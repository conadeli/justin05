import React from 'react';
import { Clock, Target, BookOpen, FileText } from 'lucide-react';

const CurriculumSection = () => {
  const features = [
    {
      icon: <Clock className="text-blue-600" size={32} />,
      title: "25분 1:1 집중 수업",
      description: "아이의 집중력에 최적화된 시간으로 최대 효과를 얻습니다"
    },
    {
      icon: <Target className="text-emerald-500" size={32} />,
      title: "반복 → 교정 → 확장",
      description: "체계적인 3단계 말하기 구조로 확실한 실력 향상을 보장합니다"
    },
    {
      icon: <BookOpen className="text-sky-500" size={32} />,
      title: "맞춤형 커리큘럼",
      description: "아이의 성향과 수준에 완벽하게 맞춘 개별 학습 계획"
    },
    {
      icon: <FileText className="text-purple-500" size={32} />,
      title: "부모 피드백 리포트",
      description: "매 수업 후 상세한 학습 리포트로 아이의 성장을 확인하세요"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">수업 특징</span> & 커리큘럼
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            과학적으로 검증된 언어 학습법과 아이 특성을 고려한 맞춤형 교육 시스템
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            단계별 학습 프로세스
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">반복 (Repeat)</h4>
              <p className="text-gray-600 text-sm">
                기본 문장 패턴을 자연스럽게<br />
                익힐 때까지 반복 연습
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">교정 (Correct)</h4>
              <p className="text-gray-600 text-sm">
                자연스러운 방식으로<br />
                문법과 발음을 교정
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">확장 (Expand)</h4>
              <p className="text-gray-600 text-sm">
                배운 패턴을 다양한 상황에<br />
                응용하여 말하기 확장
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;