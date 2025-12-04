import styles from "./Subscribe.module.css"

function Subscribe() {

    return (
        <>
            <section>

                <div className={styles.SubscribeBox}>
                    <div className={styles.container}>
                        <img src="/Img/BgSubimage.png" alt="BgSubimage" />
                        <div className={styles.SubCont}>
                            <div className={styles.title}>
                                <span>WANT TO STAY IN TOUCH?</span>
                                <h2>NEWSLETTER SUBSCRIBE</h2>
                                <p>
                                    In order to start receiving our news,
                                    all you have to do is enter your email address.
                                    Everything else will be taken care of by us.
                                    We will send you emails containing information about game.
                                    We don’t spam.
                                </p>
                            </div>
                            <div className={styles.ctabtn}>
                                <a href="/">
                                    <div className={styles.HeroBtn}>
                                        <span>Subscribe now</span>
                                    </div>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe
