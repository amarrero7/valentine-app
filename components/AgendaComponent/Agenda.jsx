import styles from "./Agenda.module.css"
import Image from "next/image";

export function Agenda() {

    return (
        <main className={styles.main}>
            <p className={styles.header1}> 🥰 </p>

            <h1 className={styles.header2}>
                Yupiiiiiiiiiii
            </h1>

            <p className={styles.message1}>
                Here is an agenda for the day... 💕
            </p>

            <Image 
                src="/valsDayAgenda.png"
                alt="Valentines Day Agenda"
                width={500}
                height={600}
                className={styles.imageStyle}
            />
        </main>      
    );
}