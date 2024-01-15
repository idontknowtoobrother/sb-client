import './ManageQueue.css';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import ManageQueueItem from '../../components/ManageItem/ManageQueueItem';
import { approveReservation, getAllReservations } from '../../api';
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
                            />
                        )
                    })
                }
            </div>
		</>
	);
}
