import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import array from "../../Storage/course.json"
import Header from "../../companents/Header/Header"
import Footer from "../../companents/Footer/Footer";

export default function CoursePage() {
    const { id } = useParams();
    const [elem, setElem] = useState({});
    useEffect(() => {
        const curElem = array.filter((el) => el.id === id)
        setElem(curElem[0])
    }, [id])
    return (
        <>
            <Header />
            <div className={style.container}>
                
            </div>
            <Footer></Footer>
        </>
    )
}