import React from 'react'
import avartarWoman from './images/woman.svg'

const User = function(props){
    return(
        <div>
        <a href=''className='avatar'>
            <img src={avartarWoman} alt='avatar of a geisha'/>

        </a>
        <div className='content'>
            <a className='author'>
                {props.name}
            </a>
            <div className='metadata'>
                <span className='date'>Today at {props.date}</span>
            </div>
            <div className='text'>
                {props.msg}

            </div>
        </div>
        </div>
    )
}



export default User
