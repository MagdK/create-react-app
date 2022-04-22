import { useState } from "react";

function Button() {
    // https://www.robinwieruch.de/react-function-component/
    const [message, setMessage] = useState('Click me!');
    const [showButton, setShowButton] = useState(true); // 1st - current state, 2nd - set/change

    // const showOriginal = () => {
    //     message.setMessage = 'Click me!'
    // }

    const onClick = (e) => {
        //console.log(`Clicked`)
        if(message === 'Click me!') {
            setMessage('You clicked me!')
            
        } else if(message === 'You clicked me!') {
            setMessage('Stop clicking me!')
        }   
        setTimeout(() => {
            setMessage('Click me!');
            }, 3000);
    };


    let button;
        if(showButton) {
            button = <div>
            <button onClick={onClick}>{message}</button>
        </div>
        } else {
            button = null;
        }

    return (
        <div>
            {button}
        </div>
    );
}

export default Button;







/* Original - halfway done import { useState } from "react";

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
}

export default Button; */