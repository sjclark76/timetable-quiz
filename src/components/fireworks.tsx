import React from 'react';
import styles from  './fireworks.module.css';

const Fireworks: React.FC = () => {
    return (

        < >
            <div className={styles.firework}></div>
            <div className={styles.firework}></div>
            <div className={styles.firework}></div>
            <div className={styles.firework}></div>
            <div className={styles.firework}></div>
        </>
    );
};

export default Fireworks;