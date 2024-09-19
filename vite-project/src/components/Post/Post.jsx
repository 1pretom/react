import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/1pretom.png" />
          <div className={styles.authorInfo}>
            <strong>Washington Damacena</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          aprendendo react. O nome do projeto é Baba Europeu 🚀
        </p>
        <p>
          👉<a href="">mari.design/babaeuropeu</a>
        </p>
        <p>
          <a href="">#novoprojeto #babaeuropeu</a>
        </p>
      </div>
    </article>
  );
};
