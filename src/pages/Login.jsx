import "./Login.css";
import Header from "../components/Header/Header";
import FieldWithLabel from "../components/FieldWithLabel/FieldWithLabel";
import MainButton from "../components/MainButton/MainButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loading, err } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const resetCredentials = () => {
		setUsername("");
		setPassword("");
	};
	const handleLogin = (e) => {
		e.preventDefault();
		const userCredentials = {
			username: username,
			password: password,
		};
		dispatch(loginUser(userCredentials)).then((response) => {
			if (response.payload) {
				resetCredentials();
				navigate("/customer/welcome");
			} else {
				alert("Invalid username or password");
			}
		});
	};

	return (
		<>
			<Header />
			<div className="login__wrapper">
				<FieldWithLabel
					label="username :"
					type="text"
					handleChange={(e) => {
						const validatedUsername = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
						// funcking bad practice this should be in the component or constant helper function
						e.target.value = validatedUsername;
						setUsername(validatedUsername)
					}}
				/>
				<FieldWithLabel
					label="password :"
					type="password"
					handleChange={(e) => setPassword(e.target.value)}
				/>
				{loading ? <></> : <MainButton text="Login" handleClick={handleLogin} />} 
			</div>
		</>
	);
}
