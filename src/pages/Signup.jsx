import "./Signup.css";

import Header from "../components/Header/Header";
import MainButton from "../components/MainButton/MainButton";
import FieldWithLabel from "../components/FieldWithLabel/FieldWithLabel";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../store/UserSlice";

export default function Signup() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [tel, setTel] = useState("");

	const isMatchedPassword = () => {
		return password === confirmPassword;
	};

	const resetCredentials = () => {
		setUsername("");
		setPassword("");
		setConfirmPassword("");
		setTel("");
	};

	const handleSignUp = () => {
		if (!isMatchedPassword()) {
			alert("Password not matched");
			return;
		}

		const signupCredentials = {
			username: username,
			password: password,
			// actually send only password to backend
			// cause if they wanna inject api they can do it anyway
			// the way to secure api is to use rate limit, cloudflare, captcha, etc.
			confirmPassword: confirmPassword,
			tel: tel,
		};

		dispatch(signupUser(signupCredentials)).then((response) => {
			if (response.payload) {
				resetCredentials();
				// this navigate should be in the component or constant helper function
				navigate("/customer/welcome");
				return
			}

			alert("Username already exist or Tel already exist");
		});
	};

	return (
		<>
			<Header />
			<div className="signup__wrapper">
				<FieldWithLabel
					label="username :"
					type="text"
					handleChange={(e) => {
						const validatedUsername = e.target.value.replace(
							/[^a-zA-Z0-9]/g,
							""
						);
						// funcking bad practice this should be in the component or constant helper function
						e.target.value = validatedUsername;
						setUsername(validatedUsername);
					}}
				/>
				<FieldWithLabel
					label="password :"
					type="password"
					handleChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<FieldWithLabel
					label="confirm-password :"
					type="password"
					handleChange={(e) => {
						setConfirmPassword(e.target.value);
					}}
				/>
				<FieldWithLabel
					label="tel :"
					type="text"
					handleChange={(e) => {
						setTel(e.target.value);
					}}
				/>
				<div className="signup__adjust">
					<MainButton text="signup" handleClick={handleSignUp} />
				</div>
			</div>
		</>
	);
}
