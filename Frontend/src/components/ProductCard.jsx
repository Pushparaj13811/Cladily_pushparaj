import React from 'react';
import { Link } from 'react-router-dom';
import SliderComponent from './SliderComponent';

function ProductCard({ productName, price, imageUrls, sizes, currency }) {
    return (
        <div className="bg-white overflow-hidden">
            {/* Product Image Carousel */}
            <div className="relative w-full h-80 md:h-96 mb-12">
                <SliderComponent imageUrls={imageUrls} />
            </div>

            {/* Product Details */}
            <div className="p-4 mt-5">
                <h3 className="text-sm text-[#285c3f]">{productName}</h3>
                <p className="text-sm font-body text-[#285c3f]">{currency + " " + price}</p>
                {/* Available Sizes */}
                <div className="flex flex-wrap gap-2">
                    {sizes && sizes.map((size) => (
                        <Link
                            to={`/products/${size}`}
                            key={size}
                            className="text-[#285c3f] hover:text-[#244b33] text-sm rounded-lg"
                        >
                            {size}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
