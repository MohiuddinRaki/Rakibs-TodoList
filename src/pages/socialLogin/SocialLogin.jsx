import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublicT from "../../hooks/useAxiosPublicT";

const SocialLogin = () => {
  const { googleLoginUser, gitHubLoginUser } = useAuth();
  const axiosPublic = useAxiosPublicT();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLoginUser().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user.email,
        name: res.user.displayName,
      };
      axiosPublic.post("/donationUsers", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  const handleGitHubLogin = () => {
    gitHubLoginUser().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user.email,
        name: res.user.displayName,
      };
      axiosPublic.post("/donationUsers", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="space-x-3">
        <button onClick={handleGoogleLogin} className="btn px-6">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button onClick={handleGitHubLogin} className="btn px-6">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
