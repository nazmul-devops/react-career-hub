import userImage from '../../assets/images/user.png';
const Hero = () => {
  return (
    <div className='bg-purple-400 bg-opacity-20'>
      <div className="hero min-h-auto ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img className="ml-16 max-w-2xl flex justify-end" src={userImage}/>
        <div>
          <h1 className="text-7xl font-bold flex-grow">
            One Step <br /> Closer To Your <br /> <span className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text'>Dream Job</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Get Started</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
