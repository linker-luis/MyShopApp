import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import { fetchCategories } from '../redux/slices/categorySlice'
import { fetchProductByCategory, fetchProductList } from '../redux/slices/productSlice'
import Loader from './Loader'
import Search from './Search'

function Sidebar() {
    const [link, setLink] = useState(0)
    const dispatch = useDispatch()
    const {categories, loading, error} = useSelector(store => store.category)
    // const params = useParams()
    // const location = useLocation()
    // const category = new URLSearchParams(location.search).get('category')

    let cat

    if(loading){
        cat = (<Loader/>)
    }
    else if(error){
        cat = error
    }
    else {
        cat = (
            <ul className = 'categories'>
                        <li                             
                            className = {link === 0 ? 'category activeLink' : 'category'}
                            
                            onClick = {() => {dispatch(fetchProductList()); setLink(0)}}
                        >Todos</li>
                        {
                            categories.map(cat => (
                                <li 
                                    key = {cat.id} 
                                   
                                    className = {link === cat.id ? 'category activeLink' : 'category'}
                                    // onClick = {(e) => console.log(e.target)}
                                    onClick = {() => {dispatch(fetchProductByCategory(cat.name));
                                    setLink(cat.id)}}
                                >{cat.name}</li>
                            ))
                        }
                                                
                    </ul>
        )
    }

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    // console.log(params, location, category)
   
    return (
        <div className = 'sidebar'>
            <div className = 'sidebar-container'>
                
                <Search/>
                
                <div className = 'category-section'>
                    <h4>Categoria</h4>
                    {
                        cat
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar
