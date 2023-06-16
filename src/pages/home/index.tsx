import React from 'react'
import styles from './Home.module.scss'
import { ReactComponent as AvatarSVG } from './Avatar.svg'
import { ReactComponent as VectorSVG } from './Vector.svg'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <AvatarSVG className={styles.avatar} />
                <div className={styles.header_label}>
                    <div className={styles.name}>Иван Иванов</div>
                    <div className={styles.contacts}>
                        <ul>
                            <li><VectorSVG /><a target="_blank" href="https://t.me/polnoePogruzhenie">Telegram</a></li>
                            <li><VectorSVG /><a target="_blank" href="https://github.com/RabotaemActivno">GitHub</a></li>
                            <li><VectorSVG /><a target="_blank" href="https://kazan.hh.ru/resume/8d189563ff0bf8d6a40039ed1f376372556471">Resume</a></li>
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
                <Link to='/start'>
                    <Button buttonType={1} text='Начать' />
                </Link>
            </div>
        </div>
    )
} 