import styles from './Dropdown.module.scss';
import { useState } from 'react';

type DropdownState = {
    title: string;
    isOpen: boolean;
};

export function Dropdown() {
    const class1 = styles.dropdown_content;
    const class2 = styles.dropdown_content_active;
    const [dropdownState, setDropdownState] = useState<DropdownState>({
        title: 'Выберете пол',
        isOpen: false,
    });

    const onClickHandler = () => {
        setDropdownState((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
        }));
    };

    const onOptionClick = (value: string) => {
        setDropdownState((prevState) => ({
            ...prevState,
            title: value,
            isOpen: false,
        }));
    };

    return (
        <div className={styles.dropdown}>
            <button onClick={onClickHandler}>{dropdownState.title}</button>
            <div className={`${class1} ${dropdownState.isOpen ? class2 : ''}`}>
                <div className={styles.dropdown_content_wrapper}>
                    <div onClick={() => onOptionClick('man')}>
                        <span>man</span>
                    </div>
                    <div onClick={() => onOptionClick('woman')}>
                        <span>woman</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
