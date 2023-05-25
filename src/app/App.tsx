import './styles/index.scss';
import { Link } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@app/providers/ThemeProvider';
import AppRouter from './providers/routes/components/AppRouter';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
