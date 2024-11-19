import React, { useState, useRef } from "react";

export default function PatientForm({ setSubmittedData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const renderAgeOptions = () =>
    Array.from({ length: 120 }, (_, i) => i + 1).map((age) => (
      <option key={age} value={age}>
        {age}
      </option>
    ));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!age.trim()) newErrors.age = "Age is required";
    if (!file) newErrors.file = "Please upload a file";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedData({ name, age, file });
      setName("");
      setAge("");
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  return (
    <div className="bg-green-100 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Patient Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter patient name"
            className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 px-4 py-2"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-2">
            Age
          </label>
          <select
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 px-4 py-2"
          >
            <option value="">Select age</option>
            {renderAgeOptions()}
          </select>
          {errors.age && (
            <p className="text-sm text-red-500 mt-1">{errors.age}</p>
          )}
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium mb-2">
            Upload File
          </label>
          <div className="flex items-center space-x-3">
            <input
              id="file"
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 focus:ring focus:ring-teal-400"
            >
              Choose File
            </button>
            <span className="text-gray-500 text-sm">
              {file ? file.name : "No file chosen"}
            </span>
          </div>
          {errors.file && (
            <p className="text-sm text-red-500 mt-1">{errors.file}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 focus:ring focus:ring-teal-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
