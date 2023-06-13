import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import './GallerySection.css'

const GallerySection = () => {
    return (
        <div className='bg-color'>
            <div className='text-two display-2 text-center text-white my-3 py-3 px-4'>Some award winning photographs of our students</div>
            {/* gallery section */}
            <div style={{ maxWidth: "1200px" }} className="mx-auto pb-5">
                <div className="row w-100 mx-auto">
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div data-aos="fade-up-right" data-aos-duration="1000">
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://i.postimg.cc/0jpKMtfq/reinhart-julian-Wx-M465o-M4j4-unsplash.jpg"
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Talented Eye: Pascal Sourav's Captivating Photography!
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div
                            data-aos="fade-up-left"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                        >
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://i.postimg.cc/vHgSj5mw/robert-lukeman-RBcxo9-AU-U-unsplash.jpg"
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Talented Sayed: Awe-inspiring Photography at its Finest!
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                        >
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://t4.ftcdn.net/jpg/00/65/59/31/240_F_65593151_wNDwyzYbqBbh5ExMMCjyr7Ghr9sq1h3o.jpg"
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Discover Brilliance: John's Talented Lens Paints a Captivating Picture!
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div data-aos="zoom-out" data-aos-duration="1000">
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://i.postimg.cc/GtsJMJxM/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg"
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Embark on a Visual Journey: Larry's Talented Eye Transforms Moments into Art!
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/bc941b167779807.Y3JvcCwyODc2LDIyNTAsNDQxLDA.jpg"
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Artistry Unleashed: Kamal's Talented Lens Captures the Essence of Beauty!
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-6 mx-auto p-3">
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                        >
                            <img
                                className="img-fluid rounded-3 img-border-custom"
                                src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/954ebe168687425.Y3JvcCwxMzgwLDEwODAsMTMsMA.jpg"
                                alt="kid with lego"
                            />
                            <div className="text-white">
                                Through the Lens of Genius: Safoun's Talented Eye Reveals Visual Marvels!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;