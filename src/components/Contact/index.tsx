import { useForm, ValidationError } from "@formspree/react";
import "./style";

export function Contact(): JSX.Element {
  const [state, handleSubmit] = useForm("xpzbyryw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      action="https://formspree.io/f/xpzbyryw"
      method="POST"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Digite o seu e-mail</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
