import { useState, useEffect } from 'react';

export const useBackgroundImages = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    try {
      // Get all images from the images folder
      const context = require.context('../images', false, /\.(jpg|jpeg|png|webp)$/);
      const imagePaths = context.keys().map(key => key.replace(/^\.\//, ''));
      setImages(imagePaths);
    } catch (error) {
      console.error('Error loading images:', error);
      setImages([]);
    }
  }, []);

  return images;
};
