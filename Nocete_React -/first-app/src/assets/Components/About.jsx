export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 p-0">
        <div className="max-w-4xl w-full bg-gray-300 shadow-lg rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src="./public/Profile.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md mb-6 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800">Jeferson Nocete</h1>
              <p className="mt-4 text-gray-700">
                Hi i'm IT student develop strong problem-solving skills through coding, systems design, network configuration, and troubleshooting.
              </p>
            </div>
          
             
            </div>
          </div>
        </div>
    
    );
  }
  