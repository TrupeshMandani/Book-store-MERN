import React, { useEffect, useState } from "react";
import { getBaseURL } from "../../utils/baseURL";

const DashboardLayout = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
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
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
  });
  if (loading) return;
  return <div>DashboardLayout</div>;
};

export default DashboardLayout;
