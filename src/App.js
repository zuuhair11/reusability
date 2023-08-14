import Toggle from './components/Toggle/index' ;
import Star from './components/Star' ;
import Menu from './components/Menu/index' ;


function App() {
    return (
        <>
            <Toggle>
                <Toggle.Button>
                    <Toggle.Display>
                        {
                            function(open) {
                                return <div className={`box ${open && 'filled'}`}></div>
                            }
                        }
                    </Toggle.Display>
                </Toggle.Button>
            </Toggle>
        </>
    );


    // <Star />
            
    // <br />
    
    // <Menu onOpen={ () => console.log('onOpen') } >
    //     <Menu.Button>Menu</Menu.Button>

    //         <Menu.Dropdown>
    //             <Menu.Item>Home</Menu.Item>
    //             <Menu.Item>About</Menu.Item>
    //             <Menu.Item>Contact</Menu.Item>
    //             <Menu.Item>Blog</Menu.Item>
    //         </Menu.Dropdown>
    // </Menu>
}


export default App ;
