import { useNavigate } from "react-router";

const Name = ({
  firstName,
  lastName,
  isContinueDisabled,
  updateFirstName,
  updateLastName,
}) => {
  const navigate = useNavigate();

  return (
    <form onSubmit={() => navigate("/birthday")}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          id="firstName"
          placeholder="First name goes here..."
          value={firstName}
          onChange={({ target: { value } }) => updateFirstName(value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          id="lastName"
          placeholder="Last name goes here..."
          value={lastName}
          onChange={({ target: { value } }) => updateLastName(value)}
        />
      </div>
      <button type="submit" disabled={isContinueDisabled}>
        Continue
      </button>
    </form>
  );
};

export default Name;
