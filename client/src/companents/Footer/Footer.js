import style from "./style.module.css"
import Options from './Options'
import Icons from "./Icons"

function Footer() {

    return (
        <div className={style.wrapper}>
            <div className={style.options}>
                <div>
                    <Options data={['Home', 'Textbook', 'Statistics', 'Sprint']} />
                </div>

                <div>
                    <Options data={['Alex', 'Gabriel', 'Marcus']} />
                </div>

            </div>

            <div className={style.line}></div>
            <div className={style.network}>
                <div className={style.icons}>
                    <Icons data={['style.icon1', 'style.icon2', 'style.icon3']} />
                </div>
                <p>©2021 Hschool. Project for Hschool.</p>
            </div>
        </div >
    )
}

export default Footer