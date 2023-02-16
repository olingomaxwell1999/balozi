import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link className={`nav__link`} href={href}>
      {text}
    </Link>
  );
};

export default NavItem;
