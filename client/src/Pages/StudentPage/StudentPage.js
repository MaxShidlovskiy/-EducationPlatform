import Header from "../../companents/Header/Header"
import Footer from '../../companents/Footer/Footer'
import style from './style.module.css';
import { Link } from 'react-router-dom';
// import array from '../../Storage/course.json'
import { useState, useEffect } from "react";
import axios from 'axios';

function StudentPage() {

    const [elements, setElements] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => sendData(), [currentPage]);

    async function sendData() {
        const data = await axios.get("http://localhost:5000/course/")
        console.log(data.data);
        setElements(data.data)
    }

    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.image}></div>
                </div>
                <div className={style.list}>
                    {
                        elements.map((el) => (
                            <Link to={`/course/ ${el.id}`}>
                                <div className={style.courseContainer}>
                                    <div className={style.imageCourse1}></div>
                                    <div className={style.informationCourse}>
                                        <h2>{el.course}</h2>
                                        <p>{el.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Footer />


        </>

    )
}

export default StudentPage