import './contentSearch.scss'

const ContentSearch = (props) => {

    const { data } = props

    console.log(data)

    return (
        <div className="content-search">
            {data.map((elt) => (
                <div className="content-search-card">
                    <h2>{elt.track.name}</h2>
                    <img src={elt.track.album.images[0].url}></img>
                </div>
            ))}
        </div>
    );
}

export default ContentSearch;