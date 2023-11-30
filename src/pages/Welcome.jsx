import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import MainButton from "../components/MainButton/MainButton";
import "./Welcome.css";

export default function Home() {
	const navigate = useNavigate();

	const handleGotoLogin = () => {
		navigate('/login')
	};

    const handleGotoSignup = () => {
        navigate('/signup')
    };

	return (
		<>
			<Header />
			<div className="home__body">
				<div className="home__information" >
					<div className="title">Sirinya beauty</div>
					<div className="description">we know beautiful</div>
				</div>
				<div className="home__actions">
					<MainButton text="Login" handleClick={handleGotoLogin}/>
					<MainButton text="Signup" handleClick={handleGotoSignup}/>
				</div>
			</div>
		</>
	);
}
