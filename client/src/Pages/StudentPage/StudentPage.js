import Header from "../../companents/Header/Header"
import Footer from '../../companents/Footer/Footer'
import style from './style.module.css';
import { Link } from 'react-router-dom';
import array from '../../Storage/course.json'


export default function StudentPage() {


    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.image}></div>
                </div>
                <div className={style.list}>
                    {
                        array.map((el) => (
                            <Link to={`/course/ ${el.id}`}>
                                <div className={style.courseContainer}>
                                    <div className={style.imageCourse1}></div>
                                    <div className={style.informationCourse}>
                                        <h2>{el.name}</h2>
                                        <p>{el.text}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                        )
                    }
                </div>
                <h1></h1>
            </div>
            <Footer />


        </>

    )
}