import React from 'react'

import styled from 'styled-components'
function ContactItem({ title, icon, contact1 }) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={contact1 === "omkarvgawade@gmail.com" ? `mailTo:${contact1}` : contact1 === "+917018805197" ? `tel:${contact1}` : "/contact"}
                >{contact1}</a>

            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
padding:1.5rem 2rem ;
background-color:var(--background-dark-gray);
    box-shadow: 1px 1px 8px black;
    background-color: var(--background-dark-gray);
    :hover{
  transform: translateY(-10px);
   transition: all .4s ease-in-out;
    }
&:not(:last-child){
    margin-bottom: 2rem;
}
display: flex;
align-items: center;
.left-content{
       padding: 1.5rem;
       border: 1px solid var(--border-color);
       font-size: 2rem;
       display: flex;
       align-items: center;
       justify-content: center;
       margin-right: 1.5rem;
       svg{
           font-size:2.3rem
       }
}
.right-content{
    h6{
        color: var(--white-color);
        font-size: 1.2rem;
        padding-bottom:.6rem;
    }
    a{
        padding: .1rem 0;
    }
}

`
export default ContactItem
