import { useNavigate } from "react-router";
import { BirthdayForm } from "../components";

const Birthday = ({ shouldRedirect, ...rest }) => {
  const navigate = useNavigate();

  return <BirthdayForm {...rest} onSubmit={() => navigate("/user-details")} />;
};

export default Birthday;
