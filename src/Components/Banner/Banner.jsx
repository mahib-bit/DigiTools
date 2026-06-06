import 'react';
import BanImg from '../../assets/banner.png';
import play from '../../assets/play.png';

const Banner = () => {
  return (
    <div className='flex max-w-[1500px] mx-auto justify-between items-center
    py-10 px-5 sm:flex-row flex-col gap-10'>
      <div className='flex flex-col'>
        <h3 className='border border-[#4F39F6] max-w-[270px] text-[#4F39F6] px-3 py-1 rounded-full'>New: AI-Powered Tools Available</h3>
        <h1 className='font-extrabold text-6xl mt-5 mb-5'>Supercharge Your Digital Workflow</h1>
        <p className='max-w-[600px] leading-8'>
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>
        <p>Explore Products</p>
        <div className='flex gap-1.5'>
        <button className='btn rounded-3xl bg-[#4F39F6] mt-5'>Explore Products</button>
        <button className='btn rounded-3xl text-[#4F39F6] border border-[#4F39F6] mt-5'><img src={play} alt="Play" /> Watch Demo</button>
      </div>
      </div>
      <div>
        <img src={BanImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;