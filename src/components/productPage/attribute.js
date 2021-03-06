import { Component } from "react";
import CapacityAttribute from "./attributes.js/capacityattribute";
import ColorAttribute from "./attributes.js/colorattribute";
import PortsAttribute from "./attributes.js/portsattribute";
import SizeAttribute from "./attributes.js/sizeattribute";
import TouchIdAttribute from "./attributes.js/touchidattribute";

class Attribute extends Component {
  render() {
    const { attribute, id, setChosenAttribute } = this.props;

    return (
      <div>
        {attribute.name === "Size" && (
          <SizeAttribute
            attribute={attribute}
            id={id}
            setChosenAttribute={setChosenAttribute}
          />
        )}
        {attribute.name === "Capacity" && (
          <CapacityAttribute
            attribute={attribute}
            id={id}
            setChosenAttribute={setChosenAttribute}
          />
        )}
        {attribute.name === "Color" && (
          <ColorAttribute
            attribute={attribute}
            id={id}
            setChosenAttribute={setChosenAttribute}
          />
        )}
        {attribute.name === "With USB 3 ports" && (
          <PortsAttribute
            attribute={attribute}
            id={id}
            setChosenAttribute={setChosenAttribute}
          />
        )}
        {attribute.name === "Touch ID in keyboard" && (
          <TouchIdAttribute
            attribute={attribute}
            id={id}
            setChosenAttribute={setChosenAttribute}
          />
        )}
      </div>
    );
  }
}

export default Attribute;
