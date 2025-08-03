import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "영어를 정말 못해도 가능한가요?",
      answer: "네, 전혀 문제없습니다! 알파벳부터 시작하는 아이들도 많이 있어요. 단어 하나부터 차근차근 지도하며, 아이의 수준에 맞춰 진행합니다. 중요한 건 영어 실력이 아니라 배우고자 하는 마음입니다."
    },
    {
      question: "외국인 수업은 언제 하나요?",
      answer: "한국인 선생님과의 수업을 통해 기본적인 문장 말하기가 익숙해지면 자연스럽게 연계됩니다. 보통 2-3개월 후부터 시작되며, 아이가 준비되었을 때 단계적으로 진행합니다."
    },
    {
      question: "준비물이 있나요?",
      answer: "Microsoft Teams만 설치하면 됩니다. 별도의 교재나 준비물은 필요 없어요. 수업에 필요한 모든 자료는 선생님이 준비해서 화면으로 보여드립니다."
    },
    {
      question: "수업 시간은 어떻게 되나요?",
      answer: "평일 오후 1시부터 10시까지, 토요일 오전 10시부터 오후 6시까지 가능합니다. 아이의 스케줄에 맞춰 고정 시간으로 진행하거나 매주 조율 가능합니다."
    },
    {
      question: "수업료는 얼마인가요?",
      answer: " 수업횟수 플랜에 따라 차이가있으나 다양한 할인 이벤트가 준비되어있습니다. 첫 수업은 무료로 진행되며, 수업후 진행여부를 편안히 결정하시면 됩니다. 후기 작성 시 1회 수업을 추가로 증정해드리며 자세한 할인 혜택은 상담 시 안내드립니다."
    },
    {
      question: "수업을 빠지면 어떻게 되나요?",
      answer: "24시간 전 미리 알려주시면 다른 날로 변경 가능합니다. 갑작스러운 사정으로 빠지더라도 월 2회까지는 보강 수업을 제공해드려요."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">자주 묻는</span> 질문
          </h2>
          <p className="text-lg text-gray-600">
            학부모님들이 가장 궁금해하시는 질문들을 모았습니다
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-600" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            더 궁금한 점이 있으시다면 언제든 문의해주세요!
          </p>
          <a 
            href="tel:010-8678-0842"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
          >
            전화로 문의하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;