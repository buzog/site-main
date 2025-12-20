import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TeamCard from '../components/TeamCard'
import Button from '../components/Button'
import asem from '../src/asem.png'
import image from '../src/image.png'
import mAbd from '../src/m7ammedAbdullah.png'
import mSaid from '../src/m7ammedSaid.png'
import fahrs from '../src/projectsimages/fahrs.png'
import ProjectCard from '../components/ProjectCard'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
  const members = [
    { name: 'عاصم عبدالله ناجي', role: 'مهندس برمجيات', image: asem, github: 'https://github.com/buzog/asemnajee', profile: 'http://asem.buzog.com' },
    { name: 'محمد عبدالله قاسم', role: 'مهندس برمجيات', image: mAbd, github: 'https://github.com/Mohamed-Abdallh-Kasam-Frhan', profile: 'http://mohammed-qasim.buzog.com' },
    { name: 'محمد سعيد', role: 'مهندس برمجيات', image: mSaid, github: 'https://github.com/M7Saeed4', profile: 'http://mohammad-saeed.buzog.com' },
    // جمال مجدي: لا توجد صورة متوفرة
    { name: 'جمال مجدي', role: 'مهندس برمجيات', image: null, github: 'https://github.com/', profile: 'http://gamal.buzog.com' },
    { name: 'سماء عبدالسلام', role: 'مهندسة برمجيات', image: null, github: 'https://github.com/SamaAlMasoudi', profile: 'http://sama.buzog.com' },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container py-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-slate-100">السلام عليكم ورحمة الله وبركاته</h1>
            <p className="text-sky-100/90 text-lg mb-6">مرحباً بكم في فريق <span className="text-sky-300 font-semibold">#بزوغ التقني</span> — فريق شبابي ينشر المعرفة ويبني أثرًا واضحًا في مجتمعنا من خلال البرمجة، التصميم، والإبداع.</p>
            <p className="text-sky-200/80 mb-6">نؤمن أن العمل الجماعي هو مفتاح النجاح، وأن أثرنا يبدأ من الآن.</p>
            <div className="flex gap-3 flex-wrap">
              <Button>انضم للفريق</Button>
              <a href="#projects" className="inline-flex items-center rounded-lg px-3 py-2 bg-transparent border border-white/10 text-sky-100 hover:bg-white/5 text-sm">اطلع على المشاريع</a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-2xl">
              <Image src={image} alt="hero" fill className="object-cover" />
              <div className="absolute left-4 bottom-4 bg-gradient-to-r from-sky-500/80 to-indigo-500/60 p-3 rounded-xl">
                <div className="text-sm text-white/90">فريق بزوغ</div>
                <div className="text-xs text-white/80">نشر المعرفة وصناعة التأثير</div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-slate-100">أعضاء الفريق</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m) => (
              <Card key={m.name} className="flex flex-col gap-4">
                <TeamCard name={m.name} role={m.role} image={m.image} githubUrl={m.github} profileUrl={m.profile} />
                <div className="mt-2 text-sm text-sky-200/80">عضو نشيط في المجتمع والمشاريع المفتوحة المصدر.</div>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-slate-100">مشاريعنا</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project: فهرس */}
            <ProjectCard
              title="فهرس"
              description="موقع لجمع المحتوى التعليمي الجامعي وتوفير مرجع شامل لجميع الأقسام والمستويات والتعريف بالتخصصات."
              moreInfo={
                'فهرس هو مشروع يهدف إلى جمع المحتوى التعليمي الجامعي وتنظيمه حسب التخصصات والمستويات، مع واجهة بحث متقدمة وتصنيفات لكل مقررات المواد. يمكن أن يتضمن نظام مساهمات للطلاب والمحاضرين ومحتوى مرئي ودروس مسجلة.'
              }
              image={fahrs}
              githubUrl="https://github.com/AsemNajee/fahrs-api-v2"
            />

            {/* Fake project */}
            {/* <ProjectCard
              title="مشروع تجريبي"
              description="مشروع وهمي لعرض تصميم وواجهة المستخدم والتجارب الأولية للمشروع."
              moreInfo={'نسخة عرض لتجربة واجهات المستخدم، تعرض شبكات، بطاقات مشاريع، ونماذج أولية للتفاعل.'}
              image={image}
              githubUrl="https://github.com/buzog/demo"
            /> */}
          </div>
        </section>

        {/*
        <section id="contact">
          <div className="glass">
            <h3 className="text-xl font-semibold text-slate-100 mb-2">تواصل معنا</h3>
            <p className="text-sky-200/80 mb-4">هل لديك فكرة أو مشروع؟ تواصل معنا لننطلق سويًا.</p>
            <div className="flex gap-3">
              <input placeholder="بريدك الإلكتروني" className="flex-1 rounded-lg p-3 bg-transparent border border-white/10 text-sky-100" />
              <Button>أرسل</Button>
            </div>
          </div>
        </section>
        */}
      </main>
      <Footer />
    </div>
  )
}
