import "./LeftNav.css";

import ButtonWithThai from "../ButtonWithThai/ButtonWithThai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LeftNav({ listItem }) {
    const navigate = useNavigate();
	const { user } = useSelector((state) => state.user);
	const adminListItem = [
		{
			engText: "manage user",
			thaiText: "จัดการผู้ใช้",
			handleClick: () => {
				navigate("/management/user");
			},
		},
		{
			engText: "reservation queue",
			thaiText: "คิวการจอง",
			handleClick: () => {
				navigate("/management/queue");
			},
		},
	];
    
	return (
		<div className="left__nav">
			{listItem.map((item, index) => {
				return (
					<ButtonWithThai
						key={index}
						engText={item.engText}
						thaiText={item.thaiText}
						handleClick={item.handleClick}
					/>
				);
			})}
			{user.role === "staff" &&
				adminListItem.map((item, index) => {
					return (
						<ButtonWithThai
							key={index}
							engText={item.engText}
							thaiText={item.thaiText}
							handleClick={item.handleClick}
						/>
					);
				})}
		</div>
	);
}
