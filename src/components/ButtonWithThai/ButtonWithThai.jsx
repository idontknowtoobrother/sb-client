import './ButtonWithThai.css'

export default function ButtonWithThai({engText, thaiText}) {

    return (
        <div className='button__with__thai'>
            <div className='button__with__thai__eng__text'>{engText}</div>
            <div className='button__with__thai__thai__text'>{thaiText}</div>
        </div>
    )
}