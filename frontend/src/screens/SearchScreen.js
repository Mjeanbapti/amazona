import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';

export default function SearchScreen(props) {
    const { name = 'all', category='all' } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const { loading: loadingCategories, error: errorCategories, categories} = productCategoryList;
    const getFilterUrl= (filter) => {
        const filterCategory =filter.category || category;
        const filterName =filter.name || name;
        return `/search/category/${filterCategory}/name/${filterName}`;
    };

    useEffect(() => {
        dispatch(listProducts({ name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '' }));
    }, [dispatch, name, category]);
    return (
        <div>
            <div className="row">
                {loading ? (<LoadingBox></LoadingBox>)
                    :
                    error ? (<MessageBox></MessageBox>)
                        : (
                            <div>
                                {products.length} Results
                            </div>
                )}
            </div>
            <div className="row top">
                <div className="col-1">
                    <h3>Department</h3>
                    {loadingCategories ? (<LoadingBox></LoadingBox>)
                    :
                    errorCategories ? (<MessageBox>{errorCategories}</MessageBox>)
                    :(
                    <ul>
                        <li>
                            {categories.map(c => (
                                <li key={c}>
                                    <Link className= {c === category? 'active': ''} to={getFilterUrl({category:c})}>{c}</Link>
                                </li>
                            ))}
                        </li>
                    </ul>
                    )}
                    
                </div>
                <div className="col-3">
                    {loading ? (<LoadingBox></LoadingBox>)
                        :
                        error ? (<MessageBox></MessageBox>)
                            : (
                                <div>
                                    <>
                                        {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
                                        <div className="row center">
                                            {products.map((product) => (
                                                <Product key={product._id} product={product}></Product>
                                            ))}
                                        </div>
                                    </>
                                </div>
                            )}
                </div>
            </div>
        </div>
    );
}