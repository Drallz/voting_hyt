import { useState } from "react";
import ints from "../ints.png"; // Importing the awards image

function Home() {
  const [selectedTutor, setSelectedTutor] = useState(""); // State for the selected tutor
  const [nominations, setNominations] = useState({
    "Best Tutor Overall": [],
    "New Tutor of the Year": [],
    "Best Online Tutor": [],
    "Best In-Person Tutor": [],
    "Best in Physical Sciences": [],
    "Best in Mathematics": [],
  });
  const [isVotingSubmitted, setIsVotingSubmitted] = useState(false); // State to handle submit voting

  const tutors = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Tom Lee",
    "Lily Evans",
    "Robert Black",
    "Sarah Brown",
    "James White",
    "Lucy Green",
    "Michael Clark",
    "David Harris",
    "Emma Adams",
    "Helen Wright",
    "Chris Allen",
    "Sophia Turner",
    "Ethan Scott",
    "Zoe Miller",
    "Oscar King",
  ]; // List of available tutors

  // Handle the nomination action
  const handleNominate = (category) => {
    if (selectedTutor && nominations[category].length < 3) {
      // Add selected tutor to nominations if not already nominated
      if (!nominations[category].includes(selectedTutor)) {
        setNominations((prevNominations) => {
          const updatedCategory = [...prevNominations[category], selectedTutor];
          return {
            ...prevNominations,
            [category]: updatedCategory,
          };
        });
      }
      setSelectedTutor(""); // Reset the dropdown after nomination
    }
  };

  // Handle the submit vote action
  const handleSubmitVote = () => {
    setIsVotingSubmitted(true);
    alert("Your vote has been submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <header className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6">Tutor Awards Voting</h1>
        <img className="mx-auto mb-8 w-1/3" src={ints} alt="Awards" />
        <p className="text-lg text-gray-600 mb-6">Nominate and vote for the Best Tutors in the following categories:</p>

        {/* Nomination Form */}
        {Object.keys(nominations).map((category) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-3xl font-bold text-blue-700 mb-4 border-b-4 border-blue-500 pb-2">
              {category}
            </h3>
            <div className="mb-4">
              <select
                value={selectedTutor}
                onChange={(e) => setSelectedTutor(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a Tutor</option>
                {tutors.map((tutor, index) => (
                  <option key={index} value={tutor}>
                    {tutor}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:bg-gray-400"
                onClick={() => handleNominate(category)}
                disabled={!selectedTutor || nominations[category].includes(selectedTutor) || nominations[category].length >= 3}
              >
                Nominate for {category}
              </button>
            </div>

            {/* Display nominated tutors */}
            <div className="mt-4">
              <h4 className="font-medium text-gray-700 mb-2">Nominated Tutors:</h4>
              <ul className="space-y-2">
                {nominations[category].map((candidate, index) => (
                  <li key={index} className="text-lg font-medium text-green-600">{candidate}</li>
                ))}
                {nominations[category].length === 0 && (
                  <li className="text-gray-500">No tutors nominated yet.</li>
                )}
              </ul>
            </div>
          </div>
        ))}

        {/* Submit Vote Button */}
        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-4 bg-green-500 text-white text-xl rounded-lg shadow hover:bg-green-600 disabled:bg-gray-400"
            onClick={handleSubmitVote}
            disabled={Object.values(nominations).some((category) => category.length === 0)}
          >
            Submit Vote
          </button>
        </div>

        {/* Voting Submission Confirmation */}
        {isVotingSubmitted && (
          <div className="mt-8 text-center text-lg text-green-600">
            <p>Your vote has been successfully submitted!</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default Home;
