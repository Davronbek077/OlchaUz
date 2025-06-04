import NavbarBottom from "../navbar/NavbarBottom";
import NavbarMiddle from "../navbar/NavbarMiddle";
import { useLocation } from "react-router-dom";
import { data } from "../../mock/datamock";

const NavbarMain = () => {
  const { pathname } = useLocation();
  return pathname.includes("login") ? (
    <></>
  ) : (
    <>
      <NavbarMiddle data={data} />
      <NavbarBottom />
    </>
  );
};

export default NavbarMain;
