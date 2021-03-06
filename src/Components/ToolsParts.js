import React, { useEffect, useState } from 'react';
import ToolsPartsCard from './ToolsPartsCard';

const ToolsParts = () => {




    const [services, setService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data))
    } ,[])




    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:p-10'>
            {
                services.slice(0, 4).map(service => <ToolsPartsCard
                key={service._id}
                service={service}
                
                
                
                >

                    


                </ToolsPartsCard>)
            }


        </div>
    );
};

export default ToolsParts;