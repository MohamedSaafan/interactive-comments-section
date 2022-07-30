import CommentsDirectory from "../components/Comments/CommentsDirectory";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <main>
      <CommentsDirectory />
    </main>
  );
};
export default Home;
