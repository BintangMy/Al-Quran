const TopNav = ({title}) => {
  return (
    <div>
      <div className="md:flex fixed bg-gray-900 pl-5 left-0 lg:top-0 pt-4 right-0 h-16 shadow-none items-center bg-primary text-primary z-50">
        <div className="flex container mx-auto items-center justify-between w-full ">
          <div className="flex space-x-4 mr-8 items-center font-montserrat">
            <div className="font-primary text-gray-700 font-bold text-xl w-9 h-9 bg-emerald-300 rounded-xl"><img src="https://ik.imagekit.io/bintangtopup/Quran/quranMobile.png?updatedAt=1679725112501" alt="" /></div>
            <p className="font-primary font-bold text-xl">Al-Qur'an</p>
            <p className="font-primary font-bold text-xl text-gray-600">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
