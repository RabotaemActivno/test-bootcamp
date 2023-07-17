import React from 'react';
import styles from './Home.module.scss';
import { ReactComponent as AvatarSVG } from './Avatar.svg';
import { ReactComponent as VectorSVG } from './Vector.svg';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import yupResolver from '@hookform/resolvers'
import { addEmail, addNumber } from '../../state/formSlice';
import { useFormik } from 'formik';



const schema = yup.object({
    number: yup
        .string()
        // .matches(/^\+\d{1,3} \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'напиши нормально')
        .required('обязательное поле'),
    email: yup
        .string()
        .email('Неверный формат email')
        .required('Обязательно заполните email'),
});




export function Home() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { number, email } = useSelector((store: any) => store.form)


    const formik = useFormik({
        initialValues: {
            number: '',
            email: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(addNumber(values.number))
            dispatch(addEmail(values.email))
        }
    })

    useEffect(() => {
        formik.setValues({ number: number, email: email })
    }, [number, email])

    const handleButtonClick = () => {
        if (formik.errors.email || formik.errors.number) {
            return
        } else {
            formik.handleSubmit()
            navigate('/start')
        }
    }

    return (
        <div className={styles.root}>
            <div>
                <div className={styles.header}>
                    <AvatarSVG className={styles.avatar} />
                    <div className={styles.header_label}>
                        <div className={styles.name}>Иван Иванов</div>
                        <div className={styles.contacts}>
                            <ul>
                                <li>
                                    <VectorSVG />
                                    <a target="_blank" href="https://t.me/polnoePogruzhenie">
                                        Telegram
                                    </a>
                                </li>
                                <li>
                                    <VectorSVG />
                                    <a target="_blank" href="https://github.com/RabotaemActivno">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <VectorSVG />
                                    <a
                                        target="_blank"
                                        href="https://kazan.hh.ru/resume/8d189563ff0bf8d6a40039ed1f376372556471"
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.main}>
                    <div className={styles.input_wrapper}>
                        <form>
                            <div className={styles.input_field}>
                                <span>Номер телефона</span>
                                <input
                                    id='number'
                                    name='number'
                                    type='number'
                                    value={formik.values.number}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange} />
                                {formik.touched.number && formik.errors.number ? <div className={styles.error_message}>{formik.errors.number}</div> : null}
                            </div>
                            <div className={styles.input_field}>
                                <span>Email</span>
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            </div>
                        </form>
                    </div>
                    <Button
                        onClick={handleButtonClick}
                        buttonType={1}
                        text="Начать"
                    />
                </div>
            </div>
        </div>
    );
}
