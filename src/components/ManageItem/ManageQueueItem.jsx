import './ManageQueueItem.css';
export default function ManageQueueItem({index, queue, checkHandler}){
    return(
        <div className="manage_queue">
            <div className="queue_label">queue : {index}</div>
            <div className="queue_detail">name : {queue.name}  tel : {queue.tel}  role : {queue.role}</div>
            <div className="action_queue_btn">
                <div className='image_queue_btn' onClick={checkHandler}>✅</div>
            </div>
        </div>
    )
}