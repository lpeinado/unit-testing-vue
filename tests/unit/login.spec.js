import { mount } from "@vue/test-utils";
import LoginForm from "@/components/LoginForm.vue";

describe("LoginForm tests", () => {
  test("we trigger the button", () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find("input[type='text']");

    input.setValue("Lluís Peinado");
    wrapper.trigger("submit");

    const calls = wrapper.emitted("formSubmitted");
    expect(calls).toHaveLength(1);

    const paload = { name: "Lluís Peinado" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(paload);
  });
});
