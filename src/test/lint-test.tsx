// Example of a properly formatted and lint-compliant component
import { FC } from 'react';

interface ComponentProps {
  title: string;
}

export const Component: FC<ComponentProps> = ({ title }): JSX.Element => {
  return (
    <div className="test-component">
      <h1>{title}</h1>
    </div>
  );
};

export default Component;
