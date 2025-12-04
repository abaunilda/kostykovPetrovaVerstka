import styles from "./Header.module.css"

function Header() {

    return (
        <>
            <header className={styles}>
                <div className={styles.container}>
                    <div className={styles.header_box}>
                        <a href="/">
                            <img className={styles} src="/Img/logo.png" alt="" loading="lazy" />
                        </a>
                        <nav>
                            <ul>
                                <a href="/"><li>MAIN</li></a>
                                <a href="/"><li>ABOUT</li></a>
                                <a href="/"><li>GAME FEATURES</li></a>
                                <a href="/"><li>SYSTEM REQUIREMENTS</li></a>
                                <a href="/"><li>QUOTES</li></a>
                            </ul>
                        </nav>
                        <div className={styles.header_right}>
                            <div className={styles.lang}>
                                <a href="/">ENG</a>
                                <a href="/"><img src="/Img/lang_arr.svg" alt="" /></a>
                            </div>
                            <div className={styles.line}></div>
                            <a href="/"><img className={styles.icon} src="/Img/steam_icon.svg" alt="" /></a>
                            <a href="/"><img className={styles.icon} src="/Img/xbox_icon.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
