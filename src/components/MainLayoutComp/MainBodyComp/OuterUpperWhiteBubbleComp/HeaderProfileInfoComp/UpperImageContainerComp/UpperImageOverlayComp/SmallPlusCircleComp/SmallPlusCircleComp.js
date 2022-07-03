import React from 'react';

import styles from './SmallPlusCircleComp.module.css';

const SmallPlusCircleComp = (props) => {

    return (<div className={styles.smallPlusCircleCompContainer}>
        <div className={styles.innerPlusContainer}>
            <span style={{marginBottom: '0.15rem'}}>+</span>
        </div>
    </div>)
}

export default SmallPlusCircleComp;