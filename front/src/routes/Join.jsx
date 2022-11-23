import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { url } from "../utils/BackendUrl";

const Join = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const data = await axios({
                url: `${url}/api/v1/join`,
                method: "POST",
                data: { username, email, password },
              });
              setEmail("");
              setUsername("");
              setPassword("");
              alert("회원가입 성공!");
              navigate("/login");
            } catch (e) {
              console.log(e);
              alert("회원가입 실패!");
            }
          }}
          className="flex flex-col w-60 items-start p-4"
        >
          <div>회원가입</div>
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
          <div className="mt-4">닉네임을 입력해 주세요</div>
          <input
            type="text"
            className="w-full border-4 border-black"
            placeholder="Nickname"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
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
export default Join;
