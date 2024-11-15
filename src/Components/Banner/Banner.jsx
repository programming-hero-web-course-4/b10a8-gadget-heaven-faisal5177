import BannerImg from '../../assets/images/banner.jpg';

const Banner = () => {
    return (
      <div>
        <div className="text-center border rounded-lg bg-[#9538E2] py-28 -mt-20">
          <h1 className="text-4xl font-bold text-white -mt-5">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-gray-300">
            <small>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories, we
              have it all!
            </small>
          </p>
          <button className="btn btn-sm text-[#9538E2] font-bold bg-white mt-4">Shop Now</button>
        </div>
        <div className="flex justify-center mt-18 boder rounded-lg bg-white">
          <img className="h-[300px]  w-[600px] p-3 border rounded-lg -translate-y-1/3" src={BannerImg} alt="Banner" />
        </div>
      </div>
    );
  };
  
  export default Banner;