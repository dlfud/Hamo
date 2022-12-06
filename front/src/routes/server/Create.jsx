import axios from "axios";
import { useRecoilValue } from "recoil";
import Layout from "../../layouts/Layout";
import { userState } from "../../recoil";
import { url } from "../../utils/BackendUrl";

const Create = () => {
  const userInfo = useRecoilValue(userState);

  const create = async () => {
    const data = await axios({
      url: `${url}/myServer/create`,
      method: "POST",
      data: { userInfo },
    });
    console.log(data.data);
  };

  return (
    <Layout>
      <div>서버 만들기</div>
      <div>
        <button
          onClick={() => {
            create();
          }}
        >
          개인서버 만들기
        </button>
      </div>
      <div>
        <button>통합서버 만들기</button>
      </div>
    </Layout>
  );
};

export default Create;
