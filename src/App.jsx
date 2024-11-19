import React from "react";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import SubmittedData from "./components/SubmittedData";

export default function App() {
  const [submittedData, setSubmittedData] = React.useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-10">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 px-4">
          <PatientForm setSubmittedData={setSubmittedData} />
          <SubmittedData submittedData={submittedData} />
        </div>
      </main>
    </div>
  );
}
