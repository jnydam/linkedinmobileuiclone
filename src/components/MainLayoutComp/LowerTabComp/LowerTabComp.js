import React from 'react';

import styles from './LowerTabComp.module.css';

import homeGraphic from '../../../assets/homegraphic.png';
import friendGraphic from '../../../assets/friendtabicon.png';
import plusGraphic from '../../../assets/plustabicon.png';
import bellGraphic from '../../../assets/bellnotificationtab.png';
import suitCaseGraphic from '../../../assets/suitcasetabicon.png';

const LowerTabComp = (props) => {

    return (<div className={styles.lowerTabCompContainer}>
        <div className={styles.lowerTabDivisionContainer}>
            <img
                src={homeGraphic} 
                style={{display: 'flex', height: '60%', marginLeft: '0.2rem'}}
                alt="home tab">
            </img>
            <span
                style={{
                    fontSize: '0.7rem',
                    color: '#838383'}}    
            >Home</span>
        </div>
        <div className={styles.lowerTabDivisionContainer}>
            <img
                src={friendGraphic} 
                style={{display: 'flex', height: '60%'}}
                alt="network tab">
            </img>
            <span 
                style={{
                    fontSize: '0.7rem',
                    color: '#838383'}}
                >My Network</span>
        </div>
        <div className={styles.lowerTabDivisionContainer}>
            <img alt="post tab"
                src={plusGraphic} 
                style={{display: 'flex', height: '60%'}}
            >
            </img>
            <span 
                style={{
                    fontSize: '0.7rem',
                    color: '#838383'}}
                >Post</span>
        </div>
        <div className={styles.lowerTabDivisionContainer}>
            <img
                src={bellGraphic} 
                style={{display: 'flex', height: '60%'}}
            alt="bell tab">
            </img>
            <span 
                style={{
                    fontSize: '0.7rem',
                    color: '#838383'}}
                >Notifications</span>
        </div>
        <div className={styles.lowerTabDivisionContainer}>
            <img
                src={suitCaseGraphic} 
                style={{display: 'flex', height: '60%'}}
            alt="job tab">
            </img>
            <span 
                style={{
                    fontSize: '0.7rem',
                    color: '#838383'}}
                >Jobs</span>
        </div>
    </div>)
}

export default LowerTabComp;