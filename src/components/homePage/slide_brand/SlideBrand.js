import React, {useEffect, useState} from 'react';
import './SlideBrand.scss';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {Navigation} from 'swiper/modules';
import {Link} from "react-router-dom";
import BrandService from "../../service/BrandService";
import _ from "lodash";

const SlideBrand = () => {
    const [brandList, setBrandList] = useState([]);
    useEffect(() => {
        BrandService.getAllB1rand().then((res) => {
            console.log(res.data);
            setBrandList(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [])

    return (
        <div className={'container container-brand '}>
            <div className="container-brand-body ">
                <div className={'main-brand-body'}>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3} spaceBetween={10}>
                        {!_.isEmpty(brandList) && brandList.map(brand => {
                            return (
                                <div className="col-lg-4 col-md-6 main-brand" key={brand.id}>
                                    <SwiperSlide className="brand-item border rounded overflow-hidden">
                                        <Link to={`/brand-detail`} className="nav-link">
                                            <div className="position-relative overflow-hidden">
                                                <div>
                                                    <img style={{height: '300px', width: '100%'}} src={brand.image}
                                                         alt="thumbnail"/>
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
    );
};

export default SlideBrand;