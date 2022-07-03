import React from 'react';

import styles from './HighlightBubbleComp.module.css';

const HighlightBubbleComp = (props) => {

    return (<div className={styles.highlightBubbleCompContainer}>
        <div className={styles.headerHorizontalCompContainer}>

        </div>
        <span>
            Make it easier for recruiters to find you by showing
            where and how you used your skills
        </span>
        <button>
            <span>Edit experience</span>
        </button>
    </div>)
}

export default HighlightBubbleComp;