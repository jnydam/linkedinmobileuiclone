import React from 'react';
import LowerTabComp from './LowerTabComp/LowerTabComp';
import MainBodyComp from './MainBodyComp/MainBodyComp';

import styles from './MainLayoutComp.module.css';

import UpperNavBarComp from './UpperNavBarComp/UpperNavBarComp';

const MainLayoutComp = (props) => {

    return (
    <React.Fragment>
    <div className={styles.mainLayoutCompContainer}>
        <UpperNavBarComp></UpperNavBarComp>
        <MainBodyComp></MainBodyComp>
        <LowerTabComp></LowerTabComp>
    </div>
    <div className={styles.mainLayoutCompContainerLarge}>
         <div style={{
             width: '50%'
         }}>
             <span style={{display: 'flex'}}>
                Looks like your screen size is a little too big
                for this project.
             </span>

             <span style={{
                 display: 'flex',
                 marginTop: '1.5rem'
             }}>
             Since this user interface is designed for mobile,
             please resize the screen roughly at or below 700 px width.
             </span>
             <span style={{
                 display: 'flex',
                 marginTop: '1.5rem'
             }}>
                You could achieve this by either resizing your browser window or view this site on a mobile device.
             </span>

         </div>
    </div>
    </React.Fragment>)
}

export default MainLayoutComp;