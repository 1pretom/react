import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img
        src="https://media.licdn.com/dms/image/v2/C4D03AQFkZPMQsiMisA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660413521359?e=1732752000&v=beta&t=clGGhyXpLTw8HvGrayJBenVwQG7_fQ_Qht347z7eCsY"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marina Soares</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Wash, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
