import React from 'react'

export default function DeleteLike({favorite, deleteFavorite}) {    

    return (
    <div>
        <button onClick={ ()=> deleteFavorite(favorite)}>X</button>
    </div>
    )
}