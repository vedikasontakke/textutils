import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    // if props.alert is null then second div will not get evaluted 
    // if props.alert is not null then second div will get evaluted
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

