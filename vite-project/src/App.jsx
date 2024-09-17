import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css'

export const App = () => {
  return (
    <h1>
      <Header/>
      hola mondo
      <Post author="wash" content="sim" />
    </h1>
  );
};
