import './ButtonWithThai.css'

export default function ButtonWithThai({engText, thaiText, handleClick}) {

    return (
        <div className='button__with__thai' onClick={handleClick}>
            <div className='button__with__thai__eng__text'>{engText}</div>
            <div className='button__with__thai__thai__text'>{thaiText}</div>
        </div>
    )
}