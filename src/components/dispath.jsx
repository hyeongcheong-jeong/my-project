import { useDispatch } from "react-redux";
export default function Dispath() {
  const dispath = useDispatch();

  let clickEventJ = () => {
    dispath({ type: "ACTION_JUNG" });
  };
  let clickEventE = () => {
    dispath({ type: "ACTION_LEE" });
  };

  return (
    <>
      <button type="button" onClick={clickEventJ}>
        유저 정보(정형철)
      </button>
      <button type="button" onClick={clickEventE}>
        유저 정보(이동욱)
      </button>
    </>
  );
}
