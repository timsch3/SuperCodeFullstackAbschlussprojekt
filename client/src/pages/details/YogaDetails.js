import './details.scss'
import Titel from '../../components/titel/titel'

const YogaDetail = () => {
    return (
        <div>
            <Titel />
            <section>
                <img className="yogaDetail__icon" src="/images/yoga.png" alt=""></img>
                <img className="yogaDetail__icon" src="/images/icons/arrow-back.svg" alt=""></img>
                <img className="yogaDetail__icon" src="/images/icons/list/heart.svg" alt=""></img>
                <img className="yogaDetail__icon" src="/images/icons/download.svg" alt=""></img>
            </section>
            <h1>Healty Back</h1>
            <p>BEGINNER</p>
            <p> Ease the mind into a restful night’s sleep  with
                these deep, amblent tones.</p>
            <img className="yogaDetail__icon" src="/images/icons/favorites.svg" alt=""></img>
            <p>[XXX]Favorits</p>
            <img className="yogaDetail__icon" src="/images/icons/listening.svg" alt=""></img>
            <p>[XXX]Listening</p>



        </div>
    );
}

export default YogaDetail;