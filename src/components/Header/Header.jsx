
import './Header.css';

import { useNavigate } from 'react-router-dom';

export default function Header({listButton}) {

    const navigate = useNavigate();

    const _listButton = listButton || [
        {
            text: 'Facebook',
            handleClick: () => {
                navigate('/')
            }
        },
        {
            text: 'Instagram',
            handleClick: () => {
                navigate('/')
            }
        }
    ];

    return (
        <div className='header__tab'>
            <div className='header__service__name' onClick={()=> {
                navigate('/')
            }}>SIRINYA BEAUTY</div>
            <div className='black__line'></div>
            {
                _listButton.map((button, index) => {
                    return (
                        <div className='tab__button' key={index} onClick={button.handleClick}>{button.text}</div>
                    )
                })
            }
        </div>
    )

}