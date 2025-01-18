"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick"; // Import React Slick

export default function MovieCarousel({ movies }) {
    // React Slick settings
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop the slides
        speed: 500, // Animation speed in ms
        slidesToShow: 3, // Number of slides visible
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Time between auto slides
        responsive: [
            {
                breakpoint: 1024, // Screen width < 1024px
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Screen width < 768px
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Trending Movies
            </h2>
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.imdbID} className="p-2">
                        {" "}
                        {/* Use imdbID as key */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {movie.Title}
                                </h3>
                                <p className="text-gray-500">{movie.Year}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
