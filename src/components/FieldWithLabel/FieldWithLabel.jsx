import './FieldWithLabel.css'

export default function FieldWithLabel({ label, type, handleChange }) {

    return (
        <div className='field__with__label'>
            <div className='field__label'>{label}</div>
            <input
                className='field__input'
                type={type}
                onChange={handleChange}
            />
        </div>
    )


}