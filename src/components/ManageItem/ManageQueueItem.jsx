import './ManageQueueItem.css';
import ApprovedIcon from '../../assets/svgs/approved.svg?react';
import DeleteIcon from '../../assets/svgs/delete.svg?react';

export default function ManageQueueItem({index, queue, checkHandler, deleteHandler}){
    return queue?.accepted === null && (
        <div className="manage_queue">
            <div className="queue_label">queue : {index}</div>
            <div className="queue_detail">name : {queue?.userId?.username}  tel : {queue?.userId?.tel}  role : {queue?.userId?.role}</div>
            <div className="action_queue_btn">
                <div className='image_queue_btn' onClick={checkHandler}><ApprovedIcon/></div>
                <div className='image_queue_btn' onClick={deleteHandler}><DeleteIcon/></div>
            </div>
        </div>
    )
}