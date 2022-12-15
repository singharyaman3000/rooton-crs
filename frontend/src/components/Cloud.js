import { Component, createRef } from "react";
import BIRDS from "vanta/dist/vanta.clouds.min";

class Welcome extends Component {
  constructor() {
    super();
    this.vantaRef = createRef();
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return <div ref={this.vantaRef}>{this.props.children}</div>;
  }
}
export default Welcome;
