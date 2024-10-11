import { useState } from 'react';

const useImageSwitcher = (initialImage) => {
    const [currentImage, setCurrentImage] = useState(initialImage);

    const handleImageClick = (newImageUrl) => {
        setCurrentImage(newImageUrl);
    };

    return {
        currentImage,
        handleImageClick,
    };
};

export default useImageSwitcher;
