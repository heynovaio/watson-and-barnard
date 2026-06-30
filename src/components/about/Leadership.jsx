import ExportedImage from "next-image-export-optimizer"
import placeholder from "@/public/images/services_3@3x.jpg"
import styles from "./Leadership.module.css"

function PersonCard({ person, cardClass }) {
  const {
    image = placeholder,
    name = "John Doe",
    position = "Position",
    credentials = "",
  } = person ?? {}

  return (
    <div className={`${styles.card} ${cardClass}`}>
      <ExportedImage src={image} alt={name} sizes="(max-width: 590px) 100vw, 450px" />
      <div className={styles.content}>
        <p className={styles.position}>{position}</p>
        <h3 className={styles.name}>{name}</h3>
        {credentials && <p className={styles.credentials}>{credentials}</p>}
      </div>
    </div>
  )
}

function TeamSection({ heading, subtitle, members, gridClass, cardClass }) {
  if (!members?.length) return null
  return (
    <>
      <h2>{heading}</h2>
      {subtitle && <p className={styles.sub}>{subtitle}</p>}
      <div className={`${styles.grid} ${gridClass}`}>
        {members.map((person, i) => (
          <PersonCard key={i} person={person} cardClass={cardClass} />
        ))}
      </div>
    </>
  )
}

export default function Leadership({
  leadership = { heading: "Our Leadership Team", subtitle: "", members: [] },
  technical = { heading: "Our Technical Team", subtitle: "", members: [] },
  field = { heading: "Our Field Team", subtitle: "", members: [] },
}) {
  return (
    <section className={styles.leadership}>
      <div className={styles.outer}>
        <TeamSection
          heading={leadership.heading}
          subtitle={leadership.subtitle}
          members={leadership.members}
          gridClass={styles.leaderGrid}
          cardClass={styles.leaderCard}
        />
        <TeamSection
          heading={technical.heading}
          subtitle={technical.subtitle}
          members={technical.members}
          gridClass={styles.teamGrid}
          cardClass={styles.teamCard}
        />
        <TeamSection
          heading={field.heading}
          subtitle={field.subtitle}
          members={field.members}
          gridClass={styles.teamGrid}
          cardClass={styles.teamCard}
        />
      </div>
    </section>
  )
}