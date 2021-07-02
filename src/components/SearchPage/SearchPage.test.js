import { shallow } from "enzyme";
import SearchPage from "./index";

test("renders SearchPage", () => {
  const wrapper = shallow(<SearchPage />);
  expect(wrapper.find(".search-page").length).toBe(1);
});
