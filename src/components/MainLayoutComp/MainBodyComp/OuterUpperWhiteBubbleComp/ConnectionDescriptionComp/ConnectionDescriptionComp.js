import React from 'react';

import styles from './ConnectionDescriptionComp.module.css';

import xButtonGraphic from '../../../../../assets/xicon.png';

const ConnectionDescriptionComp = (props) => {

    return (<div className={styles.connectionDescriptionCompContainer}>
        <span style={{ 
            marginLeft: '1.1rem',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: '#0a66c0'}}>181 connections</span>
        <div className={styles.editButtonRowContainer}>
            <div style={{
                display: 'flex',
                flex: 6,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button className={styles.openToButtonStyle}>Open to</button>
            </div>
            <div style={{
                display: 'flex',
                flex: 6,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button className={styles.addSectionButtonStyle}>Add section</button>
            </div>
            <div style={{
                display: 'flex',
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button style={{
                    display: 'flex',
                    outlineStyle: 'none',
                    borderStyle: 'none',
                    height: '2.2rem',
                    width: '2.2rem',
                    borderRadius: '1.1rem',
                    border: '1px solid #838383',
                    backgroundColor: 'white',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className={styles.smallDottedButtonStyle}></div>
                    <div className={styles.smallDottedButtonStyle}></div>
                    <div className={styles.smallDottedButtonStyle}></div>
                </button>
            </div>
        </div>
        <div className={styles.findClientsInnerBubbleContainer}>
            <p style={{width: '85%'}}>
                <strong>Find potential clients</strong> by showcasing
                the services you provide
            </p>
            <span style={{
                marginTop: '0.3rem',
                color: '#0a66c0',
                fontWeight: 'bold'}}>Get started</span>
            <img src={xButtonGraphic} className={styles.xButtonGraphicStyle}>
            </img>
        </div>
    </div>)
}

export default ConnectionDescriptionComp;