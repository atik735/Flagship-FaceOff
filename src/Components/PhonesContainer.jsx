import React, { useEffect, useState } from 'react';
import PhonesCard from './PhonesCard';
import Button from './utility/Button';

const PhonesContainer = ({phones}) => {

    const [displayPhones,setDisplayPhones]=useState([])

    const [showAll,setShowAll]=useState(false);

    useEffect(() =>{

        if (showAll) {
            setDisplayPhones(phones)
        }
        else{
            setDisplayPhones(phones.slice(0,6))
        }

    },[phones,showAll])

    // console.log(phones);
    
    return (
        <div className='py-12'>
            <div className='grid py-8 md:grid-cols-2 grid-cols-1 gap-6 lg:grid-cols-3'>
                {
                    displayPhones.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
<Button onClick={()=>{
                setShowAll(prv =>!prv)
                if (showAll) {
                    window.scrollTo(0,450)
                }
                }} label={showAll?"Show Less":"Show All"}></Button>
    </div>
    );
};

export default PhonesContainer;