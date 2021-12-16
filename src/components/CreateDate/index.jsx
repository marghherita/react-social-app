import { formatRelative } from "date-fns";
import { it } from 'date-fns/locale';

const CreateDate = (props) => {
  const data = props.data || {
    date: new Date(),
  };

  return (
    <p>
      <small>
        {formatRelative(new Date(data.date), new Date(), {
          locale: it,
        })}
      </small>
    </p>
  );
};

export { CreateDate };
