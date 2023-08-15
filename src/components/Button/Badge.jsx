import { useContext } from 'react' ;
import { ToggleButton } from './Button' ;


function Badge({ text, color }) {
    const { square, toggle } = useContext(ToggleButton);

    let badgeStyles = {};


    switch(color) {
        case color = 'red':
            badgeStyles.textColor = '#991B1B';
            badgeStyles.bgColor = '#FEE2E2';
        break;
        case color = 'yellow':
            badgeStyles.textColor = '#92400E';
            badgeStyles.bgColor = '#FEF3C7';
        break;
        case color = 'green':
            badgeStyles.textColor = '#065F46';
            badgeStyles.bgColor = '#D1FAE5';
        break;
        case color = 'blue':
            badgeStyles.textColor = '#1E40AF';
            badgeStyles.bgColor = '#DBEAFE';
        break;
        
        default:
            badgeStyles.textColor = '#1F2937';
            badgeStyles.bgColor = '#F3F4F6';
        break;
    }


    return (
        <div
            className={ `badge ${square ? 'square' : 'pill'}` }
            style={{
                color: badgeStyles.textColor,
                backgroundColor: badgeStyles.bgColor
            }}
            onClick={ toggle }
        >
            { text }
        </div>
    );
}


export default Badge ;
