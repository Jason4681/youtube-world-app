import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './VideoPlayer.css';


class videoPlayer extends Component {
    componentDidMount() {
        document.getElementById("youtube-player").scrollIntoView({ behavior: 'smooth' })
    }
    render() {
        let extractedURL = null;
        if (this.props.activeVideo) {
            extractedURL = this.props.activeVideo.match(/src="([^"]+)"/)[1];
        }
        return (
            <div id='youtube-player' className={styles.VideoPlayer}>
                <iframe className={styles.YoutubeVid} title="Youtube Player"
                    src={extractedURL}
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                </iframe>

            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        activeVideo: state.activeVideo,
    };
}

export default connect(mapStateToProps)(videoPlayer);