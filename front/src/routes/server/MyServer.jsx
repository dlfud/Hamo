import axios from "axios";
import { useRecoilValue } from "recoil";
import Layout from "../../layouts/Layout";
import { authenticatedState, userState } from "../../recoil";
import { url } from "../../utils/BackendUrl";

const MyServer = () => {
  const authenticated = useRecoilValue(authenticatedState);
  const userInfo = useRecoilValue(userState);

  return (
    <Layout>
      <div>
        myServer id:
        {authenticated
          ? `${userInfo.username}의 개인서버입니다.`
          : "로그인을 해주세요"}
      </div>
    </Layout>
  );
};

export default MyServer;
