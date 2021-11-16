import './player.scss'
import TopButtons from '../../components/topButtons/topButtons'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import serverAPI from '../../app/App'

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                setDataY(response.yoga)
                setIsReady(true)
            })
    }, [])

    console.log(useParams())

    return (<div>
        <TopButtons />
        <div id="player-container">
            <h2>
                { }
            </h2>
        </div>
    </div>);
}

export default Player;