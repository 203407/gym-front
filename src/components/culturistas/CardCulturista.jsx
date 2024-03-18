function CardCulturista(props) {
    return (  
        <div className="card__culturista__other">                
            <div className="img__container">
                <img  className="card__img" src={props.picture} alt="" />
            </div>

            <div className="text__container">
                <div className="item1">
                    <span className="sp__cult">{props.name}</span>                     
                </div>

                <div className="item2">
                    <span className="sp__cult">Agregador por: </span>                     
                    <span className="sp__cult" >{props.nameuser}</span>                                         
                </div>                

                <div className="item3">
                    <span className="sp__cult">Peso: {props.weight}</span>
                </div>

                <div className="item4">
                    <span className="sp__cult">Estatura: {props.height}</span>
                </div>

                <div className="item5">
                    <span className="sp__cult">Competiciones: {props.competitions}</span>
                </div>                
                                                                             
            </div>


        </div>        
    );
}

export default CardCulturista;
