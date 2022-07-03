import React from 'react';

import styles from './MainBodyComp.module.css';

import OuterUpperWhiteBubbleComp from '../MainBodyComp/OuterUpperWhiteBubbleComp/OuterUpperWhiteBubbleComp';
import OuterLowerWhiteBubbleComp from '../MainBodyComp/OuterLowerWhiteBubbleComp/OuterLowerWhiteBubbleComp';


const MainBodyComp = (props) => {

    return (<div className={styles.mainBodyCompContainer}>
        <OuterUpperWhiteBubbleComp></OuterUpperWhiteBubbleComp>
        <OuterLowerWhiteBubbleComp></OuterLowerWhiteBubbleComp>
    </div>)
}

export default MainBodyComp;