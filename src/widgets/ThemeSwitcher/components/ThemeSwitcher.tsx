import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './ThemeSwitcher.module.scss';
import LightIcon from '@shared/assets/icons/theme-light.svg';
import DarkIcon from '@shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from '@/shared/components/Button/Button';

interface IThemeSwitcher {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
