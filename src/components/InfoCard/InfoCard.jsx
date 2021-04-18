import './InfoCard.css'

function InfoCard(props){

    return(
        <div className="col-6">
            <div className="card">
              <div className="single-content" >
               <img src={props.Pic} alt="Image"/>
                <div className="text-content">
                  <p className="card-text"><strong>{props.Text}</strong></p>
                  <p className="SubText">{props.Subtext}</p>
                </div>
              </div>
            </div>
        </div>
    );
}

export default InfoCard;