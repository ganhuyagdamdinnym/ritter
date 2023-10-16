import Link from "next/link";
export function Box(props) {
  const { photo, chocolate, id } = props;
  return (
    <div className="">
      {/* <Link href={"/watch?"}> */}
      <img className="w-72 h-68" src={photo} onClick={() => chocolate(id)} />
      {/* </Link> */}
    </div>
  );
}
