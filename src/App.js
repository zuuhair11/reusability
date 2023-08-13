import { BsStar, BsStarFill } from 'react-icons/bs' ;
import Toggle from './components/Toggle/index' ;
import Menu from './components/Menu/index' ;


function App() {
    return (
        <>
            <Toggle>
                <Toggle.Button>
                    <Toggle.On>
                        <BsStarFill className='star filled' />
                    </Toggle.On>
                    <Toggle.Off>
                        <BsStar className='star' />
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle>
            
            <br />

            <Toggle>
                <Menu>
                    <Toggle.Button>
                        <Menu.Button>Menu</Menu.Button>
                    </Toggle.Button>

                    <Toggle.On>
                        <Menu.Dropdown>
                            <Menu.Item>Home</Menu.Item>
                            <Menu.Item>About</Menu.Item>
                            <Menu.Item>Contact</Menu.Item>
                            <Menu.Item>Blog</Menu.Item>
                        </Menu.Dropdown>
                    </Toggle.On>
                </Menu>
            </Toggle>
        </>
    );
}


export default App ;
