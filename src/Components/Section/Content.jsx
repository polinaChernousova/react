import React from 'react';
import "./content.css"

const Content = (props) => {
    console.log(props);
    return (
        <div className='content'>
            <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia doloribus maxime perspiciatis quia, ipsum, voluptas itaque dicta facilis error nostrum aperiam minima vel quisquam iure vero odio enim possimus tenetur sed necessitatibus doloremque consequatur? Velit sit laborum beatae doloremque impedit reprehenderit, et quae quod ad distinctio amet ea odio!
            </p>
            <h1>Table</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {props.user.map((item,index)=>{
                    return <tr key={item.id}>
                    <td>{index +1}</td>
                    <td>{item.Name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    </tr>
                })}
                </tbody>
            </table>
            
        </div>
    );
};

export default Content;