export function ClickChoco(props) {
  const { photo } = props;
  return (
    <div className="border-black  border-[20px] rounded-3xl mt-10 ">
      <img src={photo} className="w-96" />
    </div>
  );
}
