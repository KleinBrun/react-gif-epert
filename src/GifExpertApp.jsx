import { useState } from "react";
import { AddCategory , GifGrid } from "./components";

const GifExpertApp = () => {
    const [categories   , setCategories ] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory))return;
        // setCategories (cat =>[...categories,'Dragon Ball']);
        setCategories ([newCategory,...categories]);
    }

    return (
        <>
        <h1>Gifs</h1>
        <AddCategory 
            onNewCategory= {(value) => onAddCategory(value)}
        />
        {
            categories.map( ( category ) => (
                <GifGrid key={category} category={category}/>
            ))
        }
        </>
    )
}

export default GifExpertApp
