import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import LeftNav from "./LeftNav";
const Nav = ({title}) => {
  return (
    <>
      <TopNav title={title}/>
      <>
      <div className="hidden md:block">
            <LeftNav />
          </div>
          <div className="md:hidden">
            <BottomNav />
          </div>
          </>
    </>
  );
};

export default Nav;
