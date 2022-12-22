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

    const payload = { name: "Lluís Peinado" };
    expect(calls[0][0]).toMatchObject(payload);
  });
});

describe("Another login form test", () => {
  test("We put something in the box", () => {
    const component = mount(LoginForm);
    const input = component.find("input[type='text']");

    input.setValue("Adriano Celentano");
    //const button = component.find("button[type='submit']");
    component.trigger("submit");

    const emitted = component.emitted("formSubmitted");
    expect(emitted).toHaveLength(1);
  });
});
