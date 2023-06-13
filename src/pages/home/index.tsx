import React from 'react'
import styles from './Home.module.scss'
import { ReactComponent as AvatarSVG } from './Avatar.svg'
import { ReactComponent as VectorSVG } from './Vector.svg'
import { Button } from '../../components/Button'

export function Home() {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <AvatarSVG className={styles.avatar} />
                <div className={styles.header_label}>
                    <div className={styles.name}>Иван Иванов</div>
                    <div className={styles.contacts}>
                        <ul>
                            <li><VectorSVG /><a href="/">Telegram</a></li>
                            <li><VectorSVG /><a href="/">GitHub</a></li>
                            <li><VectorSVG /><a href="/">Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.main}>
                <div className={styles.input_wrapper}>
                    <div className={styles.input_field}>
                        <span>Номер телефона</span>
                        <input type="text" />
                    </div>
                    <div className={styles.input_field}>
                        <span>Email</span>
                        <input type="text" />
                    </div>
                </div>
                <Button buttonType={1} text='Начать'/>
            </div>
        </div>
    )
} 