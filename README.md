# AWS UI Dark Mode

[![version](https://img.shields.io/npm/v/awsui-dark-mode.svg)](https://www.npmjs.com/package/awsui-dark-mode)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/awsui-dark-mode.svg)](https://www.npmjs.com/package/awsui-dark-mode)
[![downloads](https://img.shields.io/npm/dt/awsui-dark-mode.svg)](https://www.npmjs.com/package/awsui-dark-mode)

The `AwsuiDarkMode` components applies a dark mode theme to all child node
[AWS UI components](https://www.npmjs.com/package/@awsui/components-react).

## Install

- `npm install awsui-dark-mode` or
- `yarn add awsui-dark-mode`

## Use

Wrap the `AwsuiDarkMode` component around your application. While
`AwsuiDarkMode` does not currently use React contexts, this wrapper would most
likely be placed alongside your React context providers, such as React Router or
Redux.

```javascript
import AwsuiDarkMode from 'awsui-dark-mode';

export default function App() {
  return (
    <AwsuiDarkMode>
      <Home />
    </AwsuiDarkMode>
  );
}
```

## Customize

To apply your own theme overrides to the AWS UI dark mode, use the
[`awsui-theme`](https://www.npmjs.com/package/awsui-theme) package and mount the
`AwsuiTheme` component _inside_ `AwsuiDarkMode`.

```javascript
import AwsuiDarkMode from 'awsui-dark-mode';
import AwsuiTheme from 'awsui-theme';

export default function App() {
  return (
    <AwsuiDarkMode>
      <AwsuiTheme colorTextAccent="red">
        <Home />
      </AwsuiTheme>
    </AwsuiDarkMode>
  );
}
```

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover) via GitHub's
Sponsors Program.
