function CardCulturista(props) {
    return (  
        <div className="card__culturista__other">                
            <div className="img__container">
                <img  className="card__img" src={props.picture} alt="" />
            </div>

            <div className="text__container">
                <div className="item1">
                    <span>{props.name}</span>                     
                </div>

                <div className="item2">
                    <span>Agregador por: </span>                     
                    <span >{props.nameuser}</span>                                         
                </div>                

                <div className="item3">
                    <span>Peso: {props.weight}</span>
                </div>

                <div className="item4">
                    <span>Estatura: {props.height}</span>
                </div>

                <div className="item5">
                    <span>Competiciones: {props.competitions}</span>
                </div>                
                                                                             
            </div>


        </div>        
    );
}

export default CardCulturista;
