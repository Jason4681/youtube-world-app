import React from 'react';
import styles from './VideoResult.css'
import { connect } from 'react-redux';

const videoResult = (props) => {
    return (
        <div className={styles.VideoResult} onClick={() => props.updatePlayer(props.embedPlayer)}>
            <img src={props.imgUrl} alt="" />
            <div className={styles.VideoDetail}>
                <div className={styles.VideoTitle}>
                    {props.title}
                </div>
            </div>
            {/* <p>{props.title}</p> */}
        </div >)
}
const mapDispatchToProps = dispatch => {
    return {
        updatePlayer: (embedPlayer) => dispatch({ type: 'NEW_VIDEO', val: embedPlayer }),

    }
}


export default connect(null, mapDispatchToProps)(videoResult);


