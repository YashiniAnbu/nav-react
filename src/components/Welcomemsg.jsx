import React from 'react'
import {useParams } from 'react-router-dom'


const Welcomemsg = () => {
    const { name } = useParams()
    return (
        <h1>welcome {name}</h1>
    )
}
export default Welcomemsg