import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/utility/Button';
import { MdBookmarkAdd,MdShoppingCartCheckout } from "react-icons/md";
import { addFavorite } from '../Utils';

const PhoneDetails = () => {
    const data =useLoaderData()

    const {id} = useParams()

    const singlePhone =data.find(phone => phone.id===parseInt(id))

    const {name,model,image,brand,storage,price,camera_info,description} =singlePhone || {}
    
    const handleFavorite = () =>{
        addFavorite(singlePhone)
    }
    
    return (
        <div className='w-full py-12'>
            <img className='w-full  md:w-auto mx-auto mb-8' src={image} alt="" />

        <div className="flex justify-between">
            <h1 className='text-6xl font-thin mb-8'>{name}</h1>
            <div className='space-x-4'>
                 <Button label={<MdShoppingCartCheckout />}></Button>
                <Button onClick={handleFavorite} label={<MdBookmarkAdd />}></Button> 
            </div>
        </div>
        <div className='space-y-3'>
        <p>
          <span className='font-bold'>Brand:</span> {brand}
        </p>
        <p>
          <span className='font-bold'>Model:</span> {model}
        </p>
        {/* Storage Info */}
        <div className='flex gap-1'>
          <p className='font-bold'>Storage:</p>
          <div>
            {storage.map(item => {
              return (
                <div key={item}>
                  <div>{item}</div>
                </div>
              )
            })}
          </div>
        </div>
        {/* Price info */}
        <div className='flex gap-1'>
          <p className='font-bold'>Price:</p>
          <div>
            {Object.entries(price).map(([storage, price]) => (
              <p key={storage} className=''>
                <span>{storage}:</span> <span>{price}</span>
              </p>
            ))}
          </div>
        </div>
        <p>
          <span className='font-bold'>Camera Info:</span> {camera_info}
        </p>
        <p>
          <span className='font-bold'>Description:</span> {description}
        </p>
        </div>
        </div>
    );
};

export default PhoneDetails;