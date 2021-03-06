import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsPartsCard = ({service}) => {

const navigate = useNavigate()


const purchaseHandeal = () =>{
  navigate('/purchase')
}

    return (
        <div class="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={service.image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {service.name}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    
    <p>{service.description}</p>
    <h2 className='text-xl font-bold'> Oder Quantity:{service.oderquantity}</h2> 
      <h2 className='text-xl font-bold'> Available Quantity:{service.availableQuantity}</h2> 
      <h2 className='text-xl font-bold'> Price: {service.price}</h2> 
    <div class="card-actions justify-end">
      
    <button onClick={purchaseHandeal} class="btn btn-primary">Order</button>
    </div>
  </div>
</div>
    );
};

export default ToolsPartsCard;