import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Gift, Clock, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS 초기화
emailjs.init('4duuwgq4uCevA9Gh6');

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    phone: '',
    preferredDay: '',
    preferredTime: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // EmailJS 설정값 직접 사용
    const serviceId = 'service_vl2256h';
    const templateId = 'template_uwn07qg';

    // EmailJS로 이메일 전송
    const templateParams = {
      name: formData.name,
      grade: formData.grade,
      phone: formData.phone,
      preferred_day: formData.preferredDay,
      preferred_time: formData.preferredTime,
      message: formData.message,
      submit_date: new Date().toLocaleString('ko-KR')
    };

    console.log('EmailJS 전송 시도...');
    console.log('전송 데이터:', templateParams);

    emailjs.send(serviceId, templateId, templateParams)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('무료 체험 신청이 완료되었습니다! 곧 연락드리겠습니다.');
      // 폼 초기화
      setFormData({
        name: '',
        grade: '',
        phone: '',
        preferredDay: '',
        preferredTime: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('EmailJS 전송 실패:', error);
      alert(`신청 중 오류가 발생했습니다.\n오류: ${error.text || error.message || '알 수 없는 오류'}\n\n직접 전화(010-8678-0842)로 연락 부탁드립니다.`);
    });
  };

  const benefits = [
    {
      icon: <Gift className="text-emerald-500" size={24} />,
      title: "첫 수업 무료",
      description: "25분 체험 수업 완전 무료"
    },
    {
      icon: <CheckCircle className="text-blue-500" size={24} />,
      title: "후기 작성 시",
      description: "추가 1회 수업 무료 증정"
    },
    {
      icon: <Clock className="text-purple-500" size={24} />,
      title: "유연한 시간",
      description: "아이 스케줄에 맞춰 조정"
    }
  ];

  return (
    <section id="contact-section" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">무료 체험</span> 신청하기
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            25분 무료 체험 수업으로 우리 아이에게 맞는 수업인지 직접 확인해보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 신청 폼 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              무료 체험 수업 신청
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  아이 이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="예: 김민준"
                />
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-semibold text-gray-900 mb-2">
                  학년 *
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                >
                  <option value="">학년을 선택해주세요</option>
                  <option value="유치원">유치원</option>
                  <option value="초1">초등학교 1학년</option>
                  <option value="초2">초등학교 2학년</option>
                  <option value="초3">초등학교 3학년</option>
                  <option value="초4">초등학교 4학년</option>
                  <option value="초5">초등학교 5학년</option>
                  <option value="초6">초등학교 6학년</option>
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="010-1234-5678"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDay" className="block text-sm font-semibold text-gray-900 mb-2">
                    상담 희망 요일
                  </label>
                  <select
                    id="preferredDay"
                    name="preferredDay"
                    value={formData.preferredDay}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  >
                    <option value="">선택해주세요</option>
                    <option value="월요일">월요일</option>
                    <option value="화요일">화요일</option>
                    <option value="수요일">수요일</option>
                    <option value="목요일">목요일</option>
                    <option value="금요일">금요일</option>
                    <option value="토요일">토요일</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-900 mb-2">
                    희망 시간
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  >
                    <option value="">선택해주세요</option>
                    <option value="08:00">오전 8시</option>
                    <option value="09:00">오전 9시</option>
                    <option value="10:00">오전 10시</option>
                    <option value="11:00">오전 11시</option>
                    <option value="12:00">오후 12시</option>
                    <option value="13:00">오후 1시</option>
                    <option value="14:00">오후 2시</option>
                    <option value="15:00">오후 3시</option>
                    <option value="16:00">오후 4시</option>
                    <option value="17:00">오후 5시</option>
                    <option value="18:00">오후 6시</option>
                    <option value="19:00">오후 7시</option>
                    <option value="20:00">오후 8시</option>
                    <option value="21:00">오후 9시</option>
                    <option value="22:00">오후 10시</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  궁금한 점이나 요청사항
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                  placeholder="아이의 성향, 영어 수준, 궁금한 점 등을 자유롭게 적어주세요"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                무료 체험 수업 신청하기
              </button>
            </form>
          </div>

          {/* 혜택 및 연락처 */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                특별 혜택
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-gray-50 rounded-full">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                빠른 상담
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:010-8678-0842"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Phone size={24} />
                  전화 상담 신청
                </a>
                
                <div className="text-center pt-4">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Mail size={20} />
                    <span>010-8678-0842</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    평일 오전 9시 ~ 오후 9시 상담 가능
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-blue-900 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            🎉 지금 신청하면 특별 혜택! 🎉
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-lg font-bold text-yellow-300">첫 수업 무료</div>
              <div className="text-sm text-blue-100">25분 체험 수업 완전 무료</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-lg font-bold text-yellow-300">후기 작성시</div>
              <div className="text-sm text-blue-100">추가 1회 수업 무료 증정</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;