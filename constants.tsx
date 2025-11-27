import { 
  Monitor, 
  Globe, 
  Search, 
  ShieldCheck, 
  PenTool, 
  Share2, 
  Clock,
  Headphones,
  Award,
  Hammer
} from 'lucide-react';
import { ServiceItem, PackageItem, TestimonialItem, FAQItem, StatItem, PortfolioItem } from './types';

// Hero Slogans
export const HERO_SLOGANS = {
  solution: "وجودك الرقمي يبدأ من هنا... نجاحك يبدأ معنا.",
  customer: "لديك فكرة رائعة؟ نحن نبني لها المنزل الرقمي الأمثل.",
  excellence: "من فكرة عابرة إلى منصة رقمية مؤثرة."
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
    title: "مواقع الصناع الحرفيين",
    description: "تصميم معارض رقمية للحرفيين والصناع التقليديين لعرض إبداعاتهم وبيعها عالمياً.",
    icon: Hammer
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
    price: "500 درهم",
    originalPrice: "3,000 درهم",
    features: [
      "تصميم صفحة واحدة (Landing Page)",
      "تصميم احترافي متجاوب",
      "تسليم خلال 3 أيام",
      "نموذج اتصال",
      "زائد مصاريف شراء الدومين"
    ],
    ctaText: "اطلب الآن",
    isPopular: false
  },
  {
    name: "الباقة الاحترافية",
    price: "1500 درهم",
    originalPrice: "15,000 درهم",
    features: [
      "موقع من 3-5 صفحات",
      "دومين مجاني (.com)",
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
    price: "4500 درهم",
    originalPrice: "30,000 درهم",
    features: [
      "متجر إلكتروني متكامل",
      "دومين مجاني (.com) لمدة سنة",
      "استضافة سريعة مجانية",
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
    title: "متجر اكسسوارات ومجوهرات",
    category: "متجر إلكتروني",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "سوق البيع والشراء المفتوح",
    category: "منصة تجارة إلكترونية",
    image: "https://images.unsplash.com/photo-1472851294608-415105015b99?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "ورشة الأمانة للنجارة",
    category: "موقع خدمات حرفية",
    image: "https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "جريدة أخبار اليوم",
    category: "صحيفة إلكترونية",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "الصباغة والديكورات",
    category: "خدمات منزلية",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop"
  },
  {
    title: "خدمة السائق الخاص",
    category: "خدمات نقل",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "عيادة الشفاء الطبية",
    category: "موقع طبي",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "شركة العقارات",
    category: "موقع عقاري",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "مدونة التقنية الحديثة",
    category: "مدونة",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "الشركات والجمعيات",
    category: "موقع مؤسسي",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
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