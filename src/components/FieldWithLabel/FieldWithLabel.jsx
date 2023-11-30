import './FieldWithLabel.css'

export default function FieldWithLabel({ label, type, disabled, placeholder, id, labelForId,  handleChange }) {

    return (
        <div className='field__with__label'>
            <div className='field__label'>{label}</div>
            <input
                placeholder={placeholder}
                disabled={disabled}
                className='field__input'
                type={type}
                onChange={handleChange}
            />
        </div>
    )


}