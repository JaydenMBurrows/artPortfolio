
function Card(props) {

    return(
        <div>
            <img src={props.url} alt={props.desc} className="cardDisplay"></img>
        </div>
    );
}

export default Card
