import "./CUserEdit.css";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton";

export default function CUserEdit() {
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
							console.log("history reservation");
						},
					},
				]}
			/>
			<div className="action__container">
				<div style={{ fontSize: "2.08vw" }}>reservation</div>
				<div className="reservation__field__wrapper">
					<FieldWithLabel
						label={"username :"}
						placeholder={"username"}
						type={"text"}
						disabled={true}
					/>
					<FieldWithLabel
						label={"password :"}
						type={"password"}
						handleChange={(e) => {
							console.log('password ->', e.target.value);
						}}
					/>
					<FieldWithLabel
						label={"confirm-password :"}
						type={"password"}
						handleChange={(e) => {
							console.log('confirm-password ->', e.target.value);
						}}
					/>
					<FieldWithLabel
						label={"tel :"}
						type={"text"}
						handleChange={(e) => {
							console.log('tel ->', e.target.value);
						}}
					/>
				</div>
				<MainButton
					text={"Save"}
					handleClick={() => {
						console.log("Save edit detail");
					}}
				/>
			</div>
		</>
	);
}
