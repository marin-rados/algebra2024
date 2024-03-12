import { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";
import Layout from "./components/layout";
import "./styles/styles.scss";
import IconDelete from "./assets/iconDelete";

const data = ["Operi sude", "Napravi rucak", "Procitaj knjigu"];

const App = () => {
  const [todo, setTodo] = useState(data);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = (value: string) => {
    setTodo([...todo, value]);
    setInputValue("");
  };

  const handleDelete = (item: string) => {
    const newArr = todo.filter((todoItem) => {
      return todoItem !== item;
    });
    setTodo(newArr);
  };

  return (
    <>
      <Layout>
        <ul>
          {data.map((todo, index) => {
            return (
              <>
                <li key={index} className="todo">
                  <div>{todo}</div>
                  <IconDelete onClick={() => {
              console.log("kliknuo si me");
              handleDelete(todo);
            }} />
                </li>
              </>
            );
          })}
        </ul>
        <Input
          onChange={(value) => {
            console.log(value);
          }}
        />
        <div className="buttons">
          <Button
            onClick={() => {
              console.log("kliknuo si me");
              handleAdd(inputValue);
            }}
            bgColor="#2ecc71"
          >
            Add
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default App;
