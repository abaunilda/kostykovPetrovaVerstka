import styles from "./Hero.module.css"

function Hero() {

    return (
        <>
            <section>
                <div className={styles.container}>
                    <div className={styles.HeroBox}>
                        <div className={styles.title}>
                            <h1>SURVINE AT ALL COSTS</h1>
                            <p>EXPERIENCE NEW SOCIAL BATTLE ROYALE GAME</p>
                            <div className={styles.ctabtn}>
                                <a href="/">
                                    <div className={styles.HeroBtn}>
                                        <span>Buy now on Steam</span>
                                        <div className={styles.line}></div>
                                        <span>$14.99</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <button>
                            <span>THE STORY</span>
                            <span><img src="/Img/scrollDown.svg" alt="" /></span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
