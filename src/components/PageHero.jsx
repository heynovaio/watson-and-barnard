import styles from "./PageHero.module.css"

// Shared hero used by the About and Resources pages: a green panel with a
// centered title + intro paragraph, and an optional decorative image.
export default function PageHero({ title, children, pMaxWidth, imageSrc, imageAlt = "" }) {
  return (
    <section className={styles.hero}>
      <div className={styles.green} />
      <div
        className={styles.content}
        style={pMaxWidth ? { "--p-max": `${pMaxWidth}px` } : undefined}
      >
        <h1>{title}</h1>
        <p>{children}</p>
        {imageSrc && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={imageSrc} alt={imageAlt} />
        )}
      </div>
    </section>
  )
}
