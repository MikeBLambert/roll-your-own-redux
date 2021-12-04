import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/name")}>Lets Started!</button>;
};

export default Home;
