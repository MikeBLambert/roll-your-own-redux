const UserDetails = ({ fullName, birthday }) => {
  return (
    <>
      <h1>User Details</h1>
      <div>Name: {fullName}</div>
      <div>Birthday: {birthday}</div>
    </>
  );
};

export default UserDetails;
