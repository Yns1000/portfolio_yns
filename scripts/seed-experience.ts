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

const experiences: any[] = [
  {
    _type: 'experience',
    company: 'LUMINESS',
    role: {
      en: 'Software Engineering Apprentice',
      fr: 'Apprenti en ingénierie logicielle',
      ar: 'متدرب هندسة برمجيات'
    },
    location: 'Lens, France',
    startDate: '2023-10-01',
    isCurrent: true,
    description: {
      en: "- Participated in the development and improvement of software solutions for industrial process automation.\n- Supervised the implementation of an automated production line to study and improve its efficiency and performance.",
      fr: "- Participé au développement et à l’amélioration des solutions logicielles pour l’automatisation des processus industriels.\n- Surveillé la mise en œuvre d’une ligne de production automatisée pour étudier et améliorer son efficacité et sa performance.",
      ar: "- شارك في تطوير وتحسين الحلول البرمجية لأتمتة العمليات الصناعية.\n- أشرف على تنفيذ خط إنتاج آلي لدراسة وتحسين كفاءته وأدائه."
    },
    order: 30
  },
  {
    _type: 'experience',
    company: 'LIBERFIT',
    role: {
      en: 'Software Developer Intern',
      fr: 'Stagiaire Développeur Logiciel',
      ar: 'متدرب مطور برمجيات'
    },
    location: 'Lille, France',
    startDate: '2023-04-01',
    endDate: '2023-08-31',
    isCurrent: false,
    description: {
      en: "- Improved various graphical aspects of the website, reinforcing visual appeal and user interaction.\n- Developed and integrated a SEPA direct debit payment system for clients subscribing to Nuapay, streamlining financial transactions and customer subscriptions.",
      fr: "- Amélioration de divers aspects graphiques du site web, renforçant l’attrait visuel et l’interaction utilisateur.\n- Développement et intégration d’un système de paiement par prélèvement SEPA pour les clients abonnés à Nuapay, rationalisant les transactions financières et les abonnements clients.",
      ar: "- تحسين جوانب رسومية مختلفة للموقع الإلكتروني، مما يعزز الجاذبية البصرية وتفاعل المستخدم.\n- تطوير ودمج نظام الدفع بالخصم المباشر SEPA للعملاء المشتركين في Nuapay، وتبسيط المعاملات المالية واشتراكات العملاء."
    },
    order: 20
  },
  {
    _type: 'experience',
    company: 'Anacours',
    role: {
      en: 'Teacher / Tutor',
      fr: 'Enseignant / Tuteur',
      ar: 'مدرس / معلم'
    },
    location: 'Arras, France',
    startDate: '2024-12-01',
    isCurrent: true,
    description: {
      en: "- Provide academic support and private tutoring to students.",
      fr: "- Je donne des cours particuliers à des étudiants pour du soutien scolaire.",
      ar: "- تقديم الدعم الأكاديمي والدروس الخصوصية للطلاب."
    },
    order: 10
  }
]

async function seed() {
  console.log('Seeding Experiences to Sanity...')
  
  if (!process.env.SANITY_API_TOKEN) {
    console.error('ERROR: Missing SANITY_API_TOKEN in .env.local')
    process.exit(1)
  }

  for (const exp of experiences) {
    try {
      const res = await client.create(exp)
      console.log(`✅ Created ${exp.company} record (ID: ${res._id})`)
    } catch (err: any) {
      console.error(`❌ Failed to create ${exp.company}:`, err.message)
    }
  }
}

seed()
