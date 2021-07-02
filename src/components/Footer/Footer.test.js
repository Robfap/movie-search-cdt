import { shallow } from "enzyme";
import Footer from "./index";

test("renders Footer", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find("footer").length).toBe(1);
});
