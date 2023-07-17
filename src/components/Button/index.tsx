import styles from './Button.module.scss'

type PropsType ={
    onClick?: ()=> void
    text: string
    buttonType: 1 | 2
}

export function Button ({onClick, text, buttonType}:PropsType) {
    return (
        <button onClick={onClick} className={buttonType===1 ? styles.button_1 : styles.button_2}>{text}</button>
    )
}

