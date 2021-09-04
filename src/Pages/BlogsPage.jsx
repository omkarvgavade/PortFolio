import React from "react";
import blogs from "../Data/blogs";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../Styles/layouts";
function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a target="_blank" href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}
const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
     @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
    .blog-item {

      padding: 1rem 1rem;
  box-shadow: 1px 1px 8px black;
    background-color: var(--background-dark-gray);
    :hover{
  transform: translateY(-10px);
   transition: all .4s ease-in-out;
    }
        .title {
      a {
        font-size: 1.8rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
    }

    .image {
      width: 100%;
 
      overflow: hidden;
      padding: .5rem;
      img {
        width: 100%;

        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }
  
  }
`;
export default BlogsPage;
