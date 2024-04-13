/* eslint-disable react/prop-types */
export default function Section(props){
    return(
        <div className="container">
            <section className="left">
                <img src={`../images/${props.item.img}`} alt="location photo" className="section--photo"/>

            </section>
            <section className="right">
                <div className="location">
                    <img src="./location-point.png" alt="location point" />
                    <p className="location--name">{props.item.country}</p>
                    <a href={props.item.link}>View on Google Maps</a>
                </div>
                <h1 className="location--title">{props.item.title}</h1>
                <h4 className="date">{props.item.date}</h4>
                <p className="description">{props.item.description}</p>
                

            </section>

        </div>
    )
}