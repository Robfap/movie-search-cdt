import { shallow } from "enzyme";
import Search from "./index";

test("renders Search", () => {
  const wrapper = shallow(
    <Search onSearch={(y) => y} delay="500" placeholder="holder" />
  );
  expect(wrapper.find(".search").length).toBe(1);
});
