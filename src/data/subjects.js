export const subjects = {
  arabic: {
    id: 'arabic',
    name: 'اللغة العربية',
    color: '#F06496',
    colorLight: '#FBE7EF',
    gradient: 'linear-gradient(135deg, #F06496 0%, #E94B7E 100%)',
    description: 'تنمية مهارات القراءة والكتابة والتعبير باللغة العربية',
  },
  math: {
    id: 'math',
    name: 'الرياضيات',
    color: '#FBC421',
    colorLight: '#FEF5DB',
    gradient: 'linear-gradient(135deg, #FBC421 0%, #F5A623 100%)',
    description: 'تطوير مهارات الحساب والتفكير المنطقي وحل المسائل',
  },
  science: {
    id: 'science',
    name: 'العلوم',
    color: '#7AC943',
    colorLight: '#E8F5DB',
    gradient: 'linear-gradient(135deg, #7AC943 0%, #5BA82E 100%)',
    description: 'استكشاف العالم من حولنا عبر تجارب وتطبيقات علمية',
  },
};

export const grades = [
  { slug: 'grade-7', name: 'الصف السابع', number: 7 },
  { slug: 'grade-8', name: 'الصف الثامن', number: 8 },
  { slug: 'grade-9', name: 'الصف التاسع', number: 9 },
];

export const semesters = [
  { slug: 'semester-1', name: 'الفصل الأول', number: 1 },
  { slug: 'semester-2', name: 'الفصل الثاني', number: 2 },
];

// Sample topics for each subject — separated by semester
const sampleSessionTopics = {
  arabic: {
    'semester-1': ['القراءة', 'النحو', 'الإملاء', 'البلاغة', 'الكتابة', 'الأدب', 'الشعر', 'النصوص'],
    'semester-2': ['الاستماع', 'المحادثة', 'القواعد', 'التعبير', 'القصة', 'الرواية', 'المقال', 'التحليل'],
  },
  math: {
    'semester-1': ['الأعداد', 'العمليات', 'الكسور', 'الأسس والجذور', 'المعادلات', 'الهندسة', 'الإحصاء', 'الاحتمالات'],
    'semester-2': ['الدوال', 'المتباينات', 'الزوايا', 'المثلثات', 'الدائرة', 'المساحات', 'الحجوم', 'التحويلات'],
  },
  science: {
    'semester-1': ['المادة', 'الطاقة', 'الحركة', 'الكهرباء', 'الأحياء', 'النباتات', 'الفلك', 'البيئة'],
    'semester-2': ['الذرة', 'التفاعلات', 'الضوء', 'الصوت', 'الحيوانات', 'الجسم البشري', 'الأرض', 'المناخ'],
  },
};

const arabicOrdinals = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن'];

export const getSessions = (subjectSlug, gradeSlug, semesterSlug) => {
  const subjectTopics =
    sampleSessionTopics[subjectSlug] || sampleSessionTopics.arabic;
  const topics = subjectTopics[semesterSlug] || subjectTopics['semester-1'];

  return Array.from({ length: 8 }, (_, i) => ({
    slug: `session-${i + 1}`,
    number: i + 1,
    name: `اللقاء ${arabicOrdinals[i]}`,
    title: topics[i],
    fullName: `اللقاء ${arabicOrdinals[i]} - ${topics[i]}`,
    lessonCount: 4,
  }));
};
