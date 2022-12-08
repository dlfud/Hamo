import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import Layout from "../layouts/Layout";
import { authenticatedState, userState } from "../recoil";
import { url } from "../utils/BackendUrl";
import { Buffer } from "buffer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setAuthenticated = useSetRecoilState(authenticatedState);
  const setUserInfo = useSetRecoilState(userState);
  const navigate = useNavigate();
  const location = useLocation();

  const onChangeEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const doLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios({
        url: `${url}/login`,
        method: "POST",
        data: {
          email,
          password,
        },
      });

      if (data.headers.authorization) {
        const jwtToken = data.headers.authorization;
        const payload = JSON.parse(
          Buffer.from(jwtToken.split(" ")[1].split(".")[1], "base64").toString(
            "ascii"
          )
        );
        console.log(payload);
        console.log(payload.id);
        setUserInfo({
          id: payload.id,
          username: payload.username,
        });

        setAuthenticated(true);
        localStorage.setItem("login-token", data.headers.authorization);
        if (location.pathname === "/login") return navigate("/");
      }
    } catch (e) {
      console.log(e);
      alert("로그인 실패");
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={doLogin} className="flex flex-col w-60 items-start p-4">
          <div>로그인</div>
          <div className="mt-4">이메일을 입력해 주세요</div>
          <input
            type="email"
            className="w-full border-4 border-black"
            placeholder="Email"
            value={email}
            onChange={onChangeEmailInput}
          />
          <div className="mt-4">비밀번호을 입력해 주세요</div>
          <input
            type="password"
            className="w-full border-4 border-black"
            placeholder="password"
            value={password}
            onChange={onChangePasswordInput}
          />
          <button type="submit" className="btn btn-sm ml-auto mt-4">
            로그인
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
