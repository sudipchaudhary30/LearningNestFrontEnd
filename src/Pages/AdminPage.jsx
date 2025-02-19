import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import "./AdminPage.css";


const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }
      try {
        const response = await axios.get("http://localhost:5000/admin", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data.users);
      } catch (err) {
        console.error(err.response.data);
        navigate("/");
      }
    };
    fetchUsers();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
          <nav>
            <ul>
              <li className="flex items-center mb-4 cursor-pointer hover:text-blue-400">
                <FiUsers className="mr-2" /> Users
              </li>
              <li className="flex items-center mb-4 cursor-pointer hover:text-blue-400">
                <FiSettings className="mr-2" /> Settings
              </li>
            </ul>
          </nav>
        </div>
        <button 
          onClick={handleLogout} 
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded mt-6 hover:bg-red-600">
          <FiLogOut className="mr-2" /> Logout
        </button>
      </aside>
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mb-6 shadow-md bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border text-gray-800">
                  <td className="border p-2 text-center">{user.id}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2 text-center">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-semibold mb-2">Admin Editor</h3>
        <ReactQuill value={content} onChange={setContent} className="mb-4 bg-white shadow-md" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
      </main>
    </div>
  );
};

export default AdminPage;