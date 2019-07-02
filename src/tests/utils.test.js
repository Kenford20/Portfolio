import { cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import { validatePhoneNumber, validateEmail } from '../utils';

afterAll(cleanup);

describe("validatePhoneNumber function", () => {
    it("validates whether a string is a valid phone number (in the US)", () => {
        expect(validatePhoneNumber("+1-(123)-456-7890")).toBe(true);
        expect(validatePhoneNumber("+1-123-456-7890")).toBe(true);
        expect(validatePhoneNumber("1-123-456-7890")).toBe(true);
        expect(validatePhoneNumber("1-(123)-456-7890")).toBe(true);
        expect(validatePhoneNumber("(123)-456-7890")).toBe(true);
        expect(validatePhoneNumber("123-456-7890")).toBe(true);

        expect(validatePhoneNumber("+1 (123) 456 7890")).toBe(true);
        expect(validatePhoneNumber("+1 123 456 7890")).toBe(true);
        expect(validatePhoneNumber("1 123 456 7890")).toBe(true);
        expect(validatePhoneNumber("1 (123) 456 7890")).toBe(true);
        expect(validatePhoneNumber("(123) 456 7890")).toBe(true);
        expect(validatePhoneNumber("123 456 7890")).toBe(true);

        expect(validatePhoneNumber("1 (123)-456-7890")).toBe(true);
        expect(validatePhoneNumber("+11234567890")).toBe(true);
        expect(validatePhoneNumber("+1-1234567890")).toBe(true);
        expect(validatePhoneNumber("11234567890")).toBe(true);

        expect(validatePhoneNumber("123 456 78901")).toBe(false);
        expect(validatePhoneNumber("123 4567 890")).toBe(false);
        expect(validatePhoneNumber("1 1234 456 890")).toBe(false);
        expect(validatePhoneNumber("123 45 78901")).toBe(false);
        expect(validatePhoneNumber("12 456 78901")).toBe(false);
        expect(validatePhoneNumber("abc 456 7890")).toBe(false);
        expect(validatePhoneNumber("a12 b56 c890")).toBe(false);
        expect(validatePhoneNumber("1 1234 456 890")).toBe(false);
        expect(validatePhoneNumber("(1 12)3 456 890")).toBe(false);
        expect(validatePhoneNumber("123 (456) 890")).toBe(false);
        expect(validatePhoneNumber("1 (123 456) 890")).toBe(false);
        expect(validatePhoneNumber("+123 456 7890")).toBe(false);
        expect(validatePhoneNumber("1+123 456 7890")).toBe(false);
    });
});

describe("validateEmail function", () => {
    it("validates whether a string follows valid email formatting", () => {
        expect(validateEmail("foo@foo.com")).toBe(true);
        expect(validateEmail("foo123@foo.net")).toBe(true);
        expect(validateEmail("foo-12_3@foo.gov")).toBe(true);
        expect(validateEmail("foo#123@foo.edu")).toBe(true);
        expect(validateEmail("foo!!!@foo.co.uk")).toBe(true);
        expect(validateEmail("FoOoO@foo.co.ca")).toBe(true);
        expect(validateEmail("FoO.bAr@foo.co.us")).toBe(true);
        expect(validateEmail("123FoOoO@foo_bar.online")).toBe(true);

        expect(validateEmail("foo@foo_bar")).toBe(false);
        expect(validateEmail("foobar123")).toBe(false);
        expect(validateEmail("@foobar.com")).toBe(false);
        expect(validateEmail("foo123@gmail.")).toBe(false);
        expect(validateEmail("foo@bar_com")).toBe(false);
        expect(validateEmail("foo@bar_com")).toBe(false);
    });
})

