const functions = require("./functions");
const reverseString = require("./reverseString");

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

const initDatabase = () => console.log("Init Database");
const closeDatabase = () => console.log("close Database");

beforeAll(() => {
  console.log("Run Before all test executed");
});

test("2 + 2 should adds to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("2 + 2 should should not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be undefined", () => {
  expect(functions.isUndefined()).toBeUndefined();
});
test("should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

//toBe is used for Primitive value, for non-primitive value use toEqual

test("should full name space in between", () => {
  expect(functions.createUser("yogendra", "saxena")).toEqual({
    firstName: "yogendra",
    lastName: "saxena",
  });
});

test("should be under 1000", () => {
  const load1 = 400;
  const load2 = 400;
  expect(load1 + load2).toBeLessThanOrEqual(1000);
});

test("Should start with I", () => {
  expect("Iteam").toMatch(/^I/);
});

test("Admin should be in username", () => {
  const username = ["admin", "yogendra", "rohit"];
  expect(username).toContain("admin");
});

test("user fetched title should be delectus aut autem", async () => {
  expect.assertions(1);
  const { data } = await functions.fetchUser();
  expect(data.title).toBe("delectus aut autem");
});

test("Should reverse yogendra", () => {
  expect(reverseString("yogendra")).toBe("ardnegoy");
});

describe("Name of the group", () => {
  beforeEach(() => {
    console.log("before Each in describe");
  });
  test("should yogendra equal yogendra", () => {
    expect("yogendra").toBe("yogendra");
  });
});
