import '../../assets/styles/components/carousel.scss'

export default function Carousel({children}){
    return(
        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section>
    )
}