import React from "react";
import Typed from "typed.js";

class TypedAnim extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    this.typed.destroy();
  }
  
  render() {
    return (
      <>
        <span
            className="text-white text-3xl"
            style={{ whiteSpace: "pre" }}
            ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default TypedAnim;