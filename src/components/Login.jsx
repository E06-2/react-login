import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    name: '',
    password: '',
    authorized: false,
  });

  const NAME = process.env.REACT_APP_NAME;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  const navigate = useNavigate();

  const success = () => {
    setData({ ...data, authorized: true });
    navigate('logged-in', { state: { name: data.name } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    NAME === data.name && PASSWORD === data.password
      ? success()
      : navigate('alien');
  };

  return (
    <div>
      <h2>Please Login</h2>
      <form>
        <input
          type='text'
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder='Enter your name'
        />
        <input
          type='text'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder='Enter your password'
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
