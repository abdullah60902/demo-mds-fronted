"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { FaClipboardCheck, FaEye, FaUser, FaSearch } from "react-icons/fa";
import Link from "next/link";

const API = "https://admin-panel-backend-alpha.vercel.app";

const StaffProfileAssessment = ({ staffId }) => {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  useEffect(() => {
    if (!staffId) return;
    fetch(`${API}/assessment/staff/${staffId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(data => {
        setAssessments(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [staffId, token]);

  // Group assessments by client
  const clientMap = {};
  assessments.forEach(a => {
    const cId = a.client?._id || a.client;
    if (!clientMap[cId]) {
      clientMap[cId] = {
        clientId: cId,
        clientName: a.client?.fullName || "Unknown Client",
        roomNumber: a.client?.roomNumber || "N/A",
        profileImage: a.client?.profileImage || null,
        assessments: []
      };
    }
    clientMap[cId].assessments.push(a);
  });

  const clients = Object.values(clientMap).filter(c =>
    c.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-white text-center py-10">Loading assessments...</div>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FaClipboardCheck className="text-[#4A49B0]" /> Linked Client Assessments
        </h2>
        <p className="text-sm text-gray-400">
          {clients.length} client(s) linked • {assessments.length} assessment(s) total
        </p>
      </div>

      {/* Search */}
      {assessments.length > 0 && (
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search clients..."
            className="w-full bg-[#2d3b4e] border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white text-sm"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* Client List */}
      {clients.length === 0 ? (
        <div className="text-center py-16 bg-[#243041] rounded-xl border border-gray-700">
          <FaClipboardCheck className="text-5xl text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">No linked assessments</p>
          <p className="text-gray-500 text-sm mt-1">
            Assessments will appear here when this staff member is linked to client assessments
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {clients.map(c => (
            <div key={c.clientId} className="bg-[#243041] rounded-xl border border-gray-700 overflow-hidden hover:border-[#4A49B0]/60 transition">
              {/* Client Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#2A2A40] border-2 border-[#4A49B0] flex items-center justify-center overflow-hidden">
                    {c.profileImage ? (
                      <img src={c.profileImage} alt={c.clientName} className="w-full h-full object-cover" />
                    ) : (
                      <FaUser className="text-gray-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{c.clientName}</h3>
                    <p className="text-xs text-gray-400">Room: {c.roomNumber} • {c.assessments.length} assessment(s)</p>
                  </div>
                </div>

                <Link href={`/Resident-Profile?id=${c.clientId}`}>
                  <button className="flex items-center gap-2 bg-[#4A49B0] hover:bg-[#5A58C9] text-white px-4 py-2 rounded-lg text-sm transition-all active:scale-95">
                    <FaEye /> View Profile
                  </button>
                </Link>
              </div>

              {/* Assessment List */}
              <div className="border-t border-gray-700 px-4 py-3 bg-[#1a2636]/50">
                <div className="grid gap-2">
                  {c.assessments.map(a => (
                    <div key={a._id} className="flex items-center justify-between bg-[#2d3b4e] rounded-lg px-3 py-2">
                      <div>
                        <span className="text-white text-sm font-medium">{a.assessmentType}</span>
                        <span className="text-gray-500 text-xs ml-2">
                          {new Date(a.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        a.status === "Completed" ? "bg-green-500/20 text-green-400" :
                        a.status === "Reviewed" ? "bg-blue-500/20 text-blue-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>{a.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StaffProfileAssessment;
