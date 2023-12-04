import './ManageUserItem.css';
export default function ManageUserItem({index, user, editHandler, deleteHandler}){
    return(
        <div className="manage_item">
            <div className="user_label">user : {index}</div>
            <div className="user_detail">name : {user.name}  tel : {user.tel}  role : {user.role}</div>
            <div className="action_btn">
                <div className='image_btn' onClick={editHandler}>⚙️</div>
                <div className='image_btn' onClick={deleteHandler}>❌</div>
            </div>
        </div>
    )
}