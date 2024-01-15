import "./CHistoryReservation.css";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import { useNavigate } from "react-router-dom";
import HistoryReservation from "../../components/HistoryReservation/HistoryReservation";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/UserSlice";
import { useEffect, useState } from "react";
import { getUserReservations } from "../../api";

export default function CHistoryReservation() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logoutUser()).then((response) => {
			navigate("/");
		});
	};
	const [reservations, setReservations] = useState([]);

	useEffect(() => {

		const _getUserReservations = async () => {
			const response = await getUserReservations();
			return response;
		}

		_getUserReservations().then((response) => {
			console.log(response)
			setReservations(response);
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
							console.log("history reservation");
						},
					},
				]}
			/>
			<div className="action__container">
				<div style={{ fontSize: "2.08vw" }}>history</div>
				<div className="reservation__history__wrapper">
					{reservations.map((item, index) => {
						return (
							<HistoryReservation
								key={index}
								date={item.date}
								picture={item.picture}
								status={item.accepted}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
