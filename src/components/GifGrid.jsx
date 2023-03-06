import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } =   useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        {isLoading  && (<h2>Cargando...</h2>)}
        <ol>
            {
                images.map( ( image ) => (
                    <>
                        {/* <li key={info.id}>{info.title}</li> */}
                        <GifItem key={image.id} {...image}></GifItem>
                    </>
                ))
            }
        </ol>
        </>
    )
}