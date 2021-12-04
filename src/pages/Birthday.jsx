import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getBirthday,
  getIsSubmitDisabled,
  updateBirthday,
} from "../reducers/birthday";
import { Birthday } from "../components";

const BirthdayPage = () => {
  const dispatch = useDispatch();
  const birthday = useSelector(getBirthday);
  const isSubmitDisabled = useSelector(getIsSubmitDisabled);

  return (
    <Birthday
      isSubmitDisabled={isSubmitDisabled}
      updateBirthday={(value) => dispatch(updateBirthday(value))}
      birthday={birthday}
    />
  );
};

export default BirthdayPage;
