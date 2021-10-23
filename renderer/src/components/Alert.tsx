import React, { Component } from "react";
import { CgClose } from "react-icons/cg";

// available design variants of alert component.
export type AlertVariants =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";

// properties acceptable by alert component.
interface AlertProps {
  children?: React.ReactNode;
  variants: AlertVariants;
  hidden?: Boolean;
  hideAfter?: number;
}

// internal component state.
interface AlertState {
  hidden: Boolean;
}

// main class Alerts
class Alert extends Component<AlertProps, AlertState> {
  // impenting real state in class
  state: Readonly<AlertState> = {
    hidden: this.props.hidden || false,
  };

  // handling close button event.
  handleClose = () => {
    this.setState({ hidden: true });
  };

  constructor(props: AlertProps) {
    super(props);
    // if hideAfter properties is available then hide component after few second.
    this.props.hideAfter &&
      setTimeout(() => {
        this.setState({ hidden: true });
      }, this.props.hideAfter * 1000); // convert second to milliseconds
  }

  render() {
    return (
      <div
        className={`dc-alert-${this.props.variants} ${
          this.state.hidden ? "hidden" : ""
        }`}
      >
        <style jsx>
          {`
            .dc-alert-${this.props.variants} {
              ${this.state.hidden ? "animation: hideDown 1s linear  1" : ""}
            }
          `}
        </style>
        {this.props.children}
        <div className="close" onClick={this.handleClose}>
          <CgClose />
        </div>
      </div>
    );
  }
}

export default Alert;
