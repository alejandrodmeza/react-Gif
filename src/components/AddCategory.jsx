import { useState } from 'react';

export const AddCategory = ({ onNewValue }) => {
    const [inputValue, setinputValue] = useState('One Punch Man');

    let valorinput;

    const onInputChage = ({target}) =>{
        setinputValue(target.value);
        //console.log(setcategories);
    }

    const enviarValor = (e) => {
        e.preventDefault();
        if(inputValue.trim() === "") return;
        //setcategories(categorias => [inputValue, ...categorias]);
        onNewValue(inputValue.trim());
        setinputValue('');
    }

    return (
        <>
            <form onSubmit={ enviarValor }>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={ onInputChage}
                />
            </form>
        </>
    )
}
