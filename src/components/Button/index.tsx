import styles from './Button.module.scss'

type PropsType ={
    text: string
    buttonType: 1 | 2
}

export function Button ({text, buttonType}:PropsType) {
    return (
        <button className={buttonType===1 ? styles.button_1 : styles.button_2}>{text}</button>
    )
}