import { betterStringLib } from './betterStringLib';

const { equal, reverse } = betterStringLib();

describe('better string lib', () => {
  test('equal use to compare two string of any language.', () => {
    expect(equal("a", "a")).toBe(true);
    expect(equal("mañana", "mañana")).toBe(true);
  });

  test('reverse function use to reverse the given string.', () => {
    expect(reverse("ab")).toBe("ba");
    expect(reverse("foo 𝌆 bar")).toBe("rab 𝌆 oof");
    expect(reverse("mañana mañana")).toBe("anañam anañam".normalize());
  });
});
