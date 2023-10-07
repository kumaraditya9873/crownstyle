import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://images.pexels.com/photos/7679798/pexels-photo-7679798.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Shoes & Flippers",
      imageUrl:
        "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
