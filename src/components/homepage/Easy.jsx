import ExportedImage from "next-image-export-optimizer"
import handShake from "@/public/images/handshake.jpg"
import styles from "./Easy.module.css"

export default function Easy() {
  return (
    <section className={styles.easy}>
      <div className={styles.center}>
        <div className={styles.txtContainer}>
          <h2>How we Make it Easier For You</h2>
          <p>
            Our team of survey experts, engineers, and development consultants are
            highly-skilled, friendly and professional, and we apply the most current
            technology and equipment in our practice. With an in-depth understanding
            of local development and building permit processes, we will help you
            achieve all your project’s goals.
          </p>
          <p>
            Our team is committed to providing surveying services to all related
            professionals with integrity, excellence and accuracy, and can be reached
            anytime over the phone, behind a screen or in person for guidance and
            project support.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.visible}>
            <div>
              <ExportedImage src={handShake} alt="" sizes="585px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
