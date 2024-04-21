import './App.css';

import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Footer from './components/Footer';

import { addTodo, getAll } from './services/todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoEntry, setTodoEntry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    getAll().then((data) => setTodos(data));
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const todoObj = {
        name: todoEntry,
        checked: false,
      };

      const data = await addTodo(todoObj);

      setIsLoading(false);
      setTodos(todos.concat(data));
    } catch (error) {
      console.log(error);
    } finally {
      setTodoEntry('');
      setIsLoading(false);
      await getAll().then((data) => setTodos(data));
    }
  };

  const refetchTodos = async () =>
    await getAll().then((data) => setTodos(data));

  return (
    <div className="w-full flex flex-col gap-y-6">
      <Navbar />

      <div>
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <p className="text-2xl font-bold ">Todo App</p>
          <form
            onSubmit={handleAddTodo}
            className="flex items-center justify-center gap-x-1"
          >
            <input
              type="text"
              placeholder="Enter Todo..."
              className="border border-gray-400 outline-none py-2 px-4 rounded-md focus:placeholder:opacity-80 text-sm w-[22rem]"
              value={todoEntry}
              onChange={(e) => setTodoEntry(e.target.value)}
            />
            <button
              type="submit"
              className="p-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md ml-4"
            >
              {isLoading ? 'Adding...' : 'Add'}
            </button>
          </form>
        </div>

        <div className="mt-4 flex flex-col py-4 rounded-md bg-gray-800/10 mx-auto gap-y-4 w-[40%] max-w-[60%] h-[20rem]  overflow-y-auto shadow-2xl">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todoText={todo.name}
              checked={todo.checked}
              name={todo.name}
              id={todo.id}
              refetch={refetch ? refetchTodos() : ''}
              setRefetch={setRefetch}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
