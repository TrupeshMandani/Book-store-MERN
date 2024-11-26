import React from "react";
import { useEffect, useState } from "react";
import { getBaseURL } from "../../utils/baseURL";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${getBaseURL}/api/admin`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setData(response.data);
        setLoading(false); // Ensure loading stops after fetch
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  if (loading) return <Loading />;
  return <div>Dashboard</div>;
};

export default Dashboard;
