import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Layout from "../layouts/Layout";
import { userState } from "../recoil";

const Home = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {}, []);
  return (
    <Layout>
      <div>home {user && `안녕하세요 ${user.username}님`}</div>;
    </Layout>
  );
};

export default Home;
