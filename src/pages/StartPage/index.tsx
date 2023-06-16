import styles from './StartPage.module.scss'
import { Button } from '../../components/Button'
import { Dropdown } from '../../components/Dropdown'
import { Link } from 'react-router-dom'

export function StartPage() {
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
            <div>
                <div className={styles.field_wrapper}>
                    <div>Nickname</div>
                    <input type="text" />
                </div>
                <div className={styles.field_wrapper}>
                    <div>Name</div>
                    <input type="text" />
                </div>
                <div className={styles.field_wrapper}>
                    <div>Sername</div>
                    <input type="text" />
                </div>
                <div className={styles.dropdown_wrapper}>
                    <div className={styles.subtitle}>Sex</div>
                    <Dropdown />
                </div>
                <div className={styles.button_wrapper}>
                    <Link to='/'>
                        <Button text='назад' buttonType={2} />
                    </Link>
                    <Link to='/middle'>
                        <Button text='вперед' buttonType={1} />
                    </Link>
                </div>
            </div>
        </div>
    )
}