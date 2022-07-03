import React from 'react';

import styles from './OuterUpperWhiteBubbleComp.module.css';

import HeaderProfileInfoComp from './HeaderProfileInfoComp/HeaderProfileInfoComp';

const OuterUpperWhiteBubbleComp = (props) => {

    return (<div className={styles.outerUpperWhiteBubbleCompContainer}>
        <HeaderProfileInfoComp></HeaderProfileInfoComp>
    </div>)
}

export default OuterUpperWhiteBubbleComp;