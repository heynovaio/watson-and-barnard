import styles from "./Values.module.css"

const VALUES = [
  { icon: "medal.svg", title: "Quality" },
  { icon: "chart.svg", title: "Guidance/Advising" },
  { icon: "convo.svg", title: "Communication" },
  { icon: "experience.svg", title: "Reliability/Experience" },
]

export default function Values() {
  return (
    <section className={styles.values}>
      <div className={styles.outer}>
        <h2>Our Values</h2>
        <p className={styles.sub}>
          Reprehenderit esse labore id veniam ut veniam non ex adipisicing
        </p>
        <div className={styles.grid}>
          {VALUES.map((v) => (
            <div className={styles.card} key={v.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/${v.icon}`} alt="" />
              <h4>{v.title}</h4>
              <p>
                amet nostrud quis commodo do sunt aute nulla ad aute minim duis duis
                sit et culpa consectetur et enim mollit
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
