import './ManageQueue.css';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import ManageItem from "../../components/ManageItem/ManageUserItem";
import ManageQueueItem from '../../components/ManageItem/ManageQueueItem';


export default function ManageQueue() {
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
                <ManageQueueItem
                    key={1}
                    index={1}
                    queue={{
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
