import { cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import { validatePhoneNumber } from '../utils';

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
    });
})