import React from 'react';
import LowerTabComp from './LowerTabComp/LowerTabComp';
import MainBodyComp from './MainBodyComp/MainBodyComp';

import styles from './MainLayoutComp.module.css';

import UpperNavBarComp from './UpperNavBarComp/UpperNavBarComp';

const MainLayoutComp = (props) => {

    return (<div className={styles.mainLayoutCompContainer}>
        <UpperNavBarComp></UpperNavBarComp>
        <MainBodyComp></MainBodyComp>
        <LowerTabComp></LowerTabComp>
    </div>)
}

export default MainLayoutComp;