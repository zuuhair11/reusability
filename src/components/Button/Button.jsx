import classnames from 'classnames' ;


function Button({ children, className, size, variant, ...rest }) {
    let sizeClass = size && `button-${size}`;
    let variantClass = variant && `button-${variant}`;
    const allClasses = classnames(sizeClass, variantClass, className);


    return (
        <button
            className={ allClasses } 
            { ...rest }
        >
            { children }
        </button>
    );
}


export default Button ;
