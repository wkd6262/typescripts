import { useState } from "react";

interface AddProps {
  addTodo: (todo: string) => void;
}

const AddTodo = ({ addTodo }: AddProps) => {
  const [data, setData] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(data);
    setData("");
  };

  const values = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          autoFocus
          value={data}
          onChange={values}
        />
        <button>작성</button>
      </form>
    </div>
  );
};

export default AddTodo;
