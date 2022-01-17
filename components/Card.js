import React from "react"
export default function Card (props) {
    return (
        <div>
        <div className="CardContainer">
            <img src={props.p.image} className="fuji"/>
            <div className="info-Container">
                <div className="info-FirestLine">
                <i className="fas fa-map-marker-alt location"></i>
                <span className="info-Japan">{props.p.location}</span>
                <a href={props.p.googleMapsUrl} className="info-link">View on Google Maps</a>
                </div>
                <div className="info-SecondLine">{props.p.title}</div>
                <div className="info-Date">
                    <span>{props.p.startDate} -</span>
                    <span> {props.p.endDate}</span>
                </div>
                    <p className="info-Paragraph">
                {props.p.description}
            </p>
            </div>
        </div>
        <div className="card-BorderLine"></div>  
        </div>
    )
}