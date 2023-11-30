import "./CWelcome.css";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import { useNavigate } from "react-router-dom";

export default function CWelcome() {
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
							console.log("reservation");
						},
					},
					{
						engText: "account detial",
						thaiText: "ข้อมูลส่วนตัว",
						handleClick: () => {
							console.log("account detial");
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
			<div className="home__information center_customer_page">
				<div className="title">Sirinya beauty</div>
				<div className="description">we know beautiful</div>
			</div>
		</>
	);
}
