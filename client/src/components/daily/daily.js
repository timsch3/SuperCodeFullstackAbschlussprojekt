import './daily.scss';

const Daily = () => {
    return (
        <div className="track-yom">
            <div className="track-yom-info">
                <h2>Daily Calm</h2>
                <div className="track-yom-info-line">
                    <p>APR 30</p>
                    <div className="dot-yom"></div>
                    <p>PAUSE PRACTICE</p>
                </div>
            </div>
            <div className="track-yom-play">
                <img src="/images/icons/list/play.svg" alt="" />
            </div>
        </div>
    );
}

export default Daily;