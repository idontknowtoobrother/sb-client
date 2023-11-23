import "./CWelcome.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

export default function CWelcome() {
	
    const naviget = useNavigate();
    
    return (
		<>
            <Header 
                listButton={[
                    {text: "logout", handleClick: () => {
                        naviget('/')
                    }},
                ]}
            />
        </>
	);
}
