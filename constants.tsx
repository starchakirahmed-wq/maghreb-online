import { 
  Monitor, 
  Smartphone, 
  Globe, 
  BarChart, 
  Search, 
  ShieldCheck, 
  PenTool, 
  Share2, 
  Camera,
  Clock,
  Edit,
  Headphones,
  Award,
  Zap
} from 'lucide-react';
import { ServiceItem, PackageItem, TestimonialItem, FAQItem, PortfolioItem, StatItem } from './types';

// Hero Slogans
export const HERO_SLOGANS = {
  solution: "وجودك الرقمي يبدأ من هنا... نجاحك يبدأ معنا.",
  customer: "لديك فكرة رائعة؟ نحن نبني لها المنزل الرقمي الأمثل.",
  excellence: "شركة مغرب أونلاين: من فكرة عابرة إلى منصة رقمية مؤثرة."
};

// Stats / Why Us Highlights
export const STATS: StatItem[] = [
  { value: "5+", label: "سنوات من الخبرة", icon: Award },
  { value: "100%", label: "دعم فني سريع", icon: Headphones },
  { value: "3", label: "أيام للتسليم", icon: Clock },
  { value: "SEO", label: "تحسين محركات البحث", icon: Search },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "تصميم مواقع الشركات",
    description: "مواقع تعريفية، صفحات هبوط، ومواقع خدمات تعكس هوية شركتك باحترافية.",
    icon: Monitor
  },
  {
    title: "المتاجر الإلكترونية",
    description: "متاجر متكاملة مع ربط بوابات الدفع، إدارة المخزون، وتقارير المبيعات.",
    icon: Globe
  },
  {
    title: "تحسين محركات البحث (SEO)",
    description: "تصدر نتائج البحث في جوجل مع خطط كلمات مفتاحية مدروسة وتحليل المنافسين.",
    icon: Search
  },
  {
    title: "التسويق الرقمي",
    description: "إدارة الحملات الإعلانية على فيسبوك وجوجل لزيادة المبيعات والانتشار.",
    icon: Share2
  },
  {
    title: "الهوية البصرية",
    description: "تصميم الشعارات والألوان والخطوط التي تميز علامتك التجارية.",
    icon: PenTool
  },
  {
    title: "الصيانة والدعم",
    description: "حزم صيانة دورية لضمان سرعة وأمان موقعك مع تحديثات مستمرة.",
    icon: ShieldCheck
  }
];

export const PACKAGES: PackageItem[] = [
  {
    name: "الباقة الأساسية",
    price: "$49",
    features: [
      "تصميم صفحة واحدة (Landing Page)",
      "تصميم احترافي متجاوب",
      "تسليم خلال 3 أيام",
      "نموذج اتصال",
      "ربط وسائل التواصل"
    ],
    ctaText: "اطلب الآن",
    isPopular: false
  },
  {
    name: "الباقة الاحترافية",
    price: "$149",
    features: [
      "موقع من 3-5 صفحات",
      "تحسين سرعة فائق",
      "لوحة تحكم سهلة",
      "تسليم خلال 7 أيام",
      "دعم فني لمدة شهر",
      "SEO أساسي"
    ],
    ctaText: "الأكثر طلباً",
    isPopular: true
  },
  {
    name: "باقة المتاجر (المتقدمة)",
    price: "$399",
    features: [
      "متجر إلكتروني متكامل",
      "ربط بوابات الدفع",
      "إدارة منتجات ومخزون",
      "SEO متقدم للمتاجر",
      "دعم فني لمدة 3 أشهر",
      "حملة تسويقية تجريبية"
    ],
    ctaText: "ابدأ مشروعك",
    isPopular: false
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "متجر الأزياء العصرية",
    category: "متجر إلكتروني",
    image: "https://picsum.photos/id/445/600/400"
  },
  {
    title: "شركة العقارات الذهبية",
    category: "موقع شركات",
    image: "https://picsum.photos/id/180/600/400"
  },
  {
    title: "عيادة الشفاء الطبية",
    category: "موقع خدمات",
    image: "https://picsum.photos/id/48/600/400"
  },
    {
    title: "مدونة التقنية الحديثة",
    category: "مدونة / محتوى",
    image: "https://picsum.photos/id/60/600/400"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "أحمد العمراني",
    role: "مدير شركة استيراد",
    content: "زادت مبيعاتي عبر الموقع بنسبة 40% بفضل التصميم الاحترافي والسرعة في التنفيذ.",
    image: "https://picsum.photos/id/1005/100/100"
  },
  {
    name: "سارة بنشقرون",
    role: "مالكة علامة تجارية",
    content: "فريق شركة مغرب أونلاين فهموا هويتي التجارية وحولوها لموقع مذهل. الدعم الفني ممتاز!",
    image: "https://picsum.photos/id/338/100/100"
  },
  {
    name: "كريم التازي",
    role: "رائد أعمال",
    content: "أفضل استثمار قمت به لمشروعي. احترافية عالية وسعر مناسب جداً مقارنة بالجودة.",
    image: "https://picsum.photos/id/237/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "كم تستغرق مدة تصميم موقع إلكتروني؟",
    answer: "تتراوح المدة من 3 أيام للصفحات البسيطة إلى 7-10 أيام للمواقع الأكبر، حسب حجم المشروع ومتطلباته."
  },
  {
    question: "هل يمكنني التعديل على الموقع لاحقاً؟",
    answer: "نعم، بالطبع. نحن نبني مواقع مرنة وسهلة الإدارة، ونقدم لك لوحة تحكم تمكنك من التعديل، أو يمكنك طلب التعديلات منا ضمن خدمة الدعم."
  },
  {
    question: "كيف تضمنون ظهور موقعي في جوجل؟",
    answer: "نحن نتبع أحدث معايير SEO التقنية (السرعة، الهيكلة، التوافق مع الجوال) ونساعدك في اختيار الكلمات المفتاحية المناسبة لمجالك."
  },
  {
    question: "هل تقدمون خدمة الدفع عند الاستلام؟",
    answer: "نعمل بنظام دفع مرن، عادةً دفعة أولى عند البدء ودفعة عند التسليم لضمان حقوق الطرفين."
  }
];

export const WORKFLOW_STEPS = [
  { title: "تواصل معنا", desc: "نحدد احتياجاتك بدقة" },
  { title: "التخطيط", desc: "نبني استراتيجية وتصميم" },
  { title: "التنفيذ", desc: "نطور ونطلق موقعك" },
  { title: "النمو", desc: "دعم مستمر وتسويق" }
];