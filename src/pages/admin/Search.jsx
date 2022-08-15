import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { getAll } from '../../features/actions/libros';



export default function Search(){

    const dispatch = useDispatch();
    const [titulo, setTitulo] = useState('');

    function handleSearch(e) {
        e.preventDefault();
        setTitulo('');
        setTitulo(e.target.value);
    }
    function handleEnter(e){
        if (e.key === "Enter"){
            handleSubmit(e);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!titulo){
            alert('Please, enter a name')
        } else{
            dispatch(getAll(`titulo=${titulo}`));
            setTitulo('');
            
            
        }
    }

    return(
        <div className="lg:max-w-[548px] w-full mx-auto border rounded-md">
            <div >
                <input  className=" text-sm leading-none text-gray-600 bg-white  rounded  w-full px-10 py-5 outline-none"
                type='text' placeholder={'Buscar libro...'}
                value={titulo} onKeyPress={handleEnter} 
                onChange={(e) => handleSearch(e)}
                />
                <button  type='Submit' 
                onClick={(e) =>handleSubmit(e)}
                >Search</button>
            </div>
        </div>
    )
}