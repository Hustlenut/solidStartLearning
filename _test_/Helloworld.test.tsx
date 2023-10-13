import {describe, it, expect} from 'vitest';
import { render, screen } from '@solidjs/testing-library';
import Test from '~/routes/test';

describe('HelloWorld component', () => {
  it('should render Hello World', () => {
    render(() => <Test />);
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeTruthy();
  });
});