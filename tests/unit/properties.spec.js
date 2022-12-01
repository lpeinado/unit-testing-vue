import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader", () => {
  test("Values are ok", () => {
    const msg = "Helloasdfaf";
    const wrapper = mount(AppHeader, {
      propsData: {
        message: msg,
      },
    });

    expect(wrapper.html()).toContain(msg);
  });
});
