import { Property } from "./property";
import "./PropertyList.css";

function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((p) => {
        return (
          <Property
            key={p.id}
            {...p}
            // key={p.id}
            // name={p.name}
            // price={p.price}
            // rating={p.rating}
          />
        );
      })}
    </div>
  );
}

export { PropertyList };
