import React from "react";
import { MainLayout, InnerLayout } from "../Styles/layouts";
import Title from "../Components/Title";
import styled from "styled-components";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import ContactItem from "../Components/ContactItem";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const intitialData = {
    name: "",
    email: "",
    message: "",
};
function ContactPage() {
    const phone = <PhoneIcon />
    const emailic = <EmailIcon />
    const location = <LocationOnIcon />

    const [data, setData] = React.useState(intitialData);
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const success = () => toast.dark("Successfully Sent");
    const failure = () => toast.error("Something went wrong");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_z90y3a8",
            "template_p5ijrmj",
            e.target,
            "user_Cv8nH2eh9OtEU5NNMgX7O"
        )
            .then(
                (result) => {
                    console.log("yes")
                    success();
                },
                (error) => {
                    failure();
                }
            );

        setData(intitialData)

    };
    console.log(data, "hii")

    const { name, email, subject, textarea } = data;
    return (
        <MainLayout>
            <Title title={"Contact"} span={"Contact"} />
            <ContactPageStyled>
                <InnerLayout className={"contact-section"}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Let's work together</h4>
                        </div>
                        <form className="form" onSubmit={onSubmitHandler} >
                            <div className="form-field">
                                <label htmlFor="name" id="name">
                                    Enter your name*
                                </label>
                                <input onChange={onChangeHandler} name="name" value={name} id="name" type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" id="email">
                                    Enter your email*
                                </label>
                                <input onChange={onChangeHandler} name="email" value={email} id="email" type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" id="subject">
                                    Enter your subject
                                </label>
                                <input onChange={onChangeHandler} name="subject" value={subject} id="subject" type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your message</label>
                                <textarea
                                    onChange={onChangeHandler}
                                    name="textarea"
                                    id="textarea"
                                    cols="30"
                                    rows="10"
                                    value={textarea}
                                ></textarea>

                            </div>

                            <div style={{ marginBottom: "3rem" }} className="form-field form-button">
                                <input type="submit" style={{
                                    width: "10rem",
                                    cursor: "pointer",
                                    backgroundColor: "var(--primary-color)"
                                }} />

                            </div>

                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem

                            title={"Phone"}
                            icon={phone}
                            contact1={"+917028805297"}

                        />
                        <ContactItem

                            title={"Email"}
                            icon={emailic}
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
  .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

        }
    }
`;
export default ContactPage;
