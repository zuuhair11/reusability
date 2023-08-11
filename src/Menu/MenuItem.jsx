function MenuItem({ children, open }) {
    console.log(open);
    
    return (
        <div className="menu-item">
            { children }
        </div>
    );
}


export default MenuItem ;
