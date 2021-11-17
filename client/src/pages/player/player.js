import './player.scss';
import TopButtons from '../../components/topButtons/topButtons';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

const Player = (props) => {
    const { serverAPI } = props;
    const { id } = useParams();
    const { contentType } = useParams();
    const [trackData, setTrackData] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                if (contentType === 'yoga') {
                    setTrackData(response.yoga.filter(elt => elt.track.id === id)[0].track);
                }
                else if (contentType === 'meditation') {
                    setTrackData(response.meditation.filter(elt => elt.track.id === id)[0].track);
                }
                setIsReady(true)
            })
    }, []);  // eslint-disable-line

    const playPauseAudio = () => {
        if (!isPlaying) {
            document.getElementById('audio').play();
        }
        else if (isPlaying) {
            document.getElementById('audio').pause();
        }
    }

    if (isReady) {
        return (<div>
            <TopButtons />
            <div id={"player-container"} style={{ backgroundImage: 'url(/images/player-bg.svg)' }}>
                <h2>
                    {trackData.name}
                </h2>
                <p>
                    {trackData.album.name}
                </p>
                <img src={isPlaying ? "/images/icons/pause-circle.svg" : "/images/icons/play-circle.svg"} alt={trackData.album.name}
                    onClick={() => {
                        playPauseAudio()
                        setIsPlaying(!isPlaying)
                    }} />
                <audio id={"audio"}>
                    <source src={trackData.preview_url} type="audio/mpeg" />
                </audio>
            </div>
        </div>);

    }
    else {
        return (<div>
            <TopButtons />
            <div className="loading">
                <CircularProgress />
            </div>
        </div>);
    }

}

export default Player;