import React from 'react';

import styles from './HighlightBubbleComp.module.css';

import pencilGraphic from '../../../../../assets/pencilrulericon.png'

const HighlightBubbleComp = (props) => {

    return (<div className={styles.highlightBubbleCompContainer}>
        <div className={styles.headerHorizontalCompContainer}>
            <img style={{height: '100%'}} src={pencilGraphic}>
            </img>
            <span style={{
                marginLeft: '0.5rem',
                fontWeight: 'bold'
            }}>
                Highlight your skills from Fidelity
                Investments
            </span>
        </div>
        <span style={{
            fontSize: '0.9rem',
            marginTop: '0.3rem',
            width: '85%'
        }}>
            Make it easier for recruiters to find you by showing
            where and how you used your skills
        </span>
        <button style={{
            marginTop: '0.7rem',
            fontFamily: 'inherit',
            height: '1.7rem',
            backgroundColor: 'white',
            width: '9rem',
            outlineStyle: 'none',
            borderRadius: '1rem',
            border: '1px solid #838383',
        }}>
            <span
                style={{
                    color: '#838383',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                }}>Edit experience</span>
        </button>
    </div>)
}

export default HighlightBubbleComp;