import styled from "styled-components";

interface Props {
  todos: string[];
  deleteTodo: (index: number) => void;
}

const TodoDiv = styled.div`
  background-color: #53b340;
  li {
    list-style: none;
  }
`;

const ListDiv = styled.div`
  list-style: none;
  display: flex;
  align-items: center; // 수직 정렬
  justify-content: space-between; // 항목과 버튼 사이의 공간을 최대한 벌림
  padding: 10px; // 항목의 패딩
  background-color: white; // 항목 배경 색
  border-radius: 4px; // 항목의 모서리 둥글게
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 항목에 그림자 추가
`;
const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;
const TodoItems = ({ todos, deleteTodo }: Props) => {
  return (
    <TodoDiv>
      <h1>당신의 할 일 목록</h1>
      <ul>
        {todos.map((item, i) => (
          <ListDiv>
            <li key={i}>{item}</li>
            <DeleteButton onClick={() => deleteTodo(i)}>삭제</DeleteButton>
          </ListDiv>
        ))}
      </ul>
    </TodoDiv>
  );
};

export default TodoItems;
