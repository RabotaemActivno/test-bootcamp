import { Button } from '../../components/Button'
import styles from './EndPage.module.scss'
import { Link } from 'react-router-dom'

export function EndPage() {
    return (
        <div className={styles.root}>
            <div>
                <div className={styles.progressLine_line}></div>
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
            <div className={styles.field_wrapper}>
                <div>About</div>
                <textarea name="" id="" cols={30} rows={10}></textarea>
            </div>
            <div className={styles.button_wrapper}>
                <Link to='/middle'>
                    <Button buttonType={2} text='назад' />
                </Link>
                <Button buttonType={1} text='отправить' />
            </div>
        </div>
    )
} 