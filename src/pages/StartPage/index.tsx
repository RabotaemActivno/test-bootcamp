import styles from './StartPage.module.scss'
import { Button } from '../../components/Button'
import { Dropdown } from '../../components/Dropdown'
import { Link } from 'react-router-dom'
import { ScrollTotop } from '../../functions/ScrollTotop'
import { useFormik } from 'formik/dist/Formik'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { addNickName, addName, addSerName, addSex } from '../../state/formSlice'

export function StartPage() {
    ScrollTotop()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { nickName, name, serName, sex } = useSelector((state: any) => state.form)

    const formik = useFormik({
        initialValues: {
            nickName: '',
            name: '',
            serName: '',
            sex: '',
        },
        onSubmit: values => {
            dispatch(addNickName(values.nickName))
            dispatch(addName(values.name))
            dispatch(addSerName(values.serName))
            dispatch(addSex(values.sex))
        }
    })

    useEffect(() => {
        formik.setValues({ nickName, name, serName, sex })
    }, [nickName, name, serName, sex])

    const onClickSubmit = () => {
        const { errors } = formik;

        if (Object.values(errors).some(error => error)) {
            return
        } else {
            formik.handleSubmit()
            navigate('/middle')
        }
    }


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
                    <input
                        id='nickName'
                        name='nickName'
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nickName} />
                </div>
                <div className={styles.field_wrapper}>
                    <div>Name</div>
                    <input
                        id='name'
                        name='name'
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name} />
                </div>
                <div className={styles.field_wrapper}>
                    <div>Sername</div>
                    <input
                        id='serName'
                        name='serName'
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.serName} />
                </div>
                <div className={styles.dropdown_wrapper}>
                    <div className={styles.subtitle}>Sex</div>
                    <Dropdown />
                </div>
                <div className={styles.button_wrapper}>
                    <Link to='/'>
                        <Button text='назад' buttonType={2} />
                    </Link>
                    <Button onClick={onClickSubmit} text='вперед' buttonType={1} />
                </div>
            </div>
        </div>
    )
}