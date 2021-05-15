import {slog} from "../Pages/Contacts.js"

test('slog', () => {
  expect(slog(1, 2, 3)).toBe(0);
});