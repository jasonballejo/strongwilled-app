import ButtonStyle from "./Button/ButtonStyle";

export default function TopSection() {
  return (
    <div className="flex justify-between items-center px-5">
      <div className="">Clients</div>
      <div className="">
        <ButtonStyle title="+ Client" />
      </div>
    </div>
  );
}
