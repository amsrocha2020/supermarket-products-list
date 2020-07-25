import React from 'react'

const Form = ({ value, onChange, placeholder }) => {
    return (
        <form onSubmit="handleSubmit">
            <input 
                type="text"
                className="input input-search"
                value={value}
                onChange={onChange}
                placeholder="&#xF002; Search Products..."
            />
        </form>
    )
}

export default Form;