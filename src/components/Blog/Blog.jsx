import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div id="blog-part">
      <div className="blog-item container">
        <h1>Question and Answer Part</h1>

        <div className="ans-part">
          <h3>
            Ques: What is an access token and refresh token? How do they work
            and where should we store them on the client-side?
          </h3>

          <p>Ans: An access token is a short-lived credential used to access protected resources, while a refresh token is a long-lived credential used to obtain a new access token when the current one expires. They work together to provide secure authorization and are typically stored securely on the client-side.</p>

          <h3>Ques: Compare SQL and NoSQL databases?</h3>
          <p>Ans: SQL databases are like organized filing cabinets. They have predefined categories and strict rules for how things are stored. NoSQL databases are more like big messy drawers where you can put anything you want, and they can handle a lot of stuff without needing to be organized.</p>

          <h3>Ques: What is express js? What is Nest JS?</h3>

          <p>Ans: Express.js is a framework that helps build web applications and APIs easily. Nest.js is a framework built on top of Express.js that provides structure and patterns for building scalable applications.</p>

          <h3>Ques: What is MongoDB aggregate and how does it work</h3>
          <p>Ans: In MongoDB, the aggregate function is used to perform complex operations on data stored in a collection. It allows you to combine and transform data using various stages like filtering, grouping, sorting, and calculating aggregate values.</p>

        </div>
      </div>
    </div>
  );
};

export default Blog;
