import React from 'react';
import HeroSection from './components/HeroSection';
import RecommendationSection from './components/RecommendationSection';
import ClassMethodSection from './components/ClassMethodSection';
import CurriculumSection from './components/CurriculumSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import TeacherSection from './components/TeacherSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <RecommendationSection />
      <ClassMethodSection />
      <CurriculumSection />
      <ReviewsSection />
      <FAQSection />
      <TeacherSection />
      <ContactSection />
    </div>
  );
}

export default App;