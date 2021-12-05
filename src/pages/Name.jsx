import { useNavigate } from "react-router";
import { NameForm } from "../components";

const Name = (props) => {
  const navigate = useNavigate();

  return <NameForm {...props} onSubmit={() => navigate("/birthday")} />;
};

export default Name;
