import 'react';
import BanImg from '../../assets/banner.png';
import play from '../../assets/play.png';
import active from '../../assets/active.png';

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row max-w-[1500px] mx-auto justify-center items-center lg:gap-16 xl:gap-32 py-12 md:py-20 px-6 md:px-12 mt-4'>
      
      <div className='flex flex-col items-center text-center lg:items-start lg:text-left flex-1 max-w-[650px]'>
        
        <h3 className='flex items-center gap-2 border border-[#4F39F6] text-[#4F39F6] text-xs md:text-sm px-4 py-1.5 rounded-full font-medium tracking-wide'>
          <img src={active} alt="" className="w-4 h-4 object-contain" />
          New: AI-Powered Tools Available
        </h3>
        <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-white leading-[1.15] mt-6 mb-4'>
          Supercharge Your <span className="text-[#4F39F6]">Digital Workflow</span>
        </h1>
        <p className='text-slate-600 text-base md:text-lg leading-relaxed max-w-[550px]'>
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>
        <div className='flex flex-wrap justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto'>
          <button className='btn rounded-full bg-[#4F39F6] text-white hover:bg-[#3b27cf] px-6 py-3 h-auto min-h-0 border-none text-sm md:text-base transition-all shadow-md shadow-blue-500/10'>
            Explore Products
          </button>
          <button className='btn rounded-full bg-transparent text-[#4F39F6] border border-[#4F39F6] hover:bg-[#4F39F6]/5 px-6 py-3 h-auto min-h-0 text-sm md:text-base flex items-center gap-2 transition-all'>
            <img src={play} alt="Play" className="w-4 h-4 object-contain" /> 
            Watch Demo
          </button>
        </div>
      </div>
      <div className='flex-1 w-full max-w-[550px] lg:max-w-[650px] mt-8 lg:mt-0 flex justify-center'>
        <img 
          src={BanImg} 
          alt="Banner"
        />
      </div>

    </div>
  );
};

export default Banner;