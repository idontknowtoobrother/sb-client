import "./CWelcome.css";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/UserSlice";

export default function CWelcome() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logoutUser()).then((response) => {
			navigate("/");
		})
	}

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
                            navigate('/customer/reservation')
						},
					},
					{
						engText: "account detial",
						thaiText: "ข้อมูลส่วนตัว",
						handleClick: () => {
							navigate('/customer/user-edit')
						},
					},
					{
						engText: "history reservation",
						thaiText: "ประวัติการจอง",
						handleClick: () => {
							navigate('/customer/history-reservation')
						},
					},
				]}
			/>
			<div className="home__information center_customer_page">
				<div className="title">Sirinya beauty</div>
				<div className="description">we know beautiful</div>
			</div>
		</>
	);
}
