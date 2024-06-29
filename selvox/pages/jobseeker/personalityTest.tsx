import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";

const testQuestions = [
  // General Interest Questions
  "I enjoy helping others.",
  "I like working with technology.",
  "I am creative and enjoy artistic activities.",
  "I am interested in teaching and education.",
  "I like solving complex problems.",
  "I enjoy working in a business environment.",
  "I am interested in law and justice.",
  "I am passionate about scientific research.",
  "I like working in social services.",
  "I enjoy creating media content.",

  // Healthcare-Specific Questions
  "I am deeply empathetic and enjoy caring for others.",
  "I have a strong stomach and am comfortable dealing with medical procedures.",
  "I am detail-oriented and enjoy organizing patient records.",
  "I am patient and enjoy working with children.",
  "I am good at managing schedules and coordinating care plans.",

  // Art-Specific Questions
  "I have a natural talent for drawing or painting.",
  "I enjoy expressing myself creatively through art.",
  "I am skilled at designing and creating visual elements.",
  "I appreciate the beauty in everyday objects and scenes.",
  "I enjoy teaching others about art and its history.",

  // IT-Specific Questions
  "I am fascinated by how technology works and enjoy problem-solving.",
  "I enjoy coding and writing software.",
  "I am good at understanding complex systems and networks.",
  "I am comfortable troubleshooting computer issues.",
  "I enjoy staying up-to-date with the latest tech trends.",

  // Education-Specific Questions
  "I love learning new things and sharing knowledge with others.",
  "I am patient and enjoy guiding students through difficult subjects.",
  "I am organized and enjoy planning lesson plans.",
  "I enjoy mentoring and seeing students grow academically.",
  "I am passionate about educational reform and improving learning outcomes.",

  // Engineering-Specific Questions
  "I enjoy designing and building things.",
  "I am good at solving puzzles and logical problems.",
  "I am detail-oriented and enjoy precision work.",
  "I am interested in how machines and structures work.",
  "I enjoy researching and applying scientific principles to real-world problems.",

  // Business-Specific Questions
  "I am good at analyzing financial statements.",
  "I enjoy strategic planning and setting goals.",
  "I am effective at negotiating and resolving conflicts.",
  "I have a knack for identifying market trends.",
  "I enjoy leading teams and motivating employees.",

  // Law-Specific Questions
  "I am good at arguing and defending positions.",
  "I enjoy researching legal cases and statutes.",
  "I am detail-oriented and enjoy dissecting legal documents.",
  "I am interested in how laws affect society.",
  "I enjoy advocating for clients and their rights.",

  // Science-Specific Questions
  "I am curious and enjoy exploring unknown phenomena.",
  "I am good at conducting experiments and analyzing data.",
  "I enjoy reading scientific journals and staying up-to-date with research.",
  "I am patient and enjoy the process of discovery.",
  "I enjoy collaborating with other scientists to advance knowledge.",

  // Social Services-Specific Questions
  "I am compassionate and enjoy helping people in need.",
  "I am good at navigating bureaucratic systems.",
  "I enjoy connecting individuals with resources and support.",
  "I am patient and enjoy working with diverse populations.",
  "I enjoy advocating for social justice and policy change.",

  // Media-Specific Questions
  "I enjoy storytelling and creating engaging content.",
  "I am good at editing and producing videos or podcasts.",
  "I am interested in how media shapes public opinion.",
  "I enjoy researching and reporting on current events.",
  "I am skilled at promoting and distributing media content effectively.",
];

const jobFields = [
  "Healthcare",
  "Art",
  "IT",
  "Education",
  "Engineering",
  "Business",
  "Law",
  "Science",
  "Social Services",
  "Media",
];

const scoreMapping = {
  1: 20, // Fully Disagree
  2: 40, // Disagree
  3: 60, // Neutral
  4: 80, // Agree
  5: 100, // Fully Agree
};

const TestComponent = ({ userId }) => {
  const [answers, setAnswers] = useState(Array(testQuestions.length).fill(3));
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 5; // Items per page
  const router = useRouter();

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = scoreMapping[value];
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/personality-assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, answers }),
    });

    if (response.ok) {
      const result = await response.json();
      alert(`Recommended career field: ${result.recommendation}`);
      router.push("/jobseeker/dashboard");
    } else {
      alert("Failed to submit test.");
    }
  };

  const totalPages = Math.ceil(testQuestions.length / itemsPerPage);

  // Get current questions
  const indexOfLastQuestion = currentPage * itemsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - itemsPerPage;
  const currentQuestions = testQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <>
      <div className="flex items-center justify-center">
        <Sidebar />
        <main className="bg-box flex-grow px-8 py-8 my-10 mx-40 w-1/4 h-3/4 rounded-3xl">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Personality Test
          </h1>
          <div className="space-y-4">
            {currentQuestions.map((question, idx) => (
              <div
                key={indexOfFirstQuestion + idx}
                className="border-b border-gray-200 pb-4 last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <p className="mb-2">{question}</p>
                  <select
                    value={answers[indexOfFirstQuestion + idx] / 20} // Convert score back to 1-5 scale for display
                    onChange={(e) =>
                      handleChange(
                        indexOfFirstQuestion + idx,
                        parseInt(e.target.value)
                      )
                    }
                    className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value={1}>Fully Disagree</option>
                    <option value={2}>Disagree</option>
                    <option value={3}>Neutral</option>
                    <option value={4}>Agree</option>
                    <option value={5}>Fully Agree</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="mr-2 bg-gray-300 text-white font-semibold rounded-lg px-4 py-2 hover:bg-gray-400 transition duration-150 ease-in-out"
            >
              Previous
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="ml-2 bg-navbar text-white font-semibold rounded-lg px-4 py-2 hover:bg-button transition duration-150 ease-in-out"
            >
              Next
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 py-2 px-4 bg-navbar text-white font-semibold rounded-lg hover:bg-button transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </main>
      </div>
    </>
  );
};

export default TestComponent;
