import style from './style.module.css'

function Preview() {
    return (
        <div >
            <div className={style.preview}>
                <div className={style.previewInfo}>
                    <p className={style.previewAbout}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.textInfo}>Any subject, in any language, on any device, for all ages!</p>
                </div>
                <div className={style.previewImg}></div>
            </div>

            <div className={style.language}>
                <div className={style.imgLanguage}></div>
                <div className={style.information}>
                    <h1>Learn a language in a playful way</h1>
                    <p>Make learning programming languages more fun with mini-games</p>
                    <div className={style.btnImgs}>
                        <div className={style.imgSprint}></div>
                        <div className={style.imgTasks}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Preview