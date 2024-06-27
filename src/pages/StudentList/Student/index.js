import React from 'react'

export default function Student(props){
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.sex}</td>
            <td>{props.age}</td>
            <td>{props.address}</td>
        </tr>
    )
}
