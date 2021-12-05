const Name = ({
  firstName,
  lastName,
  isContinueDisabled,
  updateFirstName,
  updateLastName,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
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
