import React from 'react';
import ReactDom from 'react-dom/client';

const App = function(){
    return(
        <div className='ui comments'>
            <user>
                name='Mr David'
                date="09:30am"
                msg = "im feeling Great!.."
            </user>
            <user_feedback>
                name='Mr Terence'
                date="08:40am"
                msg = "Where is the party yoo!.."
            </user_feedback>
            <user>
                name='Dr Lawrence'
                date="10:50am"
                msg = "Today is a Great Day!.."
            </user>
            <p>Testing</p>
        </div>
    )
}


//  rooting //
const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(App())


/*
// example of props
connst App = function(props){
    return(
        <div>
            <h1>Welcome to React Function components{props.name}</h1>
        </div>
    )
}
*/