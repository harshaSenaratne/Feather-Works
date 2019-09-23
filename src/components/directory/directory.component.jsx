import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super(); //pulls all the things we need for the class from React component 
   
        this.state={
         
            sections:[
                {
                    id:1,
                    title:"HOODIES",
                    imageUrl:"https://i.ibb.co/Dfm8GyN/hoodies.png",
                    linkUrl:"profile"
                    
                },
                {   id:2,
                    title:"JEANS",
                    imageUrl:"https://i.ibb.co/KVLpg8y/jeans.png",
                    linkUrl:""
                },
                {
                    id:3,
                    title:"SHOES",
                    imageUrl:"https://i.ibb.co/0jkbnby/shoes.png",
                    linkUrl:""
                },
                {
                    id:4,
                    title:"MENS",
                    imageUrl:"https://i.ibb.co/k0PYHmB/mens.png",
                    size:'large',
                    linkUrl:""
                },
                {
                    id:5,
                    title:"WOMENS",
                    imageUrl:"https://i.ibb.co/gPFkfXb/womens.png",
                    size:'large',
                    
                }
            ]
        }
    
    }
   

    render(){

        return(
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps})=>( //Maps the section array and passes it to the MenuItem Component
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>    
        )
    }

}

export default Directory;