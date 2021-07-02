import { mapMovies } from "./helpers";

describe("mapMovies", () => {
  test("has proper error if argument is null", () => {
    let respMovies = null;
    expect(mapMovies(respMovies).error).toBe(
      "Unexpected error. Please try again later."
    );
  });

  test("has proper error if argument is empty object", () => {
    let respMovies = {};
    expect(mapMovies(respMovies).error).toBe(
      "Unexpected error. Please try again later."
    );
  });

  test("has proper error if response has an error", () => {
    const customErrorText = "Custom error text";
    let respMovies = {
      Response: "False",
      Error: customErrorText,
    };
    expect(mapMovies(respMovies).error).toBe(customErrorText);
  });

  test("has empty list if response does not have Search", () => {
    let respMovies = {
      Response: "True",
    };
    expect(mapMovies(respMovies).movies).toEqual([]);
  });

  test("has return movie list", () => {
    const list = [{}, {}, {}];
    let respMovies = {
      Response: "True",
      Search: list,
    };
    expect(mapMovies(respMovies).movies).toEqual(list);
  });
});
