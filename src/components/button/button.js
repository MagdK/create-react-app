import { useState } from "react";

function Button() {
    // https://www.robinwieruch.de/react-function-component/
    const [message, setMessage] = useState('Click me!');
        
    const showOriginal = () => {
        message.setMessage = 'Click me!'
    }

    const onClick = (e) => {
        //console.log(`Clicked`)
        if(message === 'Click me!') {
            setMessage('You clicked me!');
        } else if(message === 'You clicked me!') {
            setMessage('Stop clicking me!')
        }
    };
    // setTimeout(showPage, 3000);

    return (
        <div>
            <button onClick={onClick}>{message}</button>
        </div>
        
    );

    setTimeout(showOriginal, 3000);
}

export default Button;