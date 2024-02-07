import { getPi } from "./getPi"
import { test, expect } from 'vitest';

test('PI is 3.14', () => {
  expect(getPi()).toBe(3.14)
})

