import "./CReservation.css";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/UserSlice";

export default function CReservation() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logoutUser()).then((response) => {
			navigate("/");
		});
	};

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
			<div className="action__container">
				<div style={{ fontSize: "2.08vw" }}>reservation</div>
				<div className="reservation__field__wrapper">
					<FieldWithLabel
						label={"Day"}
						type={"date"}
						handleChange={(e) => {
							console.log(e.target.value);
						}}
					/>
					<FieldWithLabel
						label={"Time"}
						type={"time"}
						handleChange={(e) => {
							console.log(e.target.value);
						}}
					/>
					<FieldWithLabel
						label={"Picture"}
						type={"file"}
						handleChange={(e) => {
							console.log(e.target.value);
						}}
					/>
					<FieldWithLabel
						label={"more - infomation :"}
						type={"text"}
						handleChange={(e) => {
							console.log(e.target.value);
						}}
					/>
				</div>
				<MainButton
					text={"Reservation"}
					handleClick={() => {
						console.log("Reservation");
					}}
				/>
			</div>
		</>
	);
}
