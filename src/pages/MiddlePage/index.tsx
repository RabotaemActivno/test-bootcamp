import styles from './MidldlePage.module.scss'

export function MidldlePage() {
    return (
        <div className={styles.root}>
            <div>
                <div className={styles.progressLine_line}></div>
                <div className={styles.progressLine_line2}></div>
                <div className={styles.dot_wrapper}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
                <div className={styles.number_wrapper}>
                    <div className={styles.numbers}>1</div>
                    <div className={styles.numbers}>2</div>
                    <div className={styles.numbers}>3</div>
                </div>
            </div>
            <div>
                <div className={styles.field_wrapper}>
                    <div className={styles.subtitle}>Advantages</div>
                    <div className={styles.input_wrapper}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}