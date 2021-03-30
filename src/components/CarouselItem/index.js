import playIcon from '../../assets/images/play-icon.png'
import plusIcon from '../../assets/images/plus-icon.png'
import '../../assets/styles/components/categorieItem.scss'

export default function CarouselItem({cover, title, year, contentRating, duration}){
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                    <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    )
}