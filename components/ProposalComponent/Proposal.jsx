// import redirect from ""
"use client";
import { useState } from "react";
import styles from "./Proposal.module.css"
import { redirect } from "next/navigation";

export function Proposal() {
    const [position, setPosition] = useState({ top: 415, left: 750 });

    const moveButton = () => {
        const randomTop = Math.floor(Math.random() * 500);
        const randomLeft = Math.floor(Math.random() * 500);

        setPosition({
        top: randomTop,
        left: randomLeft,
        });
    };

    return (
        <main className={styles.main}>
            <p className={styles.header1}> ✦ A QUESTION FOR MY BEATIFUL BUBBY ✦ </p>

            <h1 className={styles.header2}>
                Will you be my <span className={styles.valentineWord}>Valentine?</span>
            </h1>

            <p className={styles.message1}>
                I would love to spend the day with the <span> most amazing person on mundo mundial 💕 </span>
            </p>

            <div className={styles.buttonContainer}>
                <button className={styles.yesButton} onClick={() => redirect("/agenda")}>YES! 💕</button>
                <button
                    className={styles.noButton}
                    onMouseEnter={moveButton}
                    style={{
                        top: position.top,
                        left: position.left,
                    }}
                >
                    NO :(
            </button>
            </div>

        </main>      
    );
}