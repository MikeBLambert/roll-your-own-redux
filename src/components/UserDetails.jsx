const UserDetails = ({ fullName, birthday }) => {
  return (
    <>
      <h1>User Details</h1>
      <h2>Name: {fullName}</h2>
      <h2>Birthday: {birthday}</h2>
    </>
  );
};

export default UserDetails;
