import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const DemoUserButton = ({ setErrors }) => {
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.preventDefault();
    return dispatch(
      sessionActions.loginUser({ credential: "demo", password: "password" })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  return <button onClick={demoLogin}>Demo User</button>;
};

export default DemoUserButton;
