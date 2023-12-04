import './ManageUser.css';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import ManageUserItem from "../../components/ManageItem/ManageUserItem";


export default function ManageUser() {
	const navigate = useNavigate();

	return (
		<>
			<Header
				listButton={[
					{
						text: "logout",
						handleClick: () => {
							console.log("logout");
							navigate("/");
						},
					},
				]}
			/>
			<LeftNav 
                listItem={[
                    {
                        engText: "manage user",
                        thaiText: "จัดการผู้ใช้",
                        handleClick: () => {
                            navigate('/management/user')
                        }
                    },
                    {
                        engText: "reservation queue",
                        thaiText: "คิวการจอง",
                        handleClick: () => {
                            navigate('/management/queue')
                        }
                    }
                ]}
            />
            <div className="manage_container">
                <ManageUserItem
                    key={1}
                    index={1}
                    user={{
                        name: "name",
                        tel: "tel",
                        role: "role",
                    }}
                    editHandler = {
                        () => {
                            console.log('edit')
                        }
                    }
                    deleteHandler = {
                        () => {
                            console.log('delete')
                        }
                    }
                />
            </div>
		</>
	);
}
