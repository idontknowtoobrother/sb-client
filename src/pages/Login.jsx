import './Login.css'
import Header from "../components/Header/Header";
import FieldWithLabel from "../components/FieldWithLabel/FieldWithLabel";
import MainButton from '../components/MainButton/MainButton';
export default function Login() {
	return (
		<>
			<Header />
			<div className="login__wrapper">
				<FieldWithLabel label="username :" type="text" />
				<FieldWithLabel label="password :" type="password" />
                <MainButton text="Login" />
			</div>
		</>
	);
}
