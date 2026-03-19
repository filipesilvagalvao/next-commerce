import styles from "./page.module.css"
export default function Home() {
  return (
    <div className={styles.page__container}>
      <div className={styles.page__grid}>
        <div>
          1
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
        <div>
          4
        </div>
      </div>
    </div>
  );
}
