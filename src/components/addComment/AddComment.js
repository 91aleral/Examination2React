import { useState } from 'react'

export const AddComment = (props) => {
    const [movie,setMovie] = useState()



    const add = (props) => {
        setMovie({
           ...props.movie,
        userComment: props.comment})
    }

    return (
        <div>
            
        </div>
    )
}
