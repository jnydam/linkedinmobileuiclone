import React from 'react';

import styles from './UpperImageContainerComp.module.css';

import linkedInBackgroundGraphic from '../../../../../../assets/linkedinbackimage.svg';
import UpperImageOverlayComp from './UpperImageOverlayComp/UpperImageOverlayComp';

const UpperImageContainerComp = (props) => {

    return (<div className={styles.upperImageContainerCompStyle}>
        <UpperImageOverlayComp></UpperImageOverlayComp>
        <div className={styles.linkedinBackgroundImageContainer}>
            <img style={{width: '100%', height: '100%', transform: 'scaleX(1.6) scaleY(1.3'}} src={linkedInBackgroundGraphic}>
            </img>
        </div>
    </div>)
}

export default UpperImageContainerComp;