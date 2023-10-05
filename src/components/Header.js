import classes from './Header.module.css';
//import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { authAction } from '../store/index';
import { useDispatch,useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state)=>state.auth.isAuthenthicated);

  const logoutHandler = () => {
    dispatch(authAction.isLogout());
  }

  return (
    <header className = {classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && 
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick = {logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;