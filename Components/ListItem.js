import React from 'react'

const ListItem = ({heading,subHeading,imgLink}) => {
  return (
    <div className='list-item'>
      Test
        <div>
            <h4>{heading}</h4>
            <h6>{subHeading}</h6>
        </div>
        <img src={imgLink}/>
    </div>
  )
}

export default ListItem