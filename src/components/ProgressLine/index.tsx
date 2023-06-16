import styles from './ProgressLine.module.scss'

type ProgressLinePropsType = {
    type: number
}

export function ProgressLine() {
    return (
        <div>
            <div className={styles.progressLine_line1}></div>
            <div className={styles.dot_wrapper1}>
                <div className={styles.dot1}></div>
                <div className={styles.dot1}></div>
                <div className={styles.dot1}></div>
            </div>
            <div className={styles.number_wrapper1}>
                <div className={styles.numbers1}>1</div>
                <div className={styles.numbers1}>2</div>
                <div className={styles.numbers1}>3</div>
            </div>
        </div>
    )
}