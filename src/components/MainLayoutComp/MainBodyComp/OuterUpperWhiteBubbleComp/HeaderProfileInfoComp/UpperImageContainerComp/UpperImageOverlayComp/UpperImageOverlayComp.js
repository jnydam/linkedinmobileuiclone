import React from 'react';
import LargeHeadshotComp from './LargeHeadshotComp/LargeHeadshotComp';
import pencilGraphic from '../../../../../../../assets/pencilicon.png';
import cameraGraphic from '../../../../../../../assets/cameraicon.png';

import styles from './UpperImageOverlayComp.module.css';

const UpperImageOverlayComp = (props) => {

    return (<div className={styles.upperImageOverlayCompContainer}>
        <div className={styles.leftSideOverlayContainer}>
            <LargeHeadshotComp></LargeHeadshotComp>
        </div>
        <div className={styles.rightSideOverlayContainer}>
            <div className={styles.cameraButtonRowContainer}>
                <div className={styles.cameraCircleContainer}>
                    <img style={{width: '60%', height: '60%'}} src={cameraGraphic}>
                    </img>
                </div>
            </div>
            <div className={styles.pencilIconRowContainer}>
                <img className={styles.pencilGraphicStyle} src={pencilGraphic}>
                </img>
            </div>
        </div>
    </div>)
}

export default UpperImageOverlayComp;