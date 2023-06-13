import React, { useEffect, useState } from "react";
import AdminSingleClass from "./AdminSingleClass";

const AdminManageClasses = () => {
	const [all_class, setAll_classes] = useState([]);
	const [test, setTest] = useState(false);

	useEffect(() => {
		fetch("http://localhost:5000/classes")
			.then((res) => res.json())
			.then((data) => setAll_classes(data));
	}, [all_class, test]);

	return (
		<div className="p-4">
			{all_class.map((single) => (
				<AdminSingleClass
					key={single._id}
					single={single}
					setTest={setTest}
				></AdminSingleClass>
			))}
		</div>
	);
};

export default AdminManageClasses;