import { Post } from "./components/Post";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/1pretom.png",
      name: "Washington Damacena",
      role: "O cara da responsividade",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de melhorar a responsividade do sanarflix 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFkZPMQsiMisA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660413521359?e=1733961600&v=beta&t=3WBW81hzlkyH0TyZLjiGoRd7aA9B4s3SuwwAUSGuW3U",
      name: "Marina Soares",
      role: "Educator @profamarinasoares",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de dar uma otima aula de espanhol 🚀",
      },
      { type: "link", content: "profamarinasoares" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];
export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};
