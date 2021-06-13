import { SyntheticEvent, useState } from 'react';
import { useCallback } from 'react';
import { FunctionComponent } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

interface Prop {
  onInsert: (text: string) => void;
}

const TodoInsert: FunctionComponent<Prop> = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const onSubmit = useCallback(
    (event: SyntheticEvent) => {
      onInsert(value);
      setValue('');
      event.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form action="" className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
