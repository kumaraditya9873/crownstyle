// import Directory from "../directory-item/directory-item.component";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl:
      "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=600",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl:
      "https://images.pexels.com/photos/7679798/pexels-photo-7679798.jpeg?auto=compress&cs=tinysrgb&w=600",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl:
      "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl:
      "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=600",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl:
      "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=600",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
