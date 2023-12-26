import React from 'react';
import './Banner.scss';
const Banner = () => {

    return (
            <div style={{height: '700px'}}>
                <div className="container-fluid mb-5 pt-100 d-flex justify-content-center container-banner">
                    <div className="row col-12 border-top px-xl-5"  >
                        <div className=" mt-4" >
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="1000">
                                        <img
                                            src="https://img.freepik.com/premium-vector/end-season-summer-sale-banner-with-photo_16148-1226.jpg"
                                            className="d-block w-100 img-banner" alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img
                                            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/258417769/original/92f82ed031171c1a0322acd3a37772bc37c735be/amazing-banner-design-for-ads.jpg"
                                            className="d-block w-100 img-banner" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="https://www.hongha.com.vn/Upload/images/banner-01.png"
                                            className="d-block w-100 img-banner" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Banner;