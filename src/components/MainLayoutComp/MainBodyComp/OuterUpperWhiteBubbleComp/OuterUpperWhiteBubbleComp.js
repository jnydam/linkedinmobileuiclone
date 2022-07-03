import React from 'react';

import styles from './OuterUpperWhiteBubbleComp.module.css';

import HeaderProfileInfoComp from './HeaderProfileInfoComp/HeaderProfileInfoComp';
import ConnectionDescriptionComp from './ConnectionDescriptionComp/ConnectionDescriptionComp';

const OuterUpperWhiteBubbleComp = (props) => {

    return (<div className={styles.outerUpperWhiteBubbleCompContainer}>
        <HeaderProfileInfoComp></HeaderProfileInfoComp>
        <ConnectionDescriptionComp></ConnectionDescriptionComp>
    </div>)
}

export default OuterUpperWhiteBubbleComp;