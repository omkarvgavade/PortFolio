import React from "react";
import { MainLayout, InnerLayout } from "../Styles/layouts";
import Title from "../Components/Title";
import styled from "styled-components";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import ContactItem from "../Components/ContactItem";
function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    return (
        <MainLayout>
            <Title title={"Contact"} span={"Contact"} />
            <ContactPageStyled>
                <InnerLayout className={"contact-section"}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name" id="name">
                                    Enter your name*
                                </label>
                                <input id="name" type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" id="email">
                                    Enter your email*
                                </label>
                                <input id="email" type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" id="subject">
                                    Enter your subject
                                </label>
                                <input id="subject" type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your message</label>
                                <textarea
                                    name="textarea"
                                    id="textarea"
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaryButton title={"Send Email"} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem

                            title={"Phone"}
                            icon={phone}
                            contact1={"+91-7028805297"}

                        />
                        <ContactItem

                            title={"Email"}
                            icon={email}
                            contact1={"omkarvgawade@gmail.com"}

                        />
                        <ContactItem

                            title={"Address"}
                            icon={location}
                            contact1={"Kolhapur,Maharashtra"}

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
    grid-column-gap:2rem;

    .right-content{
        display: flex;
        flex-direction: column;
     
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          width: 100%;
          color: inherit;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;
export default ContactPage;
