import { useState } from "react";
import TableExercices from "./TableExercices";

function SectionRutine(props) {
    const [showAll, setShowAll] = useState(false);

    const displayCount = showAll ? props.exercices.length : 2;


    return (  
        <div className="card__rutinas" key={props.id}>
            <div className="card__rutinas__text">
                <h1 className="card_title">Nombre usuario: {props.name}</h1>
                <h4 className="card__subtitle">Nombre rutina: {props.rutinaname}</h4>
            </div>

            {
                props.exercices.slice(0, displayCount).map(element => (
                    <TableExercices key={element.id} id={element.id} dia={element.dia} muscle={element.muscle} ejercicios={element.ejercicios} />
                ))
            }

             <div className="boton_contianer">

             
            {props.exercices.length > 2 && (
                <button className="boton__section" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Mostrar menos" : "Mostrar todo"}
                </button>
            )}
            </div>
            
        </div>

    );
}

export default SectionRutine;