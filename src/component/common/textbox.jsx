import React from 'react'

const Textbox=(props)=> {
  return (
    <div>
        <input className={props.className} type={props.text} onChange={props.onChange} id={props.id} />
    </div>
  )
}

export default Textbox