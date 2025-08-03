import React from 'react';
import { Award, Users, BookOpen, Globe } from 'lucide-react';

const TeacherSection = () => {
  const achievements = [
    {
      icon: <Award className="text-yellow-500" size={24} />,
      title: "10년 이상 관리경력",
      description: "온라인 화상영어 티칭 , 관리 "
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "학부모 니즈 이해",
      description: "학생소통 실전후 결과"
    },
    {
      icon: <BookOpen className="text-green-500" size={24} />,
      title: "재미있는 수업",
      description: "학습과 즐거움을 동시에"
    },
    {
      icon: <Globe className="text-purple-500" size={24} />,
      title: "체계적 연계",
      description: "외국인 수업까지 자연스럽게"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">저스틴 선생님</span> 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            10년 이상의 경험과 노하우로 아이들의 영어 실력을 확실하게 향상시키는 전문 강사입니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  J
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">저스틴 선생님</h3>
                  <p className="text-blue-600 font-semibold">온라인 화상영어 전문 강사</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-blue-600">10년 이상</strong>의 온라인 화상영어 현장 경험을 바탕으로 
                  아이들의 성향을 정확히 파악하고, 각각에게 맞는 최적의 학습법을 제공합니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  단순히 영어를 가르치는 것이 아니라, <strong className="text-emerald-600">아이가 영어를 
                  즐겁게 느끼고 자신감을 가질 수 있도록</strong> 하는 것이 저의 교육 철학입니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  한국인 선생님과의 기초 학습부터 외국인 선생님과의 실전 연계까지, 
                  <strong className="text-purple-600">체계적인 학습 설계</strong>로 아이들의 영어 실력을 
                  단계별로 완성시켜 드립니다.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl p-8">
                <img 
                  src="https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                  alt="온라인 수업 중인 선생님" 
                  className="rounded-2xl w-full h-auto shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            "아이들이 영어로 소통하는 즐거움을 느낄 수 있도록 도와드리겠습니다"
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            - 저스틴 선생님의 교육 철학 -
          </p>
          <a 
            href="tel:010-8678-0842"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
          >
            저스틴 선생님과 상담하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;