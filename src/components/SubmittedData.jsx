import React from "react";

export default function SubmittedData({ submittedData }) {
  const handleFileDownload = () => {
    if (submittedData?.file) {
      const url = URL.createObjectURL(submittedData.file);
      const a = document.createElement("a");
      a.href = url;
      a.download = submittedData.file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="bg-green-100 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Submitted Information
      </h2>
      {submittedData ? (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <p className="text-lg font-semibold text-gray-800">
              {submittedData.name}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Age
            </label>
            <p className="text-lg font-semibold text-gray-800">
              {submittedData.age}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Uploaded File
            </label>
            <div className="flex items-center space-x-3">
              <p className="text-lg text-gray-800">
                {submittedData.file?.name}
              </p>
              {submittedData.file && (
                <button
                  onClick={handleFileDownload}
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 focus:ring focus:ring-teal-400"
                >
                  Download ⬇️
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          No information submitted yet.
        </p>
      )}
    </div>
  );
}
