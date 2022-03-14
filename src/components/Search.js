import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { fetchProductByName } from '../redux/slices/productSlice'

function Search() {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        name 
            ? dispatch(fetchProductByName(name))
            : console.log('')
        
    }
  
    return (
        <form action="" className = 'search-section' onSubmit = {submitHandler}>
            <input type="text" placeholder = 'Search' value = {name} onChange = {(e) => setName(e.target.value)} />
            <button className = 'search-btn'><FaSearch/> Buscar</button>
        </form>
    )
}

export default Search
