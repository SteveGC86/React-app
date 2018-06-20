import React from 'react'
import './BeerCard.css'

// arrow function in a variable
const BeerCard = ({id, name, imageUrl, description}) => {
  return <div key={id} className="card">
        <div className="card-title">
          <h2>{name}</h2>
        </div>
        <div className="card-body">
          <img src={imageUrl} alt={name}/>
          <p>{description}</p>
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