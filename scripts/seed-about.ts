import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-27',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const education = [
  {
    _type: 'education',
    degree: {
      en: 'Master’s in Computer & Industrial Engineering',
      fr: 'Master en Génie Informatique et Industriel',
      ar: 'ماجستير في الهندسة الصناعية والمعلوماتية'
    },
    school: 'IG2I - Centrale Lille Institute',
    location: 'Lens, France',
    startDate: '2021-09-01',
    isCurrent: true,
    description: {
      en: "- Currently pursuing a Master's degree specialized in Computer and Industrial Engineering.\n- Engaged in Applied Mathematics with applications in Engineering and Computer Science.\n- Courses in Computer Engineering, including Algorithms, C and Java Programming, Data Structures, and Web Development.\n- Industrial Engineering studies covering Logic, Analog and Digital Electronics, Electricity, Automation, and Control Systems.",
      fr: "- Suivi d’un programme de Master spécialisé en Génie Informatique et Industriel.\n- Engagé dans les Mathématiques Appliquées avec des applications en Ingénierie et Informatique.\n- Cours en Génie Informatique, incluant Algorithmes, Programmation en C et Java, Structures de Données et Développement Web.\n- Études en Génie Industriel couvrant Logique, Électronique Analogique et Numérique, Électricité, Automatisation et Systèmes de Contrôle.",
      ar: "- متابعة برنامج ماجستير متخصص في الهندسة الصناعية والمعلوماتية.\n- دراسة الرياضيات التطبيقية بتطبيقات في الهندسة وعلوم الحاسوب.\n- دورات في هندسة الحاسوب، بما في ذلك الخوارزميات، والبرمجة بلغة C و Java، وهياكل البيانات وتطوير الويب.\n- دراسات في الهندسة الصناعية تشمل المنطق، والإلكترونيات التناظرية والرقمية، والكهرباء، والأتمتة وأنظمة التحكم."
    },
    order: 20
  },
  {
    _type: 'education',
    degree: {
      en: 'High School Diploma (Baccalauréat) - European Section',
      fr: 'Baccalauréat Général - Section européenne anglophone',
      ar: 'بكالوريا - القسم الأوروبي'
    },
    school: 'Lycée Béhal',
    location: 'Lens, France',
    startDate: '2018-09-01',
    endDate: '2021-07-01',
    isCurrent: false,
    description: {
      en: "- Mathematics, Physics, Chemistry, and Engineering Sciences.\n- Graduated with Honors (Mention Bien).\n- Participation in an English-speaking European section, strengthening bilingual communication skills and cultural awareness.",
      fr: "- Mathématiques, Physique, Chimie et Sciences de l’Ingénieur.\n- Obtenu avec Mention Bien.\n- Participation à une section européenne anglophone, renforçant les compétences en communication bilingue et la conscience culturelle.",
      ar: "- الرياضيات والفيزياء والكيمياء وعلوم الهندسة.\n- تخرج بمرتبة الشرف (Mention Bien).\n- المشاركة في قسم أوروبي ناطق باللغة الإنجليزية، مما عزز مهارات التواصل ثنائي اللغة والوعي الثقافي."
    },
    order: 10
  }
];

const skills = [
  { _type: 'skill', category: 'language', name: { en: 'French', fr: 'Français', ar: 'الفرنسية' }, level: { en: 'Native', fr: 'Natif', ar: 'لغة أم' }, order: 100 },
  { _type: 'skill', category: 'language', name: { en: 'English', fr: 'Anglais', ar: 'الإنجليزية' }, level: { en: 'Fluent', fr: 'Bilingue', ar: 'بطلاقة' }, badge: 'TOEIC (900+)', order: 90 },
  { _type: 'skill', category: 'language', name: { en: 'Arabic', fr: 'Arabe', ar: 'العربية' }, level: { en: 'Intermediate', fr: 'Intermédiaire', ar: 'متوسط' }, order: 80 },
  { _type: 'skill', category: 'technical', name: { en: 'React & Next.js', fr: 'React & Next.js', ar: 'React & Next.js' }, order: 50 },
  { _type: 'skill', category: 'technical', name: { en: 'TypeScript', fr: 'TypeScript', ar: 'TypeScript' }, order: 40 },
  { _type: 'skill', category: 'technical', name: { en: 'Node.js', fr: 'Node.js', ar: 'Node.js' }, order: 30 },
  { _type: 'skill', category: 'technical', name: { en: 'TailwindCSS', fr: 'TailwindCSS', ar: 'TailwindCSS' }, order: 20 },
  { _type: 'skill', category: 'technical', name: { en: 'Python & SQL', fr: 'Python & SQL', ar: 'Python & SQL' }, order: 10 },
]

const associations = [
  {
    _type: 'association',
    name: 'Action Humanity',
    role: {
      en: 'Volunteer',
      fr: 'Bénévole',
      ar: 'متطوع'
    },
    description: {
      en: "Help the homeless in Lille and raise funds for an orphanage in Fez, Morocco.",
      fr: "Aide aux sans-abris sur Lille et récolte de fonds pour un orphelinat à Fès au Maroc.",
      ar: "مساعدة المشردين في ليل وجمع التبرعات لدار أيتام في فاس، المغرب."
    },
    instagramUrl: 'https://instagram.com/actionhumanity',
    tiktokUrl: 'https://tiktok.com/@actionhumanity',
  }
]

async function seed() {
  console.log('Seeding About data...')
  if (!process.env.SANITY_API_TOKEN) {
    console.log('Skipping Sanity seed directly... outputting JSON for user instead.')
    console.log(JSON.stringify({ education, skills, associations }, null, 2))
    return;
  }

  for (const item of [...education, ...skills, ...associations] as any[]) {
    try {
      await client.create(item)
      console.log(`✅ Created ${item.name || item.school}`)
    } catch(e) {}
  }
}

seed()
