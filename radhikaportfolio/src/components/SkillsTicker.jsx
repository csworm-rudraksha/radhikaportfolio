import { skills } from '../assets/data/portfolio'

export default function SkillsTicker() {
  // Duplicate for seamless loop
  const all = [...skills, ...skills]

  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {all.map((skill, i) => (
          <span className="tick-item" key={i}>
            <span className="tick-sep">✦</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
