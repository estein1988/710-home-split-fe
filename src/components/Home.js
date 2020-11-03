import React from 'react'

export default function Home(props){
    return(
        <div>
            <h1>Welcome Back {props.user.username}!</h1>
        </div>
    )
}