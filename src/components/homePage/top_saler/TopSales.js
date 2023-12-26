import React, {useEffect, useState} from 'react';
import './TopSales.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import _ from "lodash";
import {ProductService} from "../../service/ProductService";
import {Link} from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {formatCurrency} from "../../../fomat/Format";

const TopSales = () => {
    const [topSales, setTopSales] = useState([]);
    useEffect(() => {
        ProductService.getTop5().then((res) => {
            console.log(res.data);
            setTopSales(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className={'row'}>

            <div className={'container container-sales mb-5 '}>
                <div className="container-sales-body ">
                    <div className={'main-sales-body'}>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3} spaceBetween={20}>
                            {!_.isEmpty(topSales) && topSales.map(sale => {
                                return (
                                    <div className="col-lg-4 col-md-6 main-sales" key={sale.id}>
                                        <SwiperSlide className="sales-item border rounded overflow-hidden">
                                            <Link to={`/sales-detail`} className="nav-link">
                                                <div className="position-relative overflow-hidden">
                                                   <div className={'row d-flex justify-content-center mb-3'}>
                                                       <div className={'sales-item-content '}>
                                                           <img style={{height: '200px', width: '100%'}} src={sale.thumbnail}
                                                                alt="thumbnail"/>
                                                       </div>
                                                   </div>
                                                    <div className={'row sales-item-data'}>
                                                        <h5 className=" text-center text-truncate">{sale.name}</h5>
                                                        <h5 className="  color-primary text-center text-danger">
                                                            {formatCurrency(sale.price - sale.price * sale.sale / 100)}
                                                            {sale.sale ?
                                                                <del className="text-secondary ms-3 fs-6">
                                                                    {formatCurrency(sale.price)}
                                                                </del>
                                                                :
                                                                null
                                                            }
                                                        </h5>

                                                    </div>
                                                </div>

                                            </Link>
                                        </SwiperSlide>
                                    </div>
                                )
                            })
                            }

                        </Swiper>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default TopSales;