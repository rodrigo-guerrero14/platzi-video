import '../../assets/styles/components/categories.scss'

export default function Categories({title, children}){
    return (
        <div>
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>
    )
}