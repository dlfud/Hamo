import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Layout from "../../layouts/Layout";
import { authenticatedState, userState } from "../../recoil";
import { url } from "../../utils/BackendUrl";

const MyServer = () => {
  const authenticated = useRecoilValue(authenticatedState);
  const userInfo = useRecoilValue(userState);
  const [server, setServer] = useState({});
  const id = useParams().id;

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${url}/myServer/detail/${id}`,
        method: "GET",
      });
      setServer(data.data);
    };

    getData();
  }, []);

  return (
    <Layout>
      <div>
        myServer id:
        {authenticated
          ? ` ${server.servername}의 개인서버입니다.`
          : "로그인을 해주세요"}
      </div>
    </Layout>
  );
};

export default MyServer;
