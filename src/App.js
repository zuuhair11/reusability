import Button from './components/Button/Button' ; 
import Badge from './components/Button/Badge' ;


function App() {
    return (
        <Button isSquare={ true }>
            <Badge 
                text='Badge' 
                color='blue' 
            />
        </Button>
    );
}


export default App ;
