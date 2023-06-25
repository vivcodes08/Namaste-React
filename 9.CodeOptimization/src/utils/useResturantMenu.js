import React ,{useState,useEffect} from 'react';
import { MENU_URL } from './constants';

function useResturantMenu(id) {
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        getResDataByID(id)
    },[])


    async function getResDataByID(id){
        const response=await fetch(MENU_URL+id)
        let data = await response.json();
        const filter_data=data.data.cards[0].card.card.info
        setResInfo(filter_data)
    }


    return resInfo;
  

}

export default useResturantMenu