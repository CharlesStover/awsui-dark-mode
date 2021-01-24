import { render } from '@testing-library/react';
import AwsuiDarkMode from '..';

describe('AwsuiDarkMode', (): void => {
  it('should not crash', (): void => {
    render(
      <AwsuiDarkMode>
        <>test</>
      </AwsuiDarkMode>,
    );
  });

  it('should not crash when disabled', (): void => {
    render(
      <AwsuiDarkMode disabled>
        <>test</>
      </AwsuiDarkMode>,
    );
  });

  it('should not crash when given a root', (): void => {
    render(
      <AwsuiDarkMode root="body">
        <>test</>
      </AwsuiDarkMode>,
    );
  });
});
