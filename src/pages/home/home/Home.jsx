import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Rakibs ToDoList|| Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
