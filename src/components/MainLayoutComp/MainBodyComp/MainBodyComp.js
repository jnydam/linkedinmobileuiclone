import React from 'react';

import styles from './MainBodyComp.module.css';

import OuterUpperWhiteBubbleComp from '../MainBodyComp/OuterUpperWhiteBubbleComp/OuterUpperWhiteBubbleComp';

const MainBodyComp = (props) => {

    return (<div className={styles.mainBodyCompContainer}>
        <OuterUpperWhiteBubbleComp></OuterUpperWhiteBubbleComp>
    </div>)
}

export default MainBodyComp;