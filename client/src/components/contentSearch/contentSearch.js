import './contentSearch.scss'
import { Link } from 'react-router-dom';

const ContentSearch = (props) => {

    const { contentData } = props

    return (
        <div className="content-search">
            {contentData.map((elt, i) => (
                <Link to={`/player/${props.contentType}/${elt.track.id}`} key={i} >
                    <div className="content-search-card">
                        <h2>{elt.track.name}</h2>
                        <img src={elt.track.album.images[0].url} alt={elt.track.album.name} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ContentSearch;