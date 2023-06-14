import styles from './StartPage.module.scss'
import { Button } from '../../components/Button'
import { Dropdown } from '../../components/Dropdown'

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
                    <Dropdown/>
                </div>
                <div className={styles.button_wrapper}>
                    <Button text='назад' buttonType={2} />
                    <Button text='вперед' buttonType={1} />
                </div>
            </div>
        </div>
    )
}