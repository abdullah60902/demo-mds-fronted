"use client";
import React, { useState, useEffect } from "react";
import { FiEdit2, FiSave } from "react-icons/fi";
import { toast } from "react-toastify";

/* ───────── EDITABLE FIELD (defined OUTSIDE parent to prevent re-mount on every render) ───────── */
const EditableField = ({ label, field, value, type = "text", textarea, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value || "");

  // Sync localValue when the upstream value changes (e.g. after a save round-trip)
  useEffect(() => {
    if (!isEditing) {
      setLocalValue(value || "");
    }
  }, [value, isEditing]);

  const handleSave = () => {
    onSave(field, localValue);
    setIsEditing(false);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm text-gray-400">{label}</label>

        <button
          className={`flex items-center gap-1 text-xs px-2 py-1 rounded text-white ${
            isEditing ? "bg-green-600" : "bg-blue-600"
          }`}
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? <FiSave size={14} /> : <FiEdit2 size={14} />}
          <span>{isEditing ? "Save" : "Edit"}</span>
        </button>
      </div>

      {isEditing ? (
        textarea ? (
          <textarea
            className="w-full bg-[#2d3b4e] border-l-4 border-[#5A58C9] rounded-r p-2 text-white"
            rows={3}
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
          />
        ) : (
          <input
            type={type}
            className="w-full bg-[#2d3b4e] border-l-4 border-[#5A58C9] rounded-r p-2 text-white"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
          />
        )
      ) : (
        <div className="bg-[#2d3b4e] border-l-4 border-[#5A58C9] rounded-r p-2 text-white">
          {value || "N/A"}
        </div>
      )}
    </div>
  );
};

const ResidentProfileAboutMe = ({ clientId, userRole }) => {
  const [profile, setProfile] = useState(null);

  // ------------ FETCH RESIDENT DATA ------------
  useEffect(() => {
    if (!clientId) return;

    const token = localStorage.getItem("token");

    fetch(`https://demo-mds-backend.vercel.app/client/${clientId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => console.log("Resident Fetch Error:", err));
  }, [clientId]);

  // ------------ UPDATE FIELD IN BACKEND ----------
  const updateField = async (field, value) => {
    try {
      await fetch(`https://demo-mds-backend.vercel.app/client/${clientId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ [field]: value }),
      });

      setProfile((prev) => ({ ...prev, [field]: value }));
      toast.success(`${field} updated successfully`);
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    }
  };

  if (!profile) return <div className="text-white">Loading...</div>;

  return (
    <div className="space-y-6">
      {/* ABOUT ME */}
      <Section title="👤 About Me (Profile Information)">
        <Grid>
          <EditableField label="First Name" field="fullName" value={profile.fullName} onSave={updateField} />
          <EditableField label="Date of Birth" type="date" field="dob" value={profile.dob?.slice(0,10)} onSave={updateField} />
          <EditableField label="NHS No" field="nhsNo" value={profile.nhsNo} onSave={updateField} />
          <EditableField label="NI No" field="niNo" value={profile.niNo} onSave={updateField} />
          <EditableField label="Gender" field="gender" value={profile.gender} onSave={updateField} />
          <EditableField label="Ethnicity" field="ethnicity" value={profile.ethnicity} onSave={updateField} />
          <EditableField label="Religion" field="religion" value={profile.religion} onSave={updateField} />
          <EditableField label="Mental Health Status" field="mentalHealthStatus" value={profile.mentalHealthStatus} onSave={updateField} />
        </Grid>
      </Section>

      {/* MEDICAL */}
      <Section title="🩺 Medical Status & Allergies">
        <Grid>
          <EditableField textarea label="Allergies" field="allergies" value={profile.allergies} onSave={updateField} />
          <EditableField label="Primary Diagnosis" field="primaryDiagnosis" value={profile.primaryDiagnosis} onSave={updateField} />
          <EditableField type="date" label="Diagnosis Date" field="diagnosisDate" value={profile.diagnosisDate?.slice(0,10)} onSave={updateField} />
          <EditableField textarea label="Daily Life Impact" field="dailyLifeImpact" value={profile.dailyLifeImpact} onSave={updateField} />
        </Grid>
      </Section>

      {/* NOK */}
      <Section title="🚨 Next of Kin Details">
        <Grid>
          <EditableField label="NOK Name" field="nokName" value={profile.nokName} onSave={updateField} />
          <EditableField label="NOK Phone" field="nokPhone" value={profile.nokPhone} onSave={updateField} />
          <EditableField label="NOK Email" field="nokEmail" value={profile.nokEmail} onSave={updateField} />
          <EditableField textarea label="NOK Address" field="nokAddress" value={profile.nokAddress} onSave={updateField} />
        </Grid>
      </Section>

      {/* GP */}
      <Section title="👨‍⚕️ GP Details">
        <Grid>
          <EditableField label="GP Surgery" field="gpSurgery" value={profile.gpSurgery} onSave={updateField} />
          <EditableField label="GP Doctor" field="gpDoctor" value={profile.gpDoctor} onSave={updateField} />
          <EditableField label="GP Phone" field="gpPhone" value={profile.gpPhone} onSave={updateField} />
          <EditableField label="GP Email" field="gpEmail" value={profile.gpEmail} onSave={updateField} />
          <EditableField textarea label="GP Address" field="gpAddress" value={profile.gpAddress} onSave={updateField} />
        </Grid>
      </Section>

      {/* Specialist */}
      <Section title="🏥 Specialist Contact">
        <Grid>
          <EditableField label="Hospital Name" field="hospitalName" value={profile.hospitalName} onSave={updateField} />
          <EditableField label="Consultant Name" field="consultantName" value={profile.consultantName} onSave={updateField} />
          <EditableField label="Specialist Phone" field="specialistPhone" value={profile.specialistPhone} onSave={updateField} />
          <EditableField label="Specialist Email" field="specialistEmail" value={profile.specialistEmail} onSave={updateField} />
          <EditableField textarea label="Hospital Address" field="hospitalAddress" value={profile.hospitalAddress} onSave={updateField} />
        </Grid>
      </Section>

      {/* Preferences */}
      <Section title="❤️ Preferences">
        <Grid>
          <EditableField textarea label="Important To Me" field="importantToMe" value={profile.importantToMe} onSave={updateField} />
          <EditableField textarea label="Please DO" field="pleaseDo" value={profile.pleaseDo} onSave={updateField} />
          <EditableField textarea label="Please DON'T" field="pleaseDont" value={profile.pleaseDont} onSave={updateField} />
        </Grid>
      </Section>
    </div>
  );
};

/* UI HELPERS */
const Section = ({ title, children }) => (
  <div className="bg-[#243041] p-4 rounded-lg">
    <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Grid = ({ children }) => (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">{children}</div>
);

export default ResidentProfileAboutMe;
