import './contentSection.scss';
import { Link } from 'react-router-dom';

const ContentSection = (props) => {
    const { title } = props;
    return (
        <div id={'content-container'}>
            <h2>{title}</h2>
            <div id={'content-cards-container'}>
                {props.contentData.map((elt, key) => {
                    return (
                        <div className={'content-card'} key={key}>
                            <Link to={`/player/${elt.track.id}`}>
                                <img src={elt.track.album.images[0].url} alt={elt.track.name} />
                                <h3>{elt.track.name}</h3>
                                <p>{(elt.track.duration_ms * 0.000016666666666667).toFixed(0)} MIN</p>
                            </Link>

                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default ContentSection;