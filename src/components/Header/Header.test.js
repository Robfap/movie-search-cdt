import { shallow } from "enzyme";
import Header from "./index";

test("renders Header", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("header").length).toBe(1);
});
