import { Link } from 'react-router-dom';
import { FiBookOpen, FiArrowLeft } from 'react-icons/fi';
import heroBooks from '../../assets/hero-books.png';

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20 scroll-mt-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-1 flex flex-col items-center text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-none tracking-normal">
              سيرتك
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-subject1 font-medium mt-4 sm:mt-6 max-w-md leading-relaxed">
              دعم أجندة إصلاح التعليم لتحسين التدريس والتقييم والمسارات المهنية
            </p>

            <div className="mt-8 sm:mt-10 relative inline-block">
              {/* Continuous pulsing rings */}
              <span className="absolute inset-0 rounded-2xl bg-primary animate-ping-slow pointer-events-none" />
              <span className="absolute inset-0 rounded-2xl bg-primary animate-ping-slower pointer-events-none" />

              <Link
                to="/subjects"
                className="group relative inline-flex items-center gap-3 bg-primary text-white px-7 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 z-10 overflow-hidden"
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 pointer-events-none" />

                <FiBookOpen className="text-2xl relative z-10" />
                <span className="relative z-10">المواد الدراسية</span>
                <FiArrowLeft className="text-xl relative z-10 group-hover:-translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div className="order-2 relative">
            <div className="relative w-full">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-purple-200/60 to-transparent rounded-full blur-md pointer-events-none z-0" />
              <img
                src={heroBooks}
                alt="الكتب الثلاثة - مكونات برنامج سيرتك"
                className="relative z-10 w-full h-auto object-contain max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] max-w-[85%] sm:max-w-[80%] mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
