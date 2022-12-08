import axios from "axios";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Layout from "../../layouts/Layout";
import { userState } from "../../recoil";
import { url } from "../../utils/BackendUrl";

const Create = () => {
  const userInfo = useRecoilValue(userState);
  const [servername, setServername] = useState("");

  const create = async () => {
    const data = await axios({
      url: `${url}/myServer/create`,
      method: "POST",
      data: { username: userInfo.username, servername, user_id: userInfo.id },
    });
    if (data.data === "success") {
      console.log("success");
    } else {
      console.log("error");
    }
  };

  return (
    <Layout>
      <div>서버 만들기</div>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            create();
            setServername("");
            alert("개인서버 생성되었습니다.");
          }}
        >
          <input
            type="text"
            placeholder="서버이름"
            value={servername}
            onChange={(e) => {
              setServername(e.target.value);
            }}
          ></input>
          <button type="submit">개인서버 만들기</button>
        </form>
      </div>
      <div>
        <button>통합서버 만들기</button>
      </div>
    </Layout>
  );
};

export default Create;
