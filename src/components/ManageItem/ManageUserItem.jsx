import './ManageUserItem.css';
import EditIcon from '../../assets/svgs/edit.svg?react';
import DeleteIcon from '../../assets/svgs/delete.svg?react';
export default function ManageUserItem({index, user, editHandler, deleteHandler}){
    return(
        <div className="manage_item">
            <div className="user_label">user : {index}</div>
            <div className="user_detail">name : {user.username}  tel : {user.tel}  role : {user.role}</div>
            <div className="action_btn">
                <div className='image_btn' onClick={editHandler}><EditIcon/></div>
                <div className='image_btn' onClick={deleteHandler}><DeleteIcon/></div>
            </div>
        </div>
    )
}