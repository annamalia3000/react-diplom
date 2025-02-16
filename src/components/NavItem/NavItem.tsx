import { NavLink } from "react-router-dom";

export interface NavItemProps {
  label: string;
  link: string;
}

const active = ({ isActive }: { isActive: boolean }) =>
  isActive ? " nav-link active" : "nav-link";

export const NavItem = ({ label, link }: NavItemProps) => {
  return (
    <li className="nav-item">
      <NavLink to={link} className={active}>
        {label}
      </NavLink>
    </li>
  );
};
