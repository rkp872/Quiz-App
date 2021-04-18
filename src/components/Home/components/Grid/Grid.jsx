import './Grid.css'
import InfoCard from '../InfoCard/InfoCard'
import { Description_1, Description_2,Description_3, Description_4, Title_1, Title_2, Title_3, Title_4 } from '../InfoCard/InfoCard_Detail'
import onthego from './images/onthego.jpg'
import onlinequiz from './images/onlinequiz.jpg'
import launching from './images/launching.jpg'
import forum from './images/forum.jpg'



function Grid(){

    return(
        
            <div className="main-container">
                <h1 className="logo">QUIZ UP</h1>
                    <div className="container">
                        <div className="row">
                            <InfoCard Pic = {onthego} Text={Title_1} Subtext={Description_1}/>
                            <InfoCard Pic = {onlinequiz} Text={Title_2} Subtext={Description_2}/>
                        </div>
                    </div>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <InfoCard Pic = {launching} Text={Title_3} Subtext={Description_3}/>
                            <InfoCard Pic = {forum} Text={Title_4} Subtext={Description_4}/>
                        </div>
                    </div>
                    <br/> <br/>
            </div>
           
    );

}

export default Grid;