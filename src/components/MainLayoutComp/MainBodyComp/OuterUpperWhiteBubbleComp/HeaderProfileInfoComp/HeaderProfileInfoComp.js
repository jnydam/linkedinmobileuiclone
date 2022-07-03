import React from 'react';

import styles from './HeaderProfileInfoComp.module.css';
import UpperImageContainerComp from './UpperImageContainerComp/UpperImageContainerComp';

const HeaderProfileInfoComp = (props) => {

    return (<div className={styles.headerProfileInfoCompContainer}>
        <UpperImageContainerComp></UpperImageContainerComp>
    </div>)
}

export default HeaderProfileInfoComp;