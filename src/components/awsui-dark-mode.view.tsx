import AwsuiTheme, { AwsuiThemeRootSelector } from 'awsui-theme';
import { ReactElement, ReactNode } from 'react';
import DARK_THEME from '../constants/dark-theme';

interface Props {
  children?: ReactNode;
  disabled?: boolean;
  root?: null | string;
}

export default function AwsuiDarkMode({
  children,
  disabled,
  root,
}: Props): ReactElement {
  if (disabled === true) {
    return <>{children}</>;
  }
  if (typeof root !== 'string') {
    return <AwsuiTheme {...DARK_THEME}>{children}</AwsuiTheme>;
  }
  return (
    <AwsuiThemeRootSelector.Provider value={root}>
      <AwsuiTheme {...DARK_THEME}>{children}</AwsuiTheme>
    </AwsuiThemeRootSelector.Provider>
  );
}
