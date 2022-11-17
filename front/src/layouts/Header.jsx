import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../recoil";

const Header = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  return (
    <div className="flex gap-4">
      <div>
        <Link to="/join">회원가입</Link>
      </div>
      {user ? (
        <>
          <div
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
          >
            로그아웃
          </div>
          <div>
            <Link to={`/users/${user.id}`}>프로필</Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/login">로그인</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
