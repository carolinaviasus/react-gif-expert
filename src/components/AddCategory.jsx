import { useState } from "react"

export const AddCategory = ( {onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();  //para que no se refresque la ventana
        if(inputValue.trim().length <= 1) return;
        // categories => [...categories, inputValue]);
        setInputValue('');
        onNewCategory(inputValue.trim())
    }

    return (
    <form onSubmit={ onSubmit }>

        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>

  )
}
