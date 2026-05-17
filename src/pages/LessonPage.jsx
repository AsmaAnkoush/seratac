import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  FiUser,
  FiBookOpen,
  FiTarget,
  FiList,
  FiCheckCircle,
  FiHelpCircle,
  FiArrowRight,
} from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { subjects, grades, semesters, getSessions } from '../data/subjects';

const LessonPage = () => {
  const { subjectSlug, gradeSlug, semesterSlug, sessionSlug } = useParams();
  const [viewMode, setViewMode] = useState('student');

  const subject = subjects[subjectSlug];
  const grade = grades.find((g) => g.slug === gradeSlug);
  const semester = semesters.find((s) => s.slug === semesterSlug);
  const sessionsList = getSessions(subjectSlug, gradeSlug, semesterSlug);
  const session = sessionsList.find((s) => s.slug === sessionSlug);

  if (!subject || !grade || !semester || !session)
    return <Navigate to="/subjects" />;

  const lessonSections = [
    {
      icon: FiTarget,
      title: 'الأهداف التعليمية',
      studentContent:
        'في نهاية هذا اللقاء، ستكون قادراً على فهم المفاهيم الأساسية وتطبيقها في حياتك اليومية.',
      teacherContent:
        'تأكد من شرح كل هدف بوضوح، واستخدم أمثلة محسوسة. ركّز على أهداف التعلم المرجوة وتأكد من فهم الطلبة لها.',
    },
    {
      icon: FiBookOpen,
      title: 'محتوى الدرس',
      studentContent:
        'يتناول هذا اللقاء مجموعة من المفاهيم المهمة التي تساعدك على بناء معرفة قوية في هذا المجال.',
      teacherContent:
        'ابدأ بمراجعة الدرس السابق، ثم قدّم المفاهيم الجديدة تدريجياً. استخدم وسائل بصرية ومشاركة الطلبة لتعزيز الفهم.',
    },
    {
      icon: FiList,
      title: 'النشاطات',
      studentContent:
        'سنقوم بنشاطات تفاعلية ممتعة تساعدك على التطبيق العملي للمفاهيم.',
      teacherContent:
        'قسّم الطلبة لمجموعات صغيرة. خصص 10 دقائق لكل نشاط. تجوّل بين المجموعات وقدّم الدعم اللازم.',
    },
    {
      icon: FiHelpCircle,
      title: 'أسئلة وأمثلة',
      studentContent:
        'سنحل مجموعة من الأمثلة معاً، ثم سنجيب عن أسئلة تطبيقية.',
      teacherContent:
        'استخدم استراتيجية التساؤل لتحفيز التفكير الناقد. شجّع الطلبة على طرح أسئلتهم وناقشها معهم.',
    },
    {
      icon: FiCheckCircle,
      title: 'التقييم والمراجعة',
      studentContent:
        'في نهاية اللقاء، ستجيب عن أسئلة قصيرة للتأكد من فهمك للمحتوى.',
      teacherContent:
        'استخدم تقييماً تكوينياً سريعاً (3-5 أسئلة). اجمع البيانات لتحسين اللقاء القادم وتحديد الطلبة الذين يحتاجون دعماً إضافياً.',
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(180deg, #F0EEFC 0%, #F5EEFA 50%, #FBE7EF 100%)',
      }}
    >
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-16 sm:pb-20">
        <div className="mb-4">
          <Link
            to={`/subjects/${subjectSlug}/${gradeSlug}`}
            className="inline-flex items-center gap-2 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md hover:shadow-lg border border-grey/10 text-primary font-semibold text-sm sm:text-base hover:-translate-x-1 transition-all"
          >
            <FiArrowRight className="text-base sm:text-lg" />
            <span>رجوع</span>
          </Link>
        </div>

        <div
          className="rounded-3xl p-5 sm:p-8 shadow-xl mb-6 sm:mb-8 text-center text-white relative overflow-hidden"
          style={{ background: subject.gradient }}
        >
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 grid grid-cols-6 gap-1 opacity-20 pointer-events-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="w-1 h-1 rounded-full bg-white" />
            ))}
          </div>

          <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-white/80 text-xs sm:text-sm mb-2">
              {subject.name} - {grade.name} - {semester.name}
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              {session.name}
            </h1>
            <p className="text-white/90 text-base sm:text-lg">{session.title}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-2 sm:p-3 shadow-md mb-6 sm:mb-8 flex gap-2 max-w-md mx-auto border border-grey/10">
          <button
            onClick={() => setViewMode('student')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
              viewMode === 'student'
                ? 'text-white shadow-md'
                : 'text-grey hover:bg-grey/5'
            }`}
            style={viewMode === 'student' ? { background: subject.gradient } : {}}
          >
            <FiUser />
            عرض كطالب
          </button>
          <button
            onClick={() => setViewMode('teacher')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
              viewMode === 'teacher'
                ? 'text-white shadow-md'
                : 'text-grey hover:bg-grey/5'
            }`}
            style={viewMode === 'teacher' ? { background: subject.gradient } : {}}
          >
            <FiBookOpen />
            عرض كمعلم
          </button>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {lessonSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-7 shadow-lg shadow-purple-100/30 border border-grey/10"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                    style={{ background: subject.gradient }}
                  >
                    <Icon className="text-white text-lg sm:text-xl" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-primary">
                    {section.title}
                  </h2>
                </div>

                <div className="text-grey leading-relaxed text-sm sm:text-base mb-3">
                  {section.studentContent}
                </div>

                {viewMode === 'teacher' && (
                  <div
                    className="mt-4 p-4 rounded-xl border-r-4"
                    style={{
                      backgroundColor: subject.colorLight,
                      borderRightColor: subject.color,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FiBookOpen style={{ color: subject.color }} />
                      <span
                        className="font-bold text-sm"
                        style={{ color: subject.color }}
                      >
                        ملاحظات للمعلم
                      </span>
                    </div>
                    <p className="text-grey text-sm leading-relaxed">
                      {section.teacherContent}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LessonPage;
