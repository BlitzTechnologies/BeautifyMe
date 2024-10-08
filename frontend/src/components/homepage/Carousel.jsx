import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true); // Track if transition should be active

    // Placeholder images (replace with your actual images)
    const images = [
        { id: 1, title: "Placeholder 1", bgColor: "#f9c5d1" },
        { id: 2, title: "Placeholder 2", bgColor: "#c5f9e9" },
        { id: 3, title: "Placeholder 3", bgColor: "#d1f9c5" },
        { id: 4, title: "Placeholder 4", bgColor: "#c5d1f9" }
    ];

    // Add a duplicate of the first image at the end to simulate infinite scrolling
    const extendedImages = [...images, images[0]];

    // Function to go to the next image (1 by 1)
    const handleNext = () => {
        if (!isTransitioning) return;
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    // Function to go to the previous image (1 by 1)
    const handlePrev = () => {
        if (!isTransitioning) return;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    // When reaching the last (duplicate) image, reset back to the real first image without transition
    useEffect(() => {
        if (currentIndex === images.length) {
            // Disable transition momentarily to reset without jump
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 500); // Allow enough time for transition to complete
        } else {
            // Re-enable transition after resetting
            setIsTransitioning(true);
        }
    }, [currentIndex]);

    return (
        <Box
            sx={{
                position: "relative",

                margin: "0 auto", // Center the carousel
                overflow: "hidden", // Hide overflow to create sliding effect
                height: "250px", // Adjust height as needed
            }}
        >
            {/* Images Container with Sliding Effect */}
            <Box
                sx={{
                    display: "flex",
                    width: `${extendedImages.length * 50}%`, // Dynamic width based on number of images
                    transform: `translateX(-${(currentIndex * 100) / extendedImages.length}%)`, // Slide effect based on currentIndex
                    transition: isTransitioning ? "transform 0.5s ease-in-out" : "none", // Smooth transition effect
                }}
            >
                {extendedImages.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: "calc(50% - 10px)", // 50% of the container width minus the margin
                            backgroundColor: image.bgColor,
                            height: "250px", // Adjust height of the image container
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            padding: "20px",
                            margin: "0 5px", // Add margin between the images (5px each side)
                        }}
                    >
                        {image.title}
                    </Box>
                ))}
            </Box>

            {/* Left Arrow */}
            <Button
                onClick={handlePrev}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    zIndex: 1,
                    minWidth: "40px", // Button size
                    height: "40px",
                }}
            >
                {"<"}
            </Button>

            {/* Right Arrow */}
            <Button
                onClick={handleNext}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    zIndex: 1,
                    minWidth: "40px", // Button size
                    height: "40px",
                }}
            >
                {">"}
            </Button>
        </Box>
    );
}

export default ImageSlider;
