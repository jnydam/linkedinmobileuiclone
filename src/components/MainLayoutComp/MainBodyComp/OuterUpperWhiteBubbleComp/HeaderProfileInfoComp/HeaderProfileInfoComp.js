import React from 'react';

import styles from './HeaderProfileInfoComp.module.css';
import InnerInfoDescriptionComp from './UpperImageContainerComp/InnerInfoDescriptionComp/InnerInfoDescriptionComp';
import UpperImageContainerComp from './UpperImageContainerComp/UpperImageContainerComp';

const HeaderProfileInfoComp = (props) => {

    return (<div className={styles.headerProfileInfoCompContainer}>
        <UpperImageContainerComp></UpperImageContainerComp>
        <InnerInfoDescriptionComp></InnerInfoDescriptionComp>
    </div>)
}

export default HeaderProfileInfoComp;