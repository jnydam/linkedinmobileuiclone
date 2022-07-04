import React from 'react';

import styles from './LargeHeadshotComp.module.css';

import nydamHeadshotGraphic from '../../../../../../../../assets/nydamHeadshot.jpeg';

import SmallPlusCircleComp from '../SmallPlusCircleComp/SmallPlusCircleComp';

const LargeHeadshotComp = (props) => {

    return (<div className={styles.largeHeadshotCompContainer}>
        <img className={styles.headshotGraphicStyle} src={nydamHeadshotGraphic}>
        </img>
        <SmallPlusCircleComp></SmallPlusCircleComp>
    </div>)
}

export default LargeHeadshotComp;