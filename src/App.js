import Star from './components/Star' ;
import Menu from './components/Menu/index' ;


function App() {
    return (
        <>
            <Star />
            
            <br />
            
            <Menu>
                <Menu.Button>Menu</Menu.Button>

                    <Menu.Dropdown>
                        <Menu.Item>Home</Menu.Item>
                        <Menu.Item>About</Menu.Item>
                        <Menu.Item>Contact</Menu.Item>
                        <Menu.Item>Blog</Menu.Item>
                    </Menu.Dropdown>
            </Menu>
        </>
    );
}


export default App ;
