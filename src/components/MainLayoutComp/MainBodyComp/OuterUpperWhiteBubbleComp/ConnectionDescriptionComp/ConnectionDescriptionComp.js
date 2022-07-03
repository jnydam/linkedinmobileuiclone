import React from 'react';

import styles from './ConnectionDescriptionComp.module.css';

const ConnectionDescriptionComp = (props) => {

    return (<div className={styles.connectionDescriptionCompContainer}>
        <span style={{ 
            marginLeft: '1.1rem',
            color: '#0a66c0'}}>181 connections</span>
        <div className={styles.editButtonRowContainer}>
            <div style={{
                display: 'flex',
                flex: 6,
                backgroundColor: 'grey',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button className={styles.openToButtonStyle}>Open to</button>
            </div>
            <div style={{
                display: 'flex',
                flex: 6,
                backgroundColor: 'grey',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button className={styles.addSectionButtonStyle}>Add section</button>
            </div>
            <div style={{
                display: 'flex',
                flex: 2,
                backgroundColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button style={{
                    display: 'flex',
                    outlineStyle: 'none',
                    borderStyle: 'none',
                    height: '2.5rem',
                    width: '2.5rem',
                    borderRadius: '1.25rem',
                    border: '1px solid #838383',
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

        </div>
    </div>)
}

export default ConnectionDescriptionComp;