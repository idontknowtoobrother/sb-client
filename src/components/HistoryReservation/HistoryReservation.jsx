
import './HistoryReservation.css';
import FailedIcon from '../../assets/svgs/failed.svg?react';
import ApprovedIcon from '../../assets/svgs/approved.svg?react';

export default function HistoryReservation({date, picture, status, statusImage}){
    const _date = new Date(date);
    const time = _date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const day = _date.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });

    const data   = {
        day: day || '2021-10-10',
        time: time || '10:00',
        picture: picture || 'https://media.discordapp.net/attachments/1166046630349377617/1178930986831065099/403408765_1110277243319967_5081922264756127598_n.png?format=webp&quality=lossless',
        status: status,
        statusLabel: status === null ? 'pending (รอยืนยัน)' : status === false ? 'failed' : 'approved',
        statusImage: status === null ? <></> : status === false ? <FailedIcon/> : <ApprovedIcon/> 
    }
    

    return (
        <div className='history__reservation__item'>
            <div className='schedule__info'>
                <div className='schedule__date'>day : {data.day}</div>
                <div className='schedule__time'>time : {data.time}</div>
            </div>
            <div className='picture__info'>
                <div className='picture__label'>picture :</div>
                <div className='picture__img'>
                    <img src={data.picture} alt="Schedule Picture" />
                </div>
            </div>
            <div className='status__info'>
                <div>status : {data.statusLabel}</div>
                <div className='status__image'>
                    {data.statusImage}
                </div>
            </div>
        </div>
    )
}