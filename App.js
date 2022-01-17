import React from "react"
import Nav from  "./components/Nav"
import Card from "./components/Card"
import data from "./data"
export default function App () {
    const dataArray = data.map (p=>{
        return (
        <Card 
        
        key={p.id} //Object as prop
        p={p}
        // image={p.image}
        // location={p.location}
        // googleMapsUrl={p.googleMapsUrl}
        // title={p.title}
        // startDate={p.startDate}
        // endDate={p.endDate}
        // description = {p.description}
        />
        )
    })
    return (
        <div className="Page">
        <Nav/>
        {dataArray}
        </div>
    )
}