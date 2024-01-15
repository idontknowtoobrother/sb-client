import "./CReservation.css";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/UserSlice";
import { useRef, useState } from "react";
import { storage } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { requestReservation } from "../../api";

export default function CReservation() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const uploading = useRef(false);
	const handleLogout = () => {
		dispatch(logoutUser()).then((response) => {
			navigate("/");
		});
	};

	const [reservationData, setReservationData] = useState({
		day: null,
		time: null,
		picture: null,
		moreInformation: null,
	});

	const handleUploadPicture = async (file) => {
		if (file === null) return;
		if (
			file.type === null ||
			(file.type !== "image/png" && file.type !== "image/jpeg")
		) {
			alert("Wrong file type it's not png or jpeg");
			return;
		}
		const imageRef = ref(storage, `sb-slips/${file.name + v4()}`);
		uploading.current = true;
		await uploadBytes(imageRef, file);
		const url = await getDownloadURL(imageRef);
		setReservationData({
			...reservationData,
			picture: url,
		});
		console.log(`File available at ${url}`);
		alert("Upload picture success");
		uploading.current = false;
	};

	const handleReservation = async () => {
		if (
			reservationData.day === null ||
			reservationData.time === null ||
			reservationData.picture === null
		) {
			alert("Please fill all fields");
			return;
		}

		if (uploading.current) {
			alert("Uploading picture, please try again later");
			return;
		}
	
		// Make date combine with time

		const dayParts = reservationData.day.split("-");
		const year = parseInt(dayParts[0], 10);
		const month = parseInt(dayParts[1], 10) - 1;
		const day = parseInt(dayParts[2], 10);
		const _date = new Date(year, month, day);
		console.log(_date.getDay());
		// Manual parsing of time
		const timeParts = reservationData.time.split(":");
		const hours = parseInt(timeParts[0], 10);
		const minutes = parseInt(timeParts[1], 10);
	
		// Create a new Date object with combined date and parsed time
		const date = new Date(
			_date.getFullYear(),
			_date.getMonth(),
			_date.getDate(),
			hours,
			minutes,
		);
		const picture = reservationData.picture;
		const moreInformation = reservationData.moreInformation || "";
	
		const _reservationData = {
			date: date,
			picture: picture,
			moreInformation: moreInformation,
		};

		await requestReservation(_reservationData)
		alert('Reservation success')
		navigate('/customer/history-reservation')
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
							setReservationData({
								...reservationData,
								day: e.target.value,
							});
							console.log(reservationData);
						}}
					/>
					<FieldWithLabel
						label={"Time"}
						type={"time"}
						handleChange={(e) => {
							setReservationData({
								...reservationData,
								time: e.target.value,
							});
							console.log(reservationData);
						}}
					/>
					<FieldWithLabel
						label={"Picture"}
						type={"file"}
						handleChange={async (e) => {
							handleUploadPicture(e.target.files[0]);
						}}
					/>
					<FieldWithLabel
						label={"more - infomation :"}
						type={"text"}
						handleChange={(e) => {
							setReservationData({
								...reservationData,
								moreInformation: e.target.value,
							});
							console.log(reservationData);
						}}
					/>
				</div>

				<MainButton
					text={"reservation"}
					handleClick={()=> {
						handleReservation()
					}}
				/>
			</div>
		</>
	);
}
