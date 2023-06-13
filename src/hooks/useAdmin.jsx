import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
	const { user, loading } = useContext(AuthContext);

	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["isAdmin", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axios.get("/admins", {
				baseURL: "https://assgignment-12-server.vercel.app",
			});
			const admins = res.data;
			const matchingAdmin = admins.find(
				(admin) => admin.email === user?.email
			);
			return matchingAdmin;
		},
	});
	return [isAdmin, isAdminLoading];
};

export default useAdmin;