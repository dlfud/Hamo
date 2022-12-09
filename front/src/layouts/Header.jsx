import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authenticatedState, userState } from "../recoil";
import { url } from "../utils/BackendUrl";

const Header = () => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  const userInfo = useRecoilValue(userState);
  const [serverList, setServerList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${url}/myServer/list/${userInfo.id}`,
        method: "GET",
      });
      if (data.data) {
        setServerList(data.data);
        console.log("개인서버 불러오기 성공");
      } else {
        console.log("개인서버 불러오기 오류");
      }
    };

    getData();
  }, []);

  return (
    <div className="flex gap-4">
      <div>
        <Link to="/">home</Link>
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
          {serverList.map((server, index) => (
            <div key={index}>
              <Link to={`/myServerRoute/${server.id}`}>
                {server.servername}
              </Link>
            </div>
          ))}
        </>
      ) : (
        <>
          <div>
            <Link to="/join">회원가입</Link>
          </div>
          <div>
            <Link to="/login">로그인</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
