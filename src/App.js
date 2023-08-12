import Menu from './Menu/index' ;

function App() {
    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

    return (
        <Menu>
            <Menu.Button>Sports</Menu.Button>
            <Menu.Dropdown>
                {
                    sports.map( sport => {
                        return (
                            <Menu.Item key={ sport }>
                                { sport }
                            </Menu.Item>
                        );
                    })
                }
            </Menu.Dropdown>
        </Menu>
    );
}


export default App ;
