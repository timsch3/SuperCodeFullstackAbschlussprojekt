import './daily.scss';

import { useState } from 'react';

const Daily = (props) => {
    const { data } = props;
    const [trackData, setTrackData] = useState(data);
    const [isPlaying, setIsPlaying] = useState(false);

    const playPauseAudio = () => {
        if (!isPlaying) {
            document.getElementById('audio').play();
        }
        else if (isPlaying) {
            document.getElementById('audio').pause();
        }
    }

    return (
        <div className="track-yom">
            <div className="track-yom-info">
                <h2>{trackData.name}</h2>
            </div>
            <div className="track-yom-play">
                <img src={isPlaying ? "/images/icons/list/pause.svg" : "/images/icons/list/play.svg"} alt=""
                    onClick={() => {
                        playPauseAudio()
                        setIsPlaying(!isPlaying)
                    }} />
            </div>
            <audio id={"audio"}>
                <source src={trackData.preview_url} type="audio/mpeg" />
            </audio>
        </div>
    );
}

export default Daily;