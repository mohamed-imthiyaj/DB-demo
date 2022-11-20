/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc If any error/crash happend in the app, those are cached here and 500 page is shown, if
 * need the error will be send to server.
 */

import React from "react";
import "./App.css";


class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log("info:", info);
    console.log("error:", error);

    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service

    //TODO:
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="App">
          <header className="App-header">
            <h1>500 - Something went wrong</h1>
          </header>
        </div>
      );
    }
    return this.props.children;
  }
}

export default AppErrorBoundary;
