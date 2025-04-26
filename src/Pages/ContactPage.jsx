import React from "react";
import { MainLayout, InnerLayout } from "../Styles/layouts";
import Title from "../Components/Title";
import styled from "styled-components";
import ContactItem from "../Components/ContactItem";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const initialData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactPage() {
  const [data, setData] = React.useState(initialData);

  const phoneIcon = <PhoneIcon />;
  const emailIcon = <EmailIcon />;
  const locationIcon = <LocationOnIcon />;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const success = () => toast.success("Message sent successfully!");
  const failure = () => toast.error("Failed to send message!");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_z90y3a8",        // your service ID
        "template_p5ijrmj",        // your template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "user_Cv8nH2eh9OtEU5NNMgX7O" // your user ID (public key)
      )
      .then((result) => {
        console.log(result.text);
        success();
        setData(initialData);
      })
      .catch((error) => {
        console.error(error.text);
        failure();
      });
  };

  return (
    <MainLayout>
      <ToastContainer />
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Let's work together</h4>
            </div>
            <form className="form" onSubmit={onSubmitHandler}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={data.subject}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Enter your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  value={data.message}
                  onChange={onChangeHandler}
                  required
                ></textarea>
              </div>
              <div
                style={{ marginBottom: "3rem" }}
                className="form-field form-button"
              >
                <input
                  type="submit"
                  value="Send Message"
                  style={{
                    width: "10rem",
                    cursor: "pointer",
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    border: "none",
                    padding: "0.8rem",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </form>
          </div>

          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phoneIcon}
              contact1={"+917028805297"}
            />
            <ContactItem
              title={"Email"}
              icon={emailIcon}
              contact1={"omkarvgawade@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={locationIcon}
              contact1={"Kolhapur, Maharashtra"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media screen and (max-width: 978px) {
      grid-template-columns: 1fr;
    }
  }

  .contact-title h4 {
    color: var(--white-color);
    padding: 1rem 0;
    font-size: 1.8rem;
  }

  .form {
    .form-field {
      margin-top: 2rem;
      position: relative;
      label {
        position: absolute;
        top: -12px;
        left: 20px;
        background-color: var(--background-dark-color);
        padding: 0 0.5rem;
        color: var(--white-color);
        font-size: 0.9rem;
      }
      input,
      textarea {
        width: 100%;
        border: 1px solid var(--border-color);
        background: transparent;
        padding: 0.8rem 1rem;
        outline: none;
        color: inherit;
      }
    }
  }

  .right-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (max-width: 502px) {
      width: 70%;
    }
  }
`;

export default ContactPage;
