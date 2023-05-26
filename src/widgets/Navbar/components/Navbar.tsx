import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/components/AppLink/AppLink';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to="/" className={styles.mainLink} theme={AppLinkTheme.SECONDARY}>
          Главная
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
