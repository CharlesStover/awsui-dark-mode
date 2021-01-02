import { render } from '@testing-library/react';
import AwsuiDarkMode from '.';

describe('AwsuiDarkMode', (): void => {
  it('should not crash', (): void => {
    render(<AwsuiDarkMode />);
  });
});
