import { useParams } from "react-router-dom"
import { useMemo, useState } from "react";
import Header from "../../companents/Header/Header";
import Footer from "../../companents/Footer/Footer";
import style from './style.module.css';
import axios from "axios";

export default function CoursePage() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [value, setValue] = useState({})
    useMemo(async () => {
        const courseData = await axios.get(`http://localhost:5000/course/${id}`)
        console.log(courseData.data);
        setValue(courseData.data[0])

        const lessonData = await axios.get(`http://localhost:5000/lesson/${id}`)
        setData(lessonData.data)
    }, [id])


    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.course}>
                    <div className={style.flex}>
                        <div className={style.img}></div>
                        <div className={style.informationCourse}>
                            <h2>{value.course}</h2>
                            <p>{value.description}</p>
                        </div>
                    </div>
                    <div className={style.btn}>Go to Course</div>
                </div>

                <div className={style.lessons}>
                    <h2>15 lessons</h2>
                    <div className={style.txtContent}>{data.map((el) => {
                        return <p>{el.title}</p>
                    })}</div>
                </div>
            </div>
            <Footer />
        </>
    )
}