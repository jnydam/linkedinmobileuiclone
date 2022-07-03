import React from 'react';

import styles from './OuterLowerWhiteBubbleComp.module.css';

import eyeGraphic from '../../../../assets/eyeicon.png';
import HighlightBubbleComp from './HighlightBubbleComp/HighlightBubbleComp';

const OuterLowerWhiteBubbleComp = (props) => {

    return (<div className={styles.outerLowerWhiteBubbleCompContainer}>
        <span style={{
            fontWeight: 'bold',
            fontSize: '1.4rem',
            marginTop: '0.5rem',
            marginLeft: '1.1rem'
        }}>Suggested for you</span>
        <div className={styles.privateToYouRowContainer}>
            <img style={{
                height: '1.3rem', 
                marginLeft: '1.1rem',

            }} src={eyeGraphic}></img>
            <span
                style={{
                    color: '#656566',
                    marginLeft: '0.2rem',
                    fontSize: '0.9rem'
                }}>Private to you</span>
        </div>
        <HighlightBubbleComp></HighlightBubbleComp>

    </div>)
}

export default OuterLowerWhiteBubbleComp;