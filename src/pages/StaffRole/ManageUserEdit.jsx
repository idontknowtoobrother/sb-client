import "./ManageUserEdit.css";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import { useNavigate, useParams } from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton";
import { logoutUser, patchUser } from "../../store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserFromId, patchUserByStaff } from "../../api";

export default function ManageUserEdit() {
	const navigate = useNavigate();
	const {userId} = useParams();

	const [user, setUser] = useState(null);
	
	const [userEditing, setUserEditing] = useState({
		username: null,
		password: null,
		confirmPassword: null,
		tel: user?.tel,
	})

	const handleLogout = () => {
		dispatch(logoutUser()).then((response) => {
			navigate("/");
		});
	};

	const validatePassword = () => {
		return userEditing?.password === userEditing?.confirmPassword;
	}

	const handlePatchUser = () => {	

		if (!validatePassword()) {
			alert("Password not matched");
			return;
		}

		const patchUserData = {
			...userEditing,
			userId: user?._id
		}



		patchUserByStaff(patchUserData).then((response) => {
			if (response) {
				alert("Edit success");
				navigate("/management/user");
			} else {
				alert("Edit fail");
			}
		})

	}


	useEffect(() => {
		const _getUser = async (userId) => {
			const response = await getUserFromId(userId);
			return response;
		}

		_getUser(userId).then((response) => {
			setUser(response);
			setUserEditing({
				...userEditing,
				username: response?.username,
				tel: response?.tel,
			})
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
			<div className="action__container">
				<div style={{ fontSize: "2.08vw" }}>reservation</div>
				<div className="reservation__field__wrapper">
					<FieldWithLabel
						label={"username :"}
						placeholder={user?.username}
						type={"text"}
						disabled={true}
					/>
					<FieldWithLabel
						label={"password :"}
						type={"password"}
						handleChange={(e) => {
							setUserEditing({
								...userEditing,
								password: e.target.value
							})
						}}
					/>
					<FieldWithLabel
						label={"confirm-password :"}
						type={"password"}
						handleChange={(e) => {
							setUserEditing({
								...userEditing,
								confirmPassword: e.target.value
							})
						}}
					/>
					<FieldWithLabel
						label={"tel :"}
						placeholder={user?.tel}
						value={userEditing?.tel}
						type={"text"}
						handleChange={(e) => {
							const tel = e.target.value.replace(/[^0-9]/g, "");
							e.target.value = tel;
							setUserEditing({
								...userEditing,
								tel: e.target.value
							})
						}}
					/>
				</div>
				<MainButton
					text={"Save"}
					handleClick={handlePatchUser}
				/>
			</div>
		</>
	);
}
