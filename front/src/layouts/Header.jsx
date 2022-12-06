import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authenticatedState, userState } from "../recoil";

const Header = () => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  const userInfo = useRecoilValue(userState);
  const navigate = useNavigate();

  return (
    <div className="flex gap-4">
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/join">회원가입</Link>
      </div>
      {authenticated ? (
        <>
          <div
            onClick={() => {
              setAuthenticated(false);
              navigate("/");
            }}
          >
            로그아웃
          </div>
          <div>
            <Link to={`/users/${userInfo.id}`}>프로필</Link>
          </div>
          <div>
            <Link to={`/server`}>서버만들기</Link>
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
