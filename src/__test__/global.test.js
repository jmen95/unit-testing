const greeting = "Hello World";

test("should contain a world text", () => {
  expect(greeting).toMatch(/World/i);
});

const fruits = ["Apple", "Orange", "Banana", "Strawberry"];

test("should contain a banana", () => {
  expect(fruits).toContain("Banana");
});

const numberOfFruits = fruits.length;
test("should have fruit count greater than 3", () => {
  expect(numberOfFruits).toBeGreaterThan(3);
});

const truth = true;
test("should be truth", () => {
  expect(truth).toBeTruthy();
});

/**
 *
 * @param {string} str
 * @param {function} cb
 * @returns
 */
const reverseString = (str, cb) => cb(str.split("").reverse().join(""));

test("should reverse an hello", () => {
  reverseString("Hello", (reversedString) => {
    expect(reversedString).toBe("olleH");
  });
});

/**
 *
 * @param {string} str
 * @param {function} cb
 * @returns
 */
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error("str is Required"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("should reverse an Hello with a promise", () => {
  reverseString2("Hello").then((reversedString) => {
    expect(reversedString).toBe("olleH");
  });
});

test("should reverse an Hello with a async and await", async () => {
  const reversedString = await reverseString2("Hello");
  expect(reversedString).toBe("olleH");
});

afterEach(() => {
  console.log("After Each Test");
});

afterAll(() => {
  console.log("After All Tests");
});

beforeEach(() => {
  console.log("Before Each Test");
});

beforeAll(() => {
  console.log("Before All Tests");
});
