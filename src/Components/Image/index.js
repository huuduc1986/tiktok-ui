import propTypes from 'prop-types';
import { useState, forwardRef } from "react";
import classNames from "classnames";
import images from "~/access/image";
import styles from './Image.module.scss';


const Image = forwardRef(({src, alt, 
            className, 
            fallback: customFallback = images.huuduc,
            ...props}, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = ()=>{
        setFallback(customFallback);
    }

    return (  
            <img 
                className={classNames(styles.wrapper, className)}
                ref={ref} 
                src={ fallback || src } 
                alt={alt} {...props} 
                onError={handleError} 
            />
        ) 
    });

    Image.propTypes = {
        src: propTypes.string,
        alt: propTypes.string,
        className: propTypes.string,
        fallback: propTypes.string,
    };

export default Image;