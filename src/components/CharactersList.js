import Character from "./Character";
import Search from "./Search";

const characters = [
  {
    id: "001",
    characterName: "Character 1",
    imgHref: "img_5terre.jpg",
    imgUrl:
      "https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg",
  },
  {
    id: "002",
    characterName: "Character 2",
    imgHref: "img_5terre.jpg",
    imgUrl:
      "https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg",
  },
];

const CharactersList = () => {
  return (
    <div>
      <div>
        <Search />
      </div>

      {characters.map((ch) => (
        <Character
          key={ch.characterName}
          characterName={ch.characterName}
          imgHref={ch.imgHref}
          imgUrl={ch.imgUrl}
        />
      ))}

      {/* <Character
        imgHref="img_5terre.jpg"
        imgUrl="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
        characterName="Character 1"
      /> */}
    </div>
  );
};

export default CharactersList;
