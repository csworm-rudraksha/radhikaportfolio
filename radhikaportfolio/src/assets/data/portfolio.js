// ─── PERSONAL ───────────────────────────────────────────────────────────────
export const personal = {
  name: 'Radhika Agarwal',
  nameShort: 'Radhika',
  role: 'Full-Stack Developer',
  roleAlt: 'AI Engineer',
  college: 'GL Bajaj Institute of Technology & Management',
  batch: '2028',
  location: 'Greater Noida, UP',
  email: 'radhikaag18@gmail.com',
  phone: '+91 95282 01914',
  github: 'https://github.com/radhika',       // ← update with your real link
  linkedin: 'https://linkedin.com/in/radhika', // ← update
  leetcode: 'https://leetcode.com/radhikaag18',
  bio: "Building LLM-powered, full-stack products that actually ship. From voice-AI platforms to code generators — I turn ideas into real things using React, FastAPI, and a little too much curiosity.",
  availability: 'Open to internships & collabs',
}

// ─── STATS ───────────────────────────────────────────────────────────────────
export const stats = [
  { number: '3',   label: 'Live Projects' },
  { number: '200+', label: 'DSA Solved' },
  { number: '2nd',  label: 'Year B.Tech' },
  { number: 'GFG',  label: 'Club Member' },
]

// ─── SKILLS (ticker) ─────────────────────────────────────────────────────────
export const skills = [
  'C++', 'JavaScript', 'Python', 'Java', 'TypeScript',
  'React', 'Next.js', 'FastAPI', 'Node.js', 'Express.js',
  // 'LangChain', 'LangGraph', 'RAG', 'Vertex AI'
  'Agentic AI',
  'Gemini AI', 'Groq', 'OpenAI APIs',
  'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'REST APIs',
  'Git & GitHub', 'Postman', 'Linux', 'GCP',
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Saksham.ai',
    tagline: 'Voice-first multilingual learning, for every Indian',
    badge: 'Full-Stack · AI',
    year: '2025',
    initials: 'SA',
    colorClass: 'pi1',
    description:
      'Multilingual AI platform supporting 50+ skill paths and 3+ languages via Google Cloud Speech-to-Text/TTS. Achieved 30% lower response latency. Deployed on Vercel (frontend) and Render (backend) with real-time voice interactions for non-English speakers.',
    stack: ['Next.js', 'TypeScript', 'Python', 'Gemini', 'GCP', 'Node.js'],
    github: '#',  // ← add your link
    live: '#',
  },
  {
    id: 2,
    title: 'CodeCraft AI',
    tagline: 'Describe it. See it. Ship it.',
    badge: 'AI · SaaS',
    year: '2025',
    initials: 'CC',
    colorClass: 'pi2',
    description:
      'AI-powered platform converting natural language prompts into production-ready HTML/CSS components using Gemini 2.5 Flash with real-time chat refinement. Built with Next.js 15, Neon Postgres, Drizzle ORM, Clerk auth, and a credit-based tiered access system.',
    stack: ['Next.js', 'TypeScript', 'Gemini AI', 'PostgreSQL', 'Clerk', 'Drizzle ORM'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Interview Buddy',
    tagline: 'Your AI mock interview coach, 24/7',
    badge: 'AI · Python',
    year: '2026',
    initials: 'IB',
    colorClass: 'pi3',
    description:
      'AI-powered mock interview platform generating role-specific questions using LLaMA 3.3-70B via Groq API. Features automated answer evaluation, per-question scoring, session state management, and secure API handling. Deployed on Streamlit Cloud.',
    stack: ['Python', 'Streamlit', 'Groq', 'LLaMA 3.3-70B', 'Prompt Engineering'],
    github: '#',
    live: '#',
  },
]

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
export const achievements = [
  {
    num: '01',
    icon: '🏆',
    title: 'AI for Bharat Hackathon — Recognition Badge',
    desc: 'Built an AI-based solution for real-world Indian use cases at a national-level hackathon. Earned recognition badge out of hundreds of competing teams.',
    tag: 'Hackathon · National',
  },
  {
    num: '02',
    icon: '🌸',
    title: 'GSSoC Contributor — 20,000+ Program',
    desc: 'Selected as open source contributor in GirlScript Summer of Code, one of India\'s largest open source programs. Contributed to real-world production repositories.',
    tag: 'Open Source · GirlScript',
  },
  {
    num: '03',
    icon: '🧠',
    title: 'Mentored & Conducted Sessions for Peers',
    desc: 'Conducted multiple knowledge-sharing sessions and mentored junior peers on DSA, web development, and AI tools — helping them navigate their early coding journey.',
    tag: 'Mentorship · Community',
  },
  {
    num: '04',
    icon: '💻',
    title: '200+ DSA Problems Solved',
    desc: 'Solved 200+ Data Structures & Algorithms problems across LeetCode and competitive coding platforms. Strong foundation across arrays, trees, DP, and graphs.',
    tag: 'LeetCode · Problem Solving',
  },
]

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
export const certifications = [
  {
    org: 'Simplilearn',
    name: 'Machine Learning',
    detail: 'Comprehensive ML certification covering supervised & unsupervised learning, model evaluation, feature engineering, and real-world ML pipelines.',
    year: '2026',
    icon: '🎓',
  },
  {
    org: 'IBM',
    name: 'Web Development',
    detail: 'IBM-accredited badge covering HTML, CSS, JavaScript, responsive design, and modern front-end development practices with hands-on projects.',
    year: '2026',
    icon: '🏅',
  },
  {
    org: 'Google Cloud',
    name: 'Vertex AI & GCP',
    detail: 'Hands-on with Google Cloud Platform — Speech-to-Text, TTS, Vertex AI, and cloud deployment pipelines. Applied directly in Saksham.ai production build.',
    year: '2025',
    icon: '☁️',
  },
]

// ─── GFG CLUB EVENTS ──────────────────────────────────────────────────────────
export const clubEvents = [
  {
    tag: 'Workshop · GL Bajaj',
    title: 'Web Dev Bootcamp',
    desc: 'Hands-on React workshop covering component architecture and REST API integration for 60+ second-year students. Live coding + Q&A.',
    date: 'Add your date',      // ← fill in
    photo: null,                // ← add image path like '/events/webdev.jpg'
  },
  {
    tag: 'Speaker · GL Bajaj',
    title: 'AI & LLMs Talk',
    desc: 'Speaker session on LangChain and building AI-powered apps. Walked through RAG architecture with a live demo of Interview Buddy for 80+ attendees.',
    date: 'Add your date',
    photo: null,
  },
  {
    tag: 'Organiser · GL Bajaj',
    title: 'DSA Contest & Mentoring',
    desc: 'Organised intra-college DSA contest and peer mentoring sessions for 40+ first-year students on arrays, linked lists, and recursion.',
    date: 'Add your date',
    photo: null,
  },
]
