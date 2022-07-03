import React from 'react';

import styles from './UpperNavBarComp.module.css';

import leftArrowIconGraphic from '../../../assets/leftarrowicon.png';
import gearGraphic from '../../../assets/gearicon.png';
import searchIconGraphic from '../../../assets/searchicon.png';

const UpperNavBarComp = (props) => {

    return (<div className={styles.upperNavBarCompContainer}>
        <div className={styles.leftImageContainer}>
            <img className={styles.leftArrowImageStyle} src={leftArrowIconGraphic}>
            </img>
        </div>
        <div className={styles.outerInputContainer}>
            <div className={styles.outerInputBoxContainer}>
                <img className={styles.searchIconStyle} src={searchIconGraphic}>
                </img>
                <input className={styles.inputStyle}>
                </input>
            </div>
        </div>
        <div className={styles.outerGearContainer}>
            <img className={styles.gearGraphicImageStyle} src={gearGraphic}>
            </img>
        </div>
    </div>)
}

export default UpperNavBarComp;