import "./LeftNav.css";

import ButtonWithThai from "../ButtonWithThai/ButtonWithThai";

export default function LeftNav({ listItem }) {
	return (
		<div className="left__nav">
            {
                listItem.map((item, index) => {
                    return (
                        <ButtonWithThai
                            key={index}
                            engText={item.engText}
                            thaiText={item.thaiText}
                            handleClick={item.handleClick}
                        />
                    )
                })
            }
		</div>
	);
}
