import { Bookmark } from "lucide-react";
const Card = (props) => {
    console.log(props)
  return (
    <>
       <div className="cardwrapper">
  {props.job.map(function(elem) {
        return ( <div className="card" key={elem.companyName}>
          <div className="top">
            <h1>{elem.companyName}</h1>
          <Bookmark size={20} />
          </div>
          <div className="middle">
 <h3>{elem.post}</h3>
 <h4>{elem.datePosted}</h4>
 <h4>{elem.location}</h4>
 <h4>{elem.pay}</h4>
          </div>
         
        </div>  
        )      
      })}
  </div> 
    </>
  )
}

export default Card
