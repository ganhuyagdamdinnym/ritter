import { ClickChoco } from "./ClickChoco";

export function Main(props) {
  const { photo, ClickChocolate, id } = props;
  return (
    <div className="">
      <img
        className="w-72 h-68"
        src={photo}
        onClick={() => ClickChocolate(id)}
      />
    </div>
  );
}
