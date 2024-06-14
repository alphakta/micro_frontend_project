import { test, expect } from 'vitest';
import { test, expect } from 'vitest';
import App from './../host/src/App';

test('Host component renders without crashing', () => {
  expect(() => <App />).not.toThrow();
});
