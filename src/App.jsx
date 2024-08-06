function App() {
  return (
    <div className="bg-gradient-to-r from-[#11071F] to-[#3b215f] mt-20">
      <div className="max-w-screen-xl mx-auto px-3 md:px-3 lg:px-0 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 relative">
          <div className="mt-10">
            <h6 className="text-violet-500 text-base md:text-2xl font-semibold pt-6">
              Featured Project
            </h6>
            <h3 className="text-gray-200 font-bold text-base md:text-2xl">
              Lorem ipsum dolor sit amet
            </h3>
            <div className="bg-gray-50 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl px-3 py-4 w-3/4 mt-6 ">
              <p className="text-gray-100 text-sm md:text-lg">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>
          </div>

          <div className="md:w-3/5 mt-6 md:mt-0 md:relative md:pl-0 ">
            <img
              src="https://i.ibb.co/jZ6Lxbv/abolarinwa-babafemi-A8o4-OQp-QPf-M-unsplash.jpg"
              alt="Example Project"
              className="w-full md:w-auto rounded-lg shadow-lg z-20 relative "
            />
            <div
              className="absolute top-1/3 -left-16  w-full h-full rounded-lg z-10"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
