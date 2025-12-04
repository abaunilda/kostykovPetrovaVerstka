import styles from "./Requirements.module.css"

function Requirements() {

    return (
        <>
            <section>

                <div className={styles.ReqBox}>
                    <div className={styles.container}>
                        <div className={styles.Reqtitle}>
                            <span>CAN MY COMPUTER RUN THIS GAME?</span>
                            <h2>SYSTEM REQUIREMENTS</h2>
                        </div>
                        <table class={styles.specsTable}>
                            <tr>
                                <td class={styles.category}>OS:</td>
                                <td class={styles.requirements}>
                                    Windows 7 64-bit only 
                                </td>
                            </tr>
                            <tr>
                                <td class={styles.category}>MEMORY:</td>
                                <td class={styles.requirements}>8 GB RAM</td>
                            </tr>
                            <tr>
                                <td class={styles.category}>GRAPHICS:</td>
                                <td class={styles.requirements}>
                                    NVIDIA GeForce GTX 660 2GB or
                                        AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
                                </td>
                            </tr>
                            <tr>
                                <td class={styles.category}>PROCESSOR:</td>
                                <td class={styles.requirements}>
                                    Intel Core 2 Duo @ 2.4 GHZ or
                                        AMD Athlon X2 @ 2.8 GHZ
                                </td>
                            </tr>
                            <tr>
                                <td class={styles.category}>STORAGE:</td>
                                <td class={styles.requirements}>8 GB available space</td>
                            </tr>
                        </table>



                    </div>

                </div>
            </section>
        </>
    )
}

export default Requirements
