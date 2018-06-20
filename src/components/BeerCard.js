import React from 'react'
import './BeerCard.css'

// arrow function in a variable
const BeerCard = ({
  id,
  name,
  image_url,
  description,
  handleDelete
    }) => {
  return <div key={id} className="card">
        <div className="card-title">
          <h2>{name}</h2>
        </div>
        <div className="card-body">
          <img src={image_url} alt={name}/>
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <button  onClick={()=>{handleDelete(id)}} className="btn btn-danger">Delete</button>
        </div>
      </div>
}

// // first class function
// function BeerCard(props) {
//     return <div key={props.id} className="card">
//         <div className="card-title">
//           <h2>{props.name}</h2>
//         </div>
//         <div className="card-body">
//           <img src={props.image_url} alt={props.name}/>
//           <p>{props.description}</p>
//         </div>
//       </div>
// }

// // anonymous function in a variable
// const BeerCard = function(props) {
//      return <div key={props.id} className="card">
//         <div className="card-title">
//           <h2>{props.name}</h2>
//         </div>
//         <div className="card-body">
//           <img src={props.image_url} alt={props.name}/>
//           <p>{props.description}</p>
//         </div>
//       </div> 
// }
export default BeerCard