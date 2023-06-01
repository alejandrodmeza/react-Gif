import { useState, useEffect } from "react";
import { getGifs } from "../helpers/gifs";

export const useFetchGifs = (category) => {
    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async() =>{
        const getImg = await getGifs(category);
        setImagenes(getImg);
        setisLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [] );

    return { 
        Imagenes: imagenes,
        isLoading: isLoading
    }  
}
