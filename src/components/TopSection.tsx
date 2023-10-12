import ButtonModal from "./Button/ButtonModal";

export default function TopSection() {
  return (
    <div className="flex justify-between items-center px-5 py-5">
      <div className="text-2xl font-bold uppercase">Clients List</div>
      <div className="">
        <ButtonModal title="+ Client" />
      </div>
    </div>
  );
}
