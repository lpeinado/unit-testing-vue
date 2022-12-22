import AppHeader from "@/components/AppHeader.vue";
import { mount } from "@vue/test-utils";

describe("Testing app header", () => {
  test("shouldn't display button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });
  test("Should display button", async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
  test("should display a message", () => {
    const component = mount(AppHeader, { propsData: { message: "Tio rasta" } });
    expect(component.html()).toContain("Tio rasta");
  });
});
