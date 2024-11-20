import { useSelector } from "react-redux";
export default function UserInfo() {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <>
      <ul>
        <li>
          <strong>이름</strong>
          <span>{userInfo.name}</span>
        </li>
        <li>
          <strong>나이</strong>
          <span>{userInfo.age}</span>
        </li>
        <li>
          <strong>직업</strong>
          <span>{userInfo.job}</span>
        </li>
      </ul>
    </>
  );
}
