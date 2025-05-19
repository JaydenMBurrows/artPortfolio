
function Card(props) {
    let relUrl = '../src/assets/' + props.url + '.png';

    return(
        <div>
            <img src={relUrl} alt={props.desc} className="cardDisplay"></img>
        </div>
    );
}

export default Card