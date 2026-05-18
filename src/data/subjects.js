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

const arabicOrdinals = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن'];

// Unit topics per subject per semester (4 units each)
const sampleUnitTopics = {
  arabic: {
    'semester-1': [
      { name: 'الوحدة الأولى - القراءة', sessions: ['مهارات القراءة', 'القراءة الإبداعية'] },
      { name: 'الوحدة الثانية - النحو', sessions: ['أساسيات النحو', 'تطبيقات نحوية'] },
      { name: 'الوحدة الثالثة - الإملاء', sessions: ['قواعد الإملاء', 'تدريبات إملائية'] },
      { name: 'الوحدة الرابعة - الكتابة', sessions: ['التعبير الكتابي', 'فن الكتابة'] },
    ],
    'semester-2': [
      { name: 'الوحدة الأولى - الاستماع', sessions: ['مهارات الاستماع', 'الاستيعاب السمعي'] },
      { name: 'الوحدة الثانية - المحادثة', sessions: ['مهارات الحوار', 'العرض والتقديم'] },
      { name: 'الوحدة الثالثة - الأدب', sessions: ['الشعر العربي', 'النثر الأدبي'] },
      { name: 'الوحدة الرابعة - التحليل', sessions: ['تحليل النصوص', 'النقد الأدبي'] },
    ],
  },
  math: {
    'semester-1': [
      { name: 'الوحدة الأولى - الأعداد', sessions: ['الأعداد الصحيحة', 'الأعداد النسبية'] },
      { name: 'الوحدة الثانية - العمليات', sessions: ['الجمع والطرح', 'الضرب والقسمة'] },
      { name: 'الوحدة الثالثة - الكسور', sessions: ['الكسور العادية', 'الكسور العشرية'] },
      { name: 'الوحدة الرابعة - المعادلات', sessions: ['المعادلات الخطية', 'حل المعادلات'] },
    ],
    'semester-2': [
      { name: 'الوحدة الأولى - الهندسة', sessions: ['الأشكال الهندسية', 'المثلثات والزوايا'] },
      { name: 'الوحدة الثانية - المساحات', sessions: ['مساحة الأشكال', 'الحجوم'] },
      { name: 'الوحدة الثالثة - الإحصاء', sessions: ['جمع البيانات', 'تحليل البيانات'] },
      { name: 'الوحدة الرابعة - الاحتمالات', sessions: ['مبادئ الاحتمالات', 'التطبيقات'] },
    ],
  },
  science: {
    'semester-1': [
      { name: 'الوحدة الأولى - المادة', sessions: ['خصائص المادة', 'حالات المادة'] },
      { name: 'الوحدة الثانية - الطاقة', sessions: ['أنواع الطاقة', 'تحولات الطاقة'] },
      { name: 'الوحدة الثالثة - الحركة', sessions: ['أنواع الحركة', 'قوانين الحركة'] },
      { name: 'الوحدة الرابعة - الكهرباء', sessions: ['الكهرباء الساكنة', 'التيار الكهربائي'] },
    ],
    'semester-2': [
      { name: 'الوحدة الأولى - الأحياء', sessions: ['الخلية', 'الكائنات الحية'] },
      { name: 'الوحدة الثانية - النباتات', sessions: ['أجزاء النبات', 'التركيب الضوئي'] },
      { name: 'الوحدة الثالثة - الجسم البشري', sessions: ['الأجهزة الحيوية', 'الصحة العامة'] },
      { name: 'الوحدة الرابعة - البيئة', sessions: ['النظام البيئي', 'حماية البيئة'] },
    ],
  },
};

// Returns units with their sessions for a given subject/grade/semester
export const getUnits = (subjectSlug, gradeSlug, semesterSlug) => {
  const subjectUnits = sampleUnitTopics[subjectSlug] || sampleUnitTopics.arabic;
  const units = subjectUnits[semesterSlug] || subjectUnits['semester-1'];

  return units.map((unit, unitIndex) => ({
    slug: `unit-${unitIndex + 1}`,
    number: unitIndex + 1,
    name: unit.name,
    sessions: unit.sessions.map((sessionTitle, sessionIndex) => {
      // Calculate global session number across the semester
      const globalNumber = (unitIndex * 2) + sessionIndex + 1;
      return {
        slug: `session-${globalNumber}`,
        number: globalNumber,
        name: `اللقاء ${arabicOrdinals[globalNumber - 1]}`,
        title: sessionTitle,
        fullName: `اللقاء ${globalNumber} - ${sessionTitle}`,
        unitSlug: `unit-${unitIndex + 1}`,
        unitName: unit.name,
      };
    }),
  }));
};

// Keep getSessions for backward compatibility (used by LessonPage)
export const getSessions = (subjectSlug, gradeSlug, semesterSlug) => {
  const units = getUnits(subjectSlug, gradeSlug, semesterSlug);
  return units.flatMap(unit => unit.sessions);
};
