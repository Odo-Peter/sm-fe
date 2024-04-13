import { useState } from 'react';

const EditModal = () => {
  const [editTodo, setEditTodo] = useState('');
  return (
    <form className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Enter Todo..."
        className="border border-gray-400 outline-none py-2 px-4 rounded-md focus:placeholder:opacity-80 text-xs w-[22rem]"
        value={editTodo}
        onChange={(e) => setEditTodo(e.target.value)}
      />

      <button
        type="submit"
        className="p-2 px-3 bg-green-600 text-white text-xs rounded-md ml-2"
      >
        Update
      </button>
      <button
        type="submit"
        className="p-2 px-3 bg-gray-800/40 text-white text-xs rounded-md ml-1"
      >
        Close
      </button>
    </form>
  );
};

export default EditModal;
