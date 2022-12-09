import { useState, useEffect } from "react";

const useWidth = () => {
    const [width, setWidth] = useState(innerWidth); // default width, detect on server.
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
};

export default useWidth;