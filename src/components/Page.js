import React, { Component } from "react";

const errors = [
  {
    name: "API_ERROR",
    svg: "api_error.svg",
    title: "API is down",
    caption: "We are working on it"
  },
  {
    name: "SEARCH_ERROR",
    svg: "search_error.svg",
    title: "Our search does not function",
    caption: "Something is not right"
  },
  {
    name: "GENERIC_ERROR",
    svg: "generic_error.svg",
    title: "Something went wrong",
    caption: "Nobody knows"
  }
];

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorType: undefined };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorName: error.message };
  }

  render() {
    if (this.state.hasError) {
      const errorName = errors.some(
        error => error.name === this.state.errorName
      )
        ? this.state.errorName
        : "GENERIC_ERROR";

      const { svg, title, caption } = errors.find(
        error => error.name === errorName
      );

      // You can render any custom fallback UI
      return (
        <div>
          <img src={svg} />
          <h1>{title}</h1>
          <p>{caption}</p>
        </div>
      );
    }

    return this.props.content;
  }
}

export default Page;
