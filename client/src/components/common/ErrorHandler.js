import React from "react";
import { notification } from "antd";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    notification["error"]({
      message: `${error.name}: ${error.message}`,
      description: error?.response?.data !== undefined && (
        <div style={{ textAlign: "left" }}>
          {`${JSON.stringify(error.response.data, null, 2)}`}
        </div>
      ),
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
