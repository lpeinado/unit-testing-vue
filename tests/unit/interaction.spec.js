import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("tests user interaction", () => {
  test("users clicks button to make visible", async () => {
    const wrapper = mount(AppHeader);
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Thing");
  });
});
