import "./MainButton.css";

export default function MainButton({text, handleClick}) {
	return (
		<button className="main__button" onClick={handleClick}>
			<div className="main__button__text">{text}</div>
		</button>
	);
}
