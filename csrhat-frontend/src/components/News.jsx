const News = () => {
  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-gradient-to-b from-purple-100 to-purple-50 py-10 px-6">

      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Latest News</h1>

      <div className="max-w-5xl mx-auto space-y-6">

        {/* News Card 1 */}
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-40 h-32 bg-gray-300 flex-shrink-0">
            {/* Replace this div with actual <img src=""> later */}
          </div>
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-800">Techhhh Industry Growth</h2>
            <p className="text-gray-600 text-sm mt-2">
              The technology sector continues to see fast-paced growth, driven by AI, automation, and cloud computing...
            </p>
          </div>
        </div>

        {/* News Card 2 */}
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-40 h-32 bg-gray-300 flex-shrink-0"></div>
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-800">Job Market Trends</h2>
            <p className="text-gray-600 text-sm mt-2">
              Companies are increasingly hiring remote developers and UI/UX professionals as digital products expand...
            </p>
          </div>
        </div>

        {/* News Card 3 */}
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-40 h-32 bg-gray-300 flex-shrink-0"></div>
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-800">New Hiring Tools</h2>
            <p className="text-gray-600 text-sm mt-2">
              Modern recruitment platforms now use AI to screen resumes, shortlist candidates, and enhance HR workflows...
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default News;
