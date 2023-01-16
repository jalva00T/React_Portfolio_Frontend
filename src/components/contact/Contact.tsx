import { ChangeEvent, FormEvent, useState, useRef } from 'react';
import axios from 'axios';
import "./contact.scss"
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type FormState = {
  full_name: string;
  email: string;
  message: string;
}

type ServiceMessage = {
  class: string;
  text: string;
}

export default function Contact() {
  const formId = "3JdZrfQ7";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = "6LeMzpYhAAAAALhNSKjAo59NpZlybt1SNhxxKFL-";
  const recaptchaRef = useRef<any>();

  const initialFormState = {
    full_name: "",
    email: "",
    message: "",
  }

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [message, setMessage] = useState<ServiceMessage>();
  const [recaptchaToken, setRecaptchaToken] = useState<string>();

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: "bg-green-500",
        text: "You did it!, I'm looking forward to reading your message and will be in touch with you soon. :D",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        class: "bg-red-500",
        text: "Oops, There was a problem with launch. Please try again. :)",
      });
    };
  };

  const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    const key = id as keyof FormState
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token: string | null) => {
    setRecaptchaToken(token as string);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="/assets/contactpage/shake_inverted5.svg" alt="" />
      </div>
      <div className="right">
        <div className="formWrapper">
          <h2>Contact</h2>
          <p>I'd love to hear from you! Please don't hesitate to ask a question or send a request about some work we could do together.</p>
          <form onSubmit={submitForm}>
            <input
              onChange={updateFormControl}
              type="text"
              placeholder="Full Name"
              id="full_name"
              value={formState.full_name}
            />
            <input
              onChange={updateFormControl}
              type="text"
              placeholder="Email"
              id="email"
              value={formState.email}
            />
            <textarea
              onChange={updateFormControl}
              placeholder="Type what you feel..."
              id="message"
              value={formState.message}
            ></textarea>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaKey}
              onChange={updateRecaptchaToken}
            />

            <button disabled={submitting}>
              {submitting ? "Launching It!" : "Launch It!"}
            </button>
          </form>
          {message && (
            <p className="message">
              {message.text}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
