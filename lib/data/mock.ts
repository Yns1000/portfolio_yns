import { Locale } from '@/lib/i18n';

export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  _id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Associative {
  _id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Hobby {
  _id: string;
  title: string;
  image: string;
  colSpan: number;
}

export async function getProjects(locale: Locale): Promise<Project[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      _id: '1',
      title: locale === 'fr' ? 'Plateforme IoT Industrielle' : locale === 'ar' ? 'منصة إنترنت الأشياء الصناعية' : 'Industrial IoT Platform',
      slug: 'industrial-iot-platform',
      description: locale === 'fr' ? 'Surveillance en temps réel des processus de fabrication.' : locale === 'ar' ? 'مراقبة فورية لعمليات التصنيع.' : 'Real-time monitoring for manufacturing processes.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      tags: ['React', 'Next.js', 'PySpark', 'MQTT'],
    },
    {
      _id: '2',
      title: locale === 'fr' ? 'Système ERP' : locale === 'ar' ? 'نظام تخطيط موارد المؤسسات' : 'Global ERP System',
      slug: 'global-erp-system',
      description: locale === 'fr' ? 'Application de gestion des ressources d\'entreprise.' : locale === 'ar' ? 'تطبيق إدارة موارد المؤسسة عبر فروع متعددة.' : 'Enterprise resource management application across multiple branches.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
    }
  ];
}

export async function getExperiences(locale: Locale): Promise<Experience[]> {
  return [
    {
      _id: '1',
      role: locale === 'fr' ? 'Ingénieur Logiciel & Industriel' : locale === 'ar' ? 'مهندس برمجيات وصناعة' : 'Software & Industrial Engineer',
      company: 'Tech & Factory Co.',
      period: '2023 - Present',
      description: locale === 'fr' ? 'Développement de solutions logicielles pour l\'industrie.' : locale === 'ar' ? 'تطوير حلول برمجية للصناعة 4.0' : 'Developing software solutions for industry 4.0 applications.',
    }
  ];
}

export async function getAssociative(locale: Locale): Promise<Associative[]> {
  return [
    {
      _id: '1',
      role: locale === 'fr' ? 'Bénévole' : locale === 'ar' ? 'متطوع' : 'Volunteer',
      organization: locale === 'fr' ? 'Aide aux sans-abris' : locale === 'ar' ? 'مساعدة المشردين' : 'Homeless Aid Association',
      period: 'Active',
      description: locale === 'fr' ? 'Participation active aux maraudes pour distribuer repas et vêtements aux sans-abris de la région.' : locale === 'ar' ? 'مشاركة فعالة في جولات توزيع وجبات الطعام والملابس للمشردين في المنطقة.' : 'Active participation in outreach programs distributing meals and clothing to the homeless community.',
    }
  ];
}

export async function getHobbies(locale: Locale): Promise<Hobby[]> {
  return [
    {
      _id: '1',
      title: locale === 'fr' ? 'Muay Thai' : locale === 'ar' ? 'المواي تاي' : 'Muay Thai',
      image: 'https://images.unsplash.com/photo-1549719386-74dfc97dd4fc?auto=format&fit=crop&q=80',
      colSpan: 1,
    },
    {
      _id: '2',
      title: locale === 'fr' ? 'Volleyball' : locale === 'ar' ? 'الكرة الطائرة' : 'Volleyball',
      image: 'https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80',
      colSpan: 1,
    },
    {
      _id: '3',
      title: locale === 'fr' ? 'Veille Technologique' : locale === 'ar' ? 'المتابعة التقنية' : 'Tech Watch',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
      colSpan: 1,
    }
  ];
}
