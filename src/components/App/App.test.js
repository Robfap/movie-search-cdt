import { shallow } from "enzyme";
import App from "./App";

test("renders App", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".app").length).toBe(1);
});
