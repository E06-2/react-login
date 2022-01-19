import { useLocation } from 'react-router-dom';

const LoggedIn = () => {
  const location = useLocation();
  const { name } = location.state;

  return (
    <div>
      <h2>You have successfully logged in {name}</h2>
    </div>
  );
};

export default LoggedIn;
