import { ChangeEvent, FormEvent, useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => any;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="todo를 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
