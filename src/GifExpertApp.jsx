import {useState} from 'react'
import { AddCategory, GifGrid } from './components'
// import { AddCategory } from './components/AddCategory'
// import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch'])

    const onAddCategory = (newCategory) => {
        // console.log(newCategory)

        if (categories.includes(newCategory)) return; //validar que no ingrese el mismo dato

        setCategories([... categories, newCategory])
        // setCategories([... categories, 'valorant'])
        // setCategories(cat => [...cat, 'valorant'])
    }

  return (
    <> 
        <h1> GifExpertApp</h1>

        {/* input */}

        <AddCategory 
            // setCategories={setCategories}
            onNewCategory= { (value) => onAddCategory(value)}
        />

        {/* listado de Gif */}        
            {
                //  se quita return
                categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category}/> 
                    ))
            }
        {/* Gif item */}
    </>
  )
}
