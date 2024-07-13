import Challenge from "./Challenge";
import 'bootstrap/dist/css/bootstrap.min.css';
function ChallengeList({challenges}){
    return(
       <div className="list-group">
            {challenges.map(challenge =>(
                
                <Challenge key={challenge.id}
                challenge={challenge}/>

            ))}
            
       </div>
    );

}

export default ChallengeList;