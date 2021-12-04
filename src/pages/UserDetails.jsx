import { useSelector } from "../react-redux";
import { UserDetails } from "../components";
import { getBirthday } from "../reducers/birthday";
import { getFullName } from "../reducers/name";

const UserDetailsPage = () => {
  const { value: birthday } = useSelector(getBirthday);
  const fullName = useSelector(getFullName);
  return <UserDetails birthday={birthday} fullName={fullName} />;
};

export default UserDetailsPage;
