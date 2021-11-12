import './contentSection.scss'

const ContentSection = (props) => {
    return (
        <div id={'content-container'}>
            <h2>{props.title}</h2>
            <div id={'content-cards-container'}>
                {props.contentData.map((elt, key) => {
                    return (
                        <div className={'content-card'} key={key}>
                            <img src={elt.track.album.images[0].url} alt={elt.track.name} />
                            <h3>{elt.track.name}</h3>
                            <p>{(elt.track.duration_ms * 0.000016666666666667).toFixed(0)} MIN</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default ContentSection;