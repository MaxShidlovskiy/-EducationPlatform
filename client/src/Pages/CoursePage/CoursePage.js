import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import array from "../../Storage/course.json"
import Header from "../../companents/Header/Header"
import Footer from "../../companents/Footer/Footer";
import style from './style.module.css';


export default function CoursePage() {
    const { id } = useParams()
    const [value, setValue] = useState({})
    useEffect(() => {
        const currentEl = array.filter((el) => el.id === id)
        setValue(currentEl[0])
    }, [id])

    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.course}>
                    <div className={style.flex}>
                        <div className={style.img}></div>
                        <div className={style.informationCourse}>
                            <h2>{value.name}</h2>
                            <p>{value.text}</p>
                        </div>
                    </div>
                    <div className={style.btn}>Go to Course</div>
                </div>

                <div className={style.lessons}></div>
            </div>
            <Footer />
        </>
    )
}