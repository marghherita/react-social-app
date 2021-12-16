
import { CreateDate } from "./../CreateDate";
import styles from "./MessagePreview.module.scss";

const MessagePreview = (props) => {
  const data = props.data || {
    text: "lorem ipsum",
    date: new Date(),
    sender: "User",
  };

  return (
    <div className={styles.message}>
      <h5>{data.sender}</h5>
      <CreateDate />
      <p>{data.text}</p>
    </div>
  );
};

export { MessagePreview };