import React, { useEffect } from 'react'

// import { useParams } from 'react-router';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../redux/slices/productSlice'
import { addProductCartAction, subtractProductCartAction } from '../redux/slices/cartSlice';
import CarouselContainer from '../components/CarouselContainer';
import Loader from '../components/Loader'

function ProductDetail() {
    // const [description, setDescription] = useState([])
    const params = useParams()
    const dispatch = useDispatch()
    const {productDetail, loading, error} = useSelector(store => store.products)
    const {productsCart} = useSelector(store => store.cart)

    // console.log(productDetail)

    const descArray = () => {
        let array = productDetail.description?.split('\n')
        // console.log(array)
        return array
    }
       
    useEffect(() => {
        dispatch(fetchProductDetail(params.id))
      
    }, [dispatch, params])

    // useEffect(() => {
        
    //     let descArray = productDetail.description?.split('\n')
    //     setDescription(descArray)
        
    // }, [productDetail])

    const sendProduct = () => {
        const product = {
            id: productDetail.id,
            name: productDetail.name,
            price: productDetail.price,
            imageURL: productDetail.images[0].imgURL
        }
        
        dispatch(addProductCartAction(product))
       
    }

    const getQuantity = () => {
        const item = productsCart.find(prod => prod.id === parseInt(params.id))
        // const item = productsCart
        // console.log(item, params.id)
        if (item){
            return item.quantity
        }
        else {
            return 0
        }
    }

    if(loading){
        return(
            <Loader/>
        )
    }
    else if(error){
        return(
            <div>error</div>
        )
    }
   
    return (
        <div className = 'product-detail'>
            <CarouselContainer images = {productDetail.images} />
            <div className = 'info'>
                <div className = 'product-tile'>
                    <h3>{productDetail.name}</h3>
                    <div></div>
                </div>
                <div className = 'description'>
                    {/* <h4>$ {productDetail.price}</h4> */}
                    {
                        descArray() && descArray().map((desc, i) => {
                            return(
                                <p key = {i}> {'>>'} {desc}</p>
                            )
                        })
                    }
                                   
                </div>
                <div className = 'actions-container'>
                    <div className = 'actions'>
                        <button onClick = {() => dispatch(subtractProductCartAction(productDetail.id))}>-</button>
                        <h4>{getQuantity()}</h4>
                        <button onClick = {sendProduct}>+</button>
                    </div>
                    <button 
                    onClick = {sendProduct} 
                    className = 'btn'> Añadir al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
