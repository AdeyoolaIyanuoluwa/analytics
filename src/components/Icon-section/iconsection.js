import "./iconsection.scss"

const IconSection = ({ icon, title, subtitle}) => {
    return(
        <div className="container">
                    <img className="image" src={icon} alt="" />
                    <h6 className="title">{title}</h6>
                    <p className="subtitle">{subtitle}</p>
                </div>
    )
}

export default IconSection

















