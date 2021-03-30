import '../../assets/styles/components/search.scss'

export default function Search(){
    const placeHolder = "Buscar"

    return(
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input className="main__input" type="text" placeholder={placeHolder}></input>
        </section>
    )
}