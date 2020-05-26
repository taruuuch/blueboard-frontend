import { useState, useEffect } from 'react';

interface IViewport {
    width: Number;
    height: Number;
};

export const useViewport = (): IViewport => {
    const isClient = typeof window === 'object';
    const [width, setWidth] = useState(window.innerWidth as Number);
    const [height, setHeight] = useState(window.innerHeight as Number);

    useEffect((): any => {
        if (!isClient) {
            return false;
        }

        const handleWindowResize = () => {
            setWidth(isClient && window.innerWidth);
            setHeight(isClient && window.innerHeight);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return { width, height };
};
