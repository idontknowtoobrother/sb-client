import './ManageUser.css';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import ManageUserItem from "../../components/ManageItem/ManageUserItem";
import { useEffect, useState } from 'react';
import { deleteUser, getAllUsers } from '../../api';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/UserSlice';

export default function ManageUser() {
	const navigate = useNavigate();
    const dispatch = useDispatch();
    const [allUser, setAllUser] = useState([])
    const { user } = useSelector(state => state.user);
    const handleLogout = () => {
		dispatch(logoutUser()).then((response) => {
			navigate("/");
		});
	};
    

    const handlerEditUser = (_user) => {
        if (user._id === _user._id) {
            navigate('/customer/user-edit')
            return
        }
        navigate(`/management/user/${_user._id}`)
    }

    const deleteDialog = (_user) => {
        confirmDialog({
            message: `Do you want to delete this user "${_user.username}" ?`,
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptLabel: 'DELETE',
            acceptClassName: 'p-button-danger',
            rejectClassName: 'p-button-normal',
            style: {
                background: 'black',
                padding: '1rem',
                color: 'white',
                fontSize: '1.5rem',
                borderRadius: '1rem',
            },
            accept: () => {
                if (user._id === _user._id) {
                    alert('You cannot delete yourself')
                    return
                }
                deleteUser(_user._id).then((response) => {
                    if (response) {
                        alert('Delete success')
                        window.location.reload();
                    } else {
                        alert('Delete fail')
                    }
                })
            },
        });
    };

    useEffect(() => {
        const _getAllUser = async () => {
            const response = await getAllUsers();
            return response;
        }

        _getAllUser().then((response) => {
            console.log(response);
            setAllUser(response);
        })
    }, [])
	return (
		<>
            <ConfirmDialog />
			<Header
				listButton={[
					{
						text: "logout",
						handleClick: handleLogout,
					},
				]}
			/>
			<LeftNav
				listItem={[
					{
						engText: "reservation",
						thaiText: "จองคิว",
						handleClick: () => {
							navigate("/customer/reservation");
						},
					},
					{
						engText: "account detial",
						thaiText: "ข้อมูลส่วนตัว",
						handleClick: () => {
							navigate("/customer/user-edit");
						},
					},
					{
						engText: "history reservation",
						thaiText: "ประวัติการจอง",
						handleClick: () => {
							navigate("/customer/history-reservation");
						},
					},
				]}
			/>
            <div className="manage_container">
                {
                    allUser?.map((user, index) => {
                        return (
                            <ManageUserItem
                                key={index}
                                index={index}
                                user={user}
                                editHandler = {
                                    () => {
                                       handlerEditUser(user)
                                    }
                                }
                                deleteHandler = {
                                    () => {
                                        deleteDialog(user)
                                    }
                                }
                            />
                        )
                    })
                }
            </div>
		</>
	);
}
