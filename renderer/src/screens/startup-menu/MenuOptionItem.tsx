import { getColor } from "@utils/colors";
import { ReactPropTypes } from "react";

// component props with some extra props
interface MenuOptionItesProps {
  Icon: any;
  title: String;
  active?: boolean;
  extraProps?: ReactPropTypes | {};
}

// Main Btn for startup page component
const MenuOptionItem = ({
  Icon,
  title,
  active,
  extraProps = {},
}: MenuOptionItesProps) => (
  <div
    className={`menu-option-item ${active ? "active-tool" : ""}`}
    {...extraProps}
  >
    <div className="icon">
      <Icon size={80} color={`${active ? "white" : getColor("primary-400")}`} />
    </div>
    <div className="title">{title}</div>
  </div>
);

export default MenuOptionItem;
