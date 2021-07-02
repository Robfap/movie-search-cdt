import { shallow } from "enzyme";
import MovieList from "./index";

test("renders MovieList children", () => {
  const wrapper = shallow(<MovieList movies={[{ imdbID: 11 }]} />);
  expect(wrapper.find(".movie-list").length).toBe(1);
});

test("renders error message if error exist", () => {
  const wrapper = shallow(
    <MovieList movies={[{ imdbID: 11 }]} error="Some error" />
  );
  expect(wrapper.find(".error-message").text()).toBe("Some error");
});
