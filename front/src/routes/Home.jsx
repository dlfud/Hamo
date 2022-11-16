import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);
  return (
    <div className="flex gap-4">
      <div>
        <Link to="/join">회원가입</Link>
      </div>
      <div>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default Home;
