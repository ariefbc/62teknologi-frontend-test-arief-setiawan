import { Link } from "react-router-dom";

const ListItemBusiness = ({ business }) => {
  return (
    <li key={business.id}>
      <Link to={`detail/${business.alias}`}>{business.name}</Link>
    </li>
  );
};

export default ListItemBusiness;
