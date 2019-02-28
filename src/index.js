import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comments="Nice blog!"
        imgSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Rajan"
        timeAgo="Today at 2:00AM"
        comments="Good Stuf"
        imgSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Durgesh"
        timeAgo="Today at 12:01AM"
        comments="Nice One"
        imgSrc={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
