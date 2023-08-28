import style from './style.module.css'

function Preview() {
    return (
        <div >
            <div className={style.preview}>
        <div className={style.info}>
          <p className={style.ecourse}>E-COURSE PLATFORM</p>
          <h1>Learning and teaching online, made easy.</h1>
          <p className={style.text}>
            Any subject, in any language, on any device, for all ages!
          </p>
          <div className={style.btnAbout}>About platform</div>
          <div className={style.statistic}>
            <div>
              <div className={style.thunder}></div>
              <div>
                600<span>+</span>
              </div>
            </div>
            <p>students</p>
          </div>
        </div>
        <div className={style.image}></div>
      </div>
            <div className={style.wrapperBCG} >
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
            <div className={style.knowledge}>
                <div className={style.knowledgeText}>
                    <h1>Increase your knowledge</h1>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <div className={style.buttonKNLG}>Textbook →</div>
                </div>
                <div className={style.knowledgeImg}></div>
            </div>
            <div className={style.progress}>
                <div className={style.progressImg}></div>
                <div className={style.progressText}>
                    <h1>Watch your progress every day</h1>
                    <p>Save statistics on your achievements and mistakes</p>
                    <div className={style.buttonPRG}>Statistics →</div>
                </div>
            </div>
        </div>
    )
}



export default Preview