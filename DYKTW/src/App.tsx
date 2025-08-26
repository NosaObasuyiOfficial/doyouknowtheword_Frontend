function App() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/bg_play.mov" // place in public/videos
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="relative flex items-center justify-center h-full">
          <div className="absolute bg-[#3E434C] h-[140px] w-full blur-xl"></div>
        
        
        <h1 className="relative text-white text-[20px] font-bold z-20 text-center">Coming Soon</h1>
        </div>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
      </div>
    </>
  );
}

export default App;
