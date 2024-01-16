import './ManageQueue.css';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import ManageQueueItem from '../../components/ManageItem/ManageQueueItem';
import { approveReservation, getAllReservations, rejectReservation } from '../../api';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/UserSlice';


export default function ManageQueue() {
	const navigate = useNavigate();
    const dispatch = useDispatch();
    const [allQueue, setAllQueue] = useState([])
    

    const handleLogout = () => {
		dispatch(logoutUser()).then((response) => {
			navigate("/");
		});
	};
    

    const handleApprove = async (reservation) => {
        const res = approveReservation(reservation);
        console.log(res);
        if (!res){
            alert('Approve fail')
            return
        }

        // just reload page
        window.location.reload();
    }

	const rejectDialog = (reservation) => {
        confirmDialog({
            message: `Do you want to reject this resercation "${reservation?.userId?.tel}"?`,
            header: 'Reject Reservation Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptLabel: 'Reject',
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
				rejectReservation(reservation).then((response) => {
					if (!response) {
						alert('Reject fail')
						return
					}
					window.location.reload();
				})
            },
        });
    };

    useEffect(() => {
        const _getAllQueue = async () => {
            const response = await getAllReservations();
            return response;
        }

        _getAllQueue().then((response) => {
            console.log(response);
            setAllQueue(response);
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
                    allQueue.map((reservation, index) => {
                        return (
                            <ManageQueueItem
                                key={index}
                                index={index}
                                queue={reservation}
                                checkHandler={() => {
                                    handleApprove(reservation);
                                }}
								deleteHandler={() => {
									rejectDialog(reservation)
								}}
                            />
                        )
                    })
                }
            </div>
		</>
	);
}
