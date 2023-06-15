import styles from './MidldlePage.module.scss'
import { useState } from 'react'
import { v1 } from 'uuid'
import { Button } from '../../components/Button';

export function MidldlePage() {

    const [lists, setLists] = useState([v1(), v1(), v1()])
    const [selectedCheckbox, setSelectedCheckbox] = useState('');
    const [selectedRadio, setSelectedRadio] = useState('');

    const addInput = () => {
        const newList = v1()
        setLists([...lists, newList])
    }
    const removeInput = (index: string) => {
        const newList = lists.filter(list => list !== index)
        setLists([...newList])
    }

    const handleCheckboxChange = (value: string) => {
        setSelectedCheckbox(value);
    };

    const handleRadioChange = (value: string) => {
        setSelectedRadio(value);
    };

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
                    <div className={styles.subtitle}>Advantages</div>
                    <ul className={styles.input_wrapper}>
                        {lists.map(list => (
                            <li key={list}><input type="text" /><div onClick={() => removeInput(list)}></div></li>
                        ))
                        }
                    </ul>
                    <button onClick={() => addInput()} className={styles.button}>+</button>
                </div>
                <div>
                    <div>Checkbox group</div>
                    <ul className={styles.checkbox_list}>
                        <li><input type="checkbox" />1</li>
                        <li><input type="checkbox" />2</li>
                        <li><input type="checkbox" />3</li>
                    </ul>
                </div>
                <div>
                    <div>Radio group</div>
                    <ul className={styles.radio_list}>
                        <li>
                            <input
                                type="radio"
                                checked={selectedRadio === '1'}
                                onChange={() => handleRadioChange('1')}
                            />
                            1
                        </li>
                        <li>
                            <input
                                type="radio"
                                checked={selectedRadio === '2'}
                                onChange={() => handleRadioChange('2')}
                            />
                            2
                        </li>
                        <li>
                            <input
                                type="radio"
                                checked={selectedRadio === '3'}
                                onChange={() => handleRadioChange('3')}
                            />
                            3
                        </li>
                    </ul>
                </div>
                <div className={styles.button_wrapper}>
                    <Button buttonType={2} text='назад'/>
                    <Button buttonType={1} text='вперед'/>
                </div>
            </div>
        </div>
    )
}