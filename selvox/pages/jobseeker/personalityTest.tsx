import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Sidebar from "./sidebar";

const testQuestions = [
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
  "I am deeply empathetic and enjoy caring for others.",
  "I have a strong stomach and am comfortable dealing with medical procedures.",
  "I am detail-oriented and enjoy organizing patient records.",
  "I am patient and enjoy working with children.",
  "I am good at managing schedules and coordinating care plans.",
  "I have a natural talent for drawing or painting.",
  "I enjoy expressing myself creatively through art.",
  "I am skilled at designing and creating visual elements.",
  "I appreciate the beauty in everyday objects and scenes.",
  "I enjoy teaching others about art and its history.",
  "I am fascinated by how technology works and enjoy problem-solving.",
  "I enjoy coding and writing software.",
  "I am good at understanding complex systems and networks.",
  "I am comfortable troubleshooting computer issues.",
  "I enjoy staying up-to-date with the latest tech trends.",
  "I love learning new things and sharing knowledge with others.",
  "I am patient and enjoy guiding students through difficult subjects.",
  "I am organized and enjoy planning lesson plans.",
  "I enjoy mentoring and seeing students grow academically.",
  "I am passionate about educational reform and improving learning outcomes.",
  "I enjoy designing and building things.",
  "I am good at solving puzzles and logical problems.",
  "I am detail-oriented and enjoy precision work.",
  "I am interested in how machines and structures work.",
  "I enjoy researching and applying scientific principles to real-world problems.",
  "I am good at analyzing financial statements.",
  "I enjoy strategic planning and setting goals.",
  "I am effective at negotiating and resolving conflicts.",
  "I have a knack for identifying market trends.",
  "I enjoy leading teams and motivating employees.",
  "I am good at arguing and defending positions.",
  "I enjoy researching legal cases and statutes.",
  "I am detail-oriented and enjoy dissecting legal documents.",
  "I am interested in how laws affect society.",
  "I enjoy advocating for clients and their rights.",
  "I am curious and enjoy exploring unknown phenomena.",
  "I am good at conducting experiments and analyzing data.",
  "I enjoy reading scientific journals and staying up-to-date with research.",
  "I am patient and enjoy the process of discovery.",
  "I enjoy collaborating with other scientists to advance knowledge.",
  "I am compassionate and enjoy helping people in need.",
  "I am good at navigating bureaucratic systems.",
  "I enjoy connecting individuals with resources and support.",
  "I am patient and enjoy working with diverse populations.",
  "I enjoy advocating for social justice and policy change.",
  "I enjoy storytelling and creating engaging content.",
  "I am good at editing and producing videos or podcasts.",
  "I am interested in how media shapes public opinion.",
  "I enjoy researching and reporting on current events.",
  "I am skilled at promoting and distributing media content effectively.",
];

const scoreMapping = {
  1: 20,
  2: 40,
  3: 60,
  4: 80,
  5: 100,
};

const PersonalityTest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questionsPerPage = 5;
  const totalPages = Math.ceil(testQuestions.length / questionsPerPage);

  useEffect(() => {
    // Initialize answers state based on currentPage
    const initialAnswers = Array.from(
      { length: questionsPerPage },
      (_, i) => i + 1
    );
    setAnswers(initialAnswers);
  }, [currentPage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = Cookies.get("userId");
    if (!userId) {
      alert("You need to log in first.");
      return;
    }

    const results = testQuestions
      .slice(
        (currentPage - 1) * questionsPerPage,
        currentPage * questionsPerPage
      )
      .reduce((acc, question, index) => {
        acc[question] = scoreMapping[answers[index - 1]];
        return acc;
      }, {});

    try {
      const response = await axios.post(
        "https://localhost:7095/api/PersonalityTest/submit",
        {
          userId: parseInt(userId),
          results,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setResult(response.data.recommendedFields);
    } catch (err) {
      console.error(
        "Error submitting assessment:",
        err.response?.data || err.message
      );
    }
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = parseInt(value);
    setAnswers(newAnswers);
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          <div className=" max-w-sg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <h1 className="text-2xl font-bold mb-12 text-center">
              Personality Test
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {testQuestions
             .slice(
                  (currentPage - 1) * questionsPerPage,
                  currentPage * questionsPerPage
                )
             .map((question, index) => (
                  <div key={index} className="mb-4">
                    <p className="mb-2 text-lg">{question}</p>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <label
                          key={value}
                          className="flex flex-col items-start w-full"
                        >
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={value}
                            checked={answers[index] === value}
                            onChange={(e) =>
                              handleAnswerChange(index, e.target.value)
                            }
                            className="mr-2"
                          />
                          <span>{value}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
            </form>
            {result && (
              <div className="mt-4">
                <h2 className="text-xl font-bold text-center">
                  Recommended Job Fields:
                </h2>
                <ul className="list-disc pl-5">
                  {result.map((field, index) => (
                    <li key={index}>{field}</li>
                  ))}
                </ul>
              </div>
            )}
            <nav aria-label="Pagination" className="flex justify-between mt-4">
              <button
                onClick={() =>
                  setCurrentPage(currentPage > 1? currentPage - 1 : 1)
                }
                disabled={currentPage === 1}
                className="bg-button hover:bg-button-700 text-gray-900 px-4 py-2 rounded"
              >
                Previous
              </button>
              <span className="px-2">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage < totalPages? currentPage + 1 : totalPages
                  )
                }
                className="bg-button hover:bg-button-700 text-gray-900 px-4 py-2 rounded"
              >
                Next
              </button>
            </nav>
            <button
              type="submit"
              className="bg-button hover:bg-button-700 text-gray-900 font-bold py-2 px-4 rounded block mt-4 w-full"
            >
              Submit
            </button>
          </div>
        </main>
      </div>
    </>
  );
  
};

export default PersonalityTest;
