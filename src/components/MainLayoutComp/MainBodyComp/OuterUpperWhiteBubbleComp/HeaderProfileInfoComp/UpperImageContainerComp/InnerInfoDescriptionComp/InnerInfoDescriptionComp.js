import React from 'react';

import styles from './InnerInfoDescriptionComp.module.css';

const InnerInfoDescriptionComp = (props) => {

    return (<div className={styles.innerInfoDescriptionCompContainer}>
        <span style={{
            fontWeight: '600',
            fontSize: '1.4rem',
            marginLeft: '1.1rem'
        }}>John Nydam</span>
        <span style={{
            marginLeft: '1.1rem',
            fontSize: '1rem'
        }}>Software Engineer at Fidelity Investments</span>
        <div className={styles.workEducationRowContainer}>
            <span style={{
                marginLeft: '1.1rem',
                fontSize: '0.9rem'
            }}>Fidelity Investments</span>
            <div style={{ 
                backgroundColor: 'black',
                height: '0.2rem', 
                marginLeft: '0.3rem',
                marginRight: '0.3rem',
                width: '0.2rem', 
                borderRadius: '0.1rem' }}>
            </div>
            <span style={{fontSize: '0.9rem'}}>Brandeis University</span>
        </div>
        <span style={{
            marginLeft: '1.1rem',
            fontSize: '0.9rem',
            color: '#656566'
        }}>Merrimack, New Hampshire, United States</span>
    </div>)
}

export default InnerInfoDescriptionComp;