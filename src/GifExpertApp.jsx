import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(
        [ 'Pokemon' ]
    );

    const onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory) ) return;
        
        setcategories( [newCategory, ...categories]);
        //categories.push(newCategory);
        //console.log(newCategory);
    }

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
            //setcategories = { setcategories }
            onNewValue = { onAddCategory }
        />

        { categories.map( categories => (
            <GifGrid key= { categories } category={ categories }/>
        ))}            

    </>
  )
}

