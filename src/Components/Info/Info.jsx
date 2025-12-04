import styles from "./Info.module.css"

function Info() {

    return (
        <>
            <section>

                <div className={styles.InfoBox}>
                    <div className={styles.container}>
                        <div className="textArea">
                            <span>WHAT IS SOS?</span>
                            <h2>SOCIAL BATTLE <br />
                                ROYALE GAME</h2>
                            <div className={styles.line}></div>
                            <div className={styles.txtDescription}>
                                <p>
                                    Each round, you and 15 other contestants <br />
                                    compete to escape a deadly island filled <br />
                                    with monsters. The trick is: three people <br />
                                    can survive. Will you run solo or form <br />
                                    friendships with others to escape? <br />
                                </p>
                                <p>
                                    Making the right decisions could be <br />
                                    the difference between life and death.
                                </p>
                            </div>
                        </div>
                        <div className={styles.sliderBlock}>
                            
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Info
