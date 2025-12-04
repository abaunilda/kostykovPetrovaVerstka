import styles from "./Features.module.css"

function Features() {

    return (
        <>
            <section>

                <div className={styles.FeaturesBox}>
                    <div className={styles.container}>
                        <div className={styles.textArea}>
                            <span>WHAT'S SO SPECIAL?</span>
                            <h2>FEATURES</h2>
                            <div className={styles.textCont}>
                                <div className={styles.txtDescription}>
                                    <div className={styles.block}>
                                        <span>SURVIVE AT ALL COSTS</span>
                                        <p>
                                            You have  30 minutes to find a relic, signal
                                            for extraction, and grab one of three spots
                                            on the rescue chopper
                                        </p>
                                    </div>
                                    <span>CREATE ALLIES AND ENEMIES</span>
                                </div>
                                <span>IMPRESS THE AUDIENCE</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Features
