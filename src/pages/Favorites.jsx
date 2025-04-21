import React, { useEffect, useState } from 'react';
import PhonesCard from '../Components/PhonesCard';
import { getFavorites, removeFavorite } from '../Utils';
import EmptyState from '../Components/utility/EmptyState';

const Favorites = () => {
        const [displayPhones,setDisplayPhones]=useState([])
    useEffect(() =>{
        const savedPhones=getFavorites()
        setDisplayPhones(savedPhones)
    },[])

    const handleDelete = id =>{
        removeFavorite(id)
        setDisplayPhones(getFavorites())
    }

    if (displayPhones.length <1) {
        return <EmptyState></EmptyState>
    }

    return (
        <div>
            <div className='py-12'>
            <div className='grid py-8 md:grid-cols-2 grid-cols-1 gap-6 lg:grid-cols-3'>
                {
                    displayPhones.map(phone => <PhonesCard key={phone.id} phone={phone} deletable={true} handleDelete={handleDelete}></PhonesCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Favorites;