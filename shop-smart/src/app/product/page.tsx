import React from 'react';
import styles from '@/styles/components/ProductDetailv2.module.scss';

const ProductSlider = () => {
    const slides = [
        "https://pagedone.io/asset/uploads/1700472379.png",
        "https://pagedone.io/asset/uploads/1711622397.png",
        "https://pagedone.io/asset/uploads/1711622408.png",
        "https://pagedone.io/asset/uploads/1711622419.png",
        "https://pagedone.io/asset/uploads/1711622437.png",
    ];

    const thumbnails = [
        "https://pagedone.io/asset/uploads/1700472379.png",
        "https://pagedone.io/asset/uploads/1700472430.png",
        "https://pagedone.io/asset/uploads/1700472416.png",
        "https://pagedone.io/asset/uploads/1700472446.png",
        "https://pagedone.io/asset/uploads/1700472467.png",
    ];

    return (
        <section className={styles.productDetails}>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className={styles.sliderBox}>
                        <div className={`${styles.sliderWrapper} swiper-container relative mb-6`}>
                            <div className="swiper-wrapper">
                                {slides.map((slide, index) => (
                                    <div key={index} className="swiper-slide">
                                        <img
                                            src={slide}
                                            alt="Product image"
                                            className="rounded-2xl object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.navForSlider}>
                            <div className="swiper-wrapper">
                                {thumbnails.map((thumbnail, index) => (
                                    <div key={index} className="swiper-slide">
                                        <img
                                            src={thumbnail}
                                            alt="Thumbnail"
                                            className="rounded-xl object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.productDetails}>
                        <h2>Yellow Summer Travel Bag</h2>
                        <p className={styles.productCategory}>ABS LUGGAGE</p>

                        <div className={styles.priceDetails}>
                            <h5>$199.00</h5>
                            <span>30% off</span>
                        </div>

                        <div className={styles.ratingButton}>
                            <button className="flex items-center gap-1 bg-yellow-400 rounded-lg py-1 px-2">
                                <span className={styles.rating}>4.8</span>
                            </button>
                        </div>

                        <p>Color</p>
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <img
                                    src="https://pagedone.io/asset/uploads/1700472379.png"
                                    alt="Color Black"
                                    className="border rounded-xl"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://pagedone.io/asset/uploads/1700472517.png"
                                    alt="Color Brown"
                                    className="border rounded-xl"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://pagedone.io/asset/uploads/1700472529.png"
                                    alt="Color Beige"
                                    className="border rounded-xl"
                                />
                            </div>
                        </div>

                        <p>Size (KG)</p>
                        <div className={styles.sizeOptions}>
                            <button>Full Set</button>
                            <button>10 KG</button>
                            <button>25 KG</button>
                            <button>35 KG</button>
                        </div>

                        <div className={styles.quantitySelector}>
                            <button>-</button>
                            <input type="text" value="1" readOnly />
                            <button>+</button>
                        </div>

                        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg mt-4">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSlider;
