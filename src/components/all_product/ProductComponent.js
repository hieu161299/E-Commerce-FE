import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ProductService} from "../service/ProductService";

const ProductComponent = () => {
    const {brandName} = useParams();
    const [productList , setProductsList] = useState([]);
    const [productName , setProductName] = useState('');
    const [minPrice , setMinPrice] = useState(0);
    const [maxPrice , setMaxPrice] = useState(0);
    const [brandSearch , setBrandSearch] = useState('');
    const [categoryName , setCategoryName] = useState('');
    const [color , setColor] = useState('');

    useEffect(() => {
          if (brandName === 'allProduct'){
              getAllProduct(productName , minPrice , maxPrice , brandSearch , categoryName , color);
          }else {
              getAllProduct(productName , minPrice , maxPrice , brandName , categoryName , color);
          }
    },[]);

   const getAllProduct = (productName , minPrice , maxPrice , brandSearch , categoryName , color) => {
        ProductService.getAllProducts(productName , minPrice , maxPrice , brandSearch , categoryName , color).then((res) => {
            console.log(res.data.content);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>

        </div>
    );
};

export default ProductComponent;