import { useSelector, useDispatch } from "../react-redux";
import {
  getFirstName,
  getIsContinueDisabled,
  getLastName,
  updateFirstName,
  updateLastName,
} from "../reducers/name";
import { Name } from "../components";

const NamePage = () => {
  const dispatch = useDispatch();
  const firstName = useSelector(getFirstName);
  const lastName = useSelector(getLastName);
  const isContinueDisabled = useSelector(getIsContinueDisabled);

  return (
    <Name
      firstName={firstName}
      lastName={lastName}
      updateFirstName={(value) => dispatch(updateFirstName(value))}
      updateLastName={(value) => dispatch(updateLastName(value))}
      isContinueDisabled={isContinueDisabled}
    />
  );
};

export default NamePage;
