import { shallow } from "enzyme";
import MovieCard from "./index";

test("renders movieCard", () => {
  const wrapper = shallow(<MovieCard data={{ Title: "Test", Year: "2000" }} />);
  expect(wrapper.find(".movie-card__info").text()).toBe("Test (2000)");
});
