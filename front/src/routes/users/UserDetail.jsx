import React from "react";
import { useRecoilValue } from "recoil";
import Layout from "../../layouts/Layout";
import { authenticatedState, userState } from "../../recoil";

const UserDetail = () => {
  const authenticated = useRecoilValue(authenticatedState);
  const userInfo = useRecoilValue(userState);

  console.log(userInfo);

  return (
    <Layout>
      <div>
        userInfo id: {authenticated ? userInfo.id : "로그인을 해주세요"}
      </div>
    </Layout>
  );
};

export default UserDetail;
