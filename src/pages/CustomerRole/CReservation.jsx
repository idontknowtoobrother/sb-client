import "./CReservation.css";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton";

export default function CReservation() {
	const naviget = useNavigate();

	return (
		<>
			<Header
				listButton={[
					{
						text: "logout",
						handleClick: () => {
							naviget("/");
						},
					},
				]}
			/>
			<LeftNav
				listItem={[
					{
						engText: "reservation",
						thaiText: "จองคิว",
						handleClick: () => {
							naviget('/customer/reservation')
						},
					},
					{
						engText: "account detial",
						thaiText: "ข้อมูลส่วนตัว",
						handleClick: () => {
							naviget('/customer/user-edit')
						},
					},
					{
						engText: "history reservation",
						thaiText: "ประวัติการจอง",
						handleClick: () => {
							naviget('/customer/history-reservation')
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
