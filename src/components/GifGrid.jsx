// import { useState,useEffect } from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  
    // Custom Hook
    const {images, isLoading } = useFetchGifs (category);
    

    // const [images, setImages] = useState([])

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages)
    // }

    // useEffect ( () => {
    //     getImages(); 
    // }, [] )


    return (
    <>
        <h3> {category} </h3>
        {
            isLoading && (<h2> Cargando ...</h2>)
        }
        <div className="card-grid">
            {
                images.map( (image) => ( 
                    <GifItem
                        key={image.id}
                         // title={image.title} url={image.url }
                         // pasa todo como propiedades
                        { ...image} 
                    />
                ))
            }
        </div>
    </>
  )
}
