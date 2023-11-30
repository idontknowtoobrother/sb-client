import "./CHistoryReservation.css";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import { useNavigate } from "react-router-dom";
import HistoryReservation from "../../components/HistoryReservation/HistoryReservation";

export default function CHistoryReservation() {
	const naviget = useNavigate();

	const mock = [
		{
			day: '2021-10-10',
			time: '10:00',
			picture: 'https://media.discordapp.net/attachments/1166046630349377617/1178930986831065099/403408765_1110277243319967_5081922264756127598_n.png?format=webp&quality=lossless',
			status: false,
		},
		{
			day: '2021-10-11',
			time: '10:00',
			picture: 'https://media.discordapp.net/attachments/1166046630349377617/1178930986831065099/403408765_1110277243319967_5081922264756127598_n.png?format=webp&quality=lossless',
			status: true,
		},
		{
			day: '2021-10-15',
			time: '10:00',
			picture: 'https://media.discordapp.net/attachments/1166046630349377617/1178930986831065099/403408765_1110277243319967_5081922264756127598_n.png?format=webp&quality=lossless',
			status: true,
		},
		{
			day: '2021-10-30',
			time: '10:00',
			picture: 'https://media.discordapp.net/attachments/1166046630349377617/1178930986831065099/403408765_1110277243319967_5081922264756127598_n.png?format=webp&quality=lossless',
			status: true,
		},
		{
			day: '2021-10-25',
			time: '10:00',
			picture: 'https://media.discordapp.net/attachments/1166046630349377617/1178930986831065099/403408765_1110277243319967_5081922264756127598_n.png?format=webp&quality=lossless',
			status: true,
		}
	]

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
				<div style={{ fontSize: "2.08vw" }}>history</div>
				<div className="reservation__history__wrapper">
					{
						mock.map((item, index) => {
						return <HistoryReservation
								key={item.day + index}
								day={item.day}
								time={item.time}
								picture={item.picture}
								status={item.status}
							/>
						})
					}
				</div>
			</div>
		</>
	);
}
