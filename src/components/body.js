import { Component } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import Categories from "./body.categories";
import SingleProduct from "./productPage/singleProduct";


import ProductCart from './cart'

class Body extends Component {

    render(){
        return(
            <Routes>
                <Route path="/" element={<Navigate to={'/all'} />} />
                {this.props.categories.map((category, i) => {
                    return(
                        <Route key={i} path={`/${category.name}`} element={<Categories category={category.name} />} />
                    )
                })}
                
                {this.props.categories.map((category, i) => {
                    return  category.products.map((product, i) => {
                                return(
                                    <Route key={i} path={`/${product.category}/${product.id}`} element={<SingleProduct product={product} />} />
                                )
                            })
                        })}
                    <Route path="/cart" element={<ProductCart />} />
            </Routes>
        )
    }
}




export default Body