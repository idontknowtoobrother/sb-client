import "./Signup.css";

import Header from "../components/Header/Header";
import MainButton from "../components/MainButton/MainButton";
import FieldWithLabel from "../components/FieldWithLabel/FieldWithLabel";

export default function Signup() {
	return (
		<>
			<Header />
			<div className="signup__wrapper">
				<FieldWithLabel label="username :" type="text" />
				<FieldWithLabel label="password :" type="password" />
				<FieldWithLabel label="confirm-password :" type="password" />
				<FieldWithLabel label="tel :" type="text" />
				<div className="signup__adjust">
					<MainButton text="signup" />
				</div>
			</div>
		</>
	);
}
