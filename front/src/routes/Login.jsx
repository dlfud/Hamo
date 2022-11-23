import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Layout from "../layouts/Layout";
import { userState } from "../recoil";
import { url } from "../utils/BackendUrl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const data = await axios({
                url: `${url}/api/v1/login`,
                method: "POST",
                data: { email, password },
              });
              setEmail("");
              setPassword("");
              setUser(data.data);
              navigate("/");
              alert("로그인 성공!");
              console.log(data.data);
            } catch (e) {
              console.log(e);
              alert("로그인 실패!");
            }
          }}
          className="flex flex-col w-60 items-start p-4"
        >
          <div>로그인</div>
          <div className="mt-4">이메일을 입력해 주세요</div>
          <input
            type="email"
            className="w-full border-4 border-black"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="mt-4">비밀번호을 입력해 주세요</div>
          <input
            type="password"
            className="w-full border-4 border-black"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-sm ml-auto mt-4">
            전송
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
