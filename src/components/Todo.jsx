import React, { useState } from 'react';
import { MdDeleteSweep, MdEdit, MdOutlineCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { deleteTodo, updateTodo } from '../services/todo';

const Todo = ({ checked, todoText, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [editTodo, setEditTodo] = useState('');

  const handleChecked = async (id) => {
    setIsLoading(true);
    try {
      await updateTodo({ checked: true }, id);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  const handleUnChecked = async (id) => {
    setIsLoading(true);
    try {
      await updateTodo({ checked: false }, id);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      await deleteTodo(id);
      setIsDeleting(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
      window.location.reload();
    }
  };

  const handleUpdate = async (obj, id) => {
    setIsUpdating(true);
    try {
      const d = await updateTodo(obj, id);
      console.log(d);
      setIsUpdating(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col gap-y-1 border-b px-4 border-gray-300 pb-2">
      <div className="flex items-center gap-x-2">
        {checked ? (
          <>
            <button onClick={() => handleUnChecked(id)}>
              {isLoading ? (
                <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
              ) : (
                <MdOutlineCheckBox className="w-5 h-5" />
              )}
            </button>
          </>
        ) : (
          <>
            <button onClick={() => handleChecked(id)}>
              {isLoading ? (
                <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank className="w-5 h-5" />
              )}
            </button>
          </>
        )}

        <p className="font-semibold text-gray-700">{todoText}</p>
      </div>

      {!editModal ? (
        <div className="flex items-center justify-end gap-x-2">
          <button
            onClick={() => setEditModal(true)}
            className="px-2 py-1 text-sm bg-green-400 text-white rounded-lg"
          >
            <MdEdit />
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="px-2 py-1 text-sm bg-red-500 text-white rounded-lg"
          >
            {isDeleting ? (
              <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
            ) : (
              <MdDeleteSweep className="" />
            )}
          </button>
        </div>
      ) : (
        <div className=" w-full">
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder={todoText}
              className="border border-gray-400 outline-none py-2 px-4 rounded-md focus:placeholder:opacity-80 text-xs w-[22rem]"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            />

            <button
              onClick={() =>
                handleUpdate({ name: editTodo, checked: false }, id)
              }
              type="button"
              className="p-2 px-3 bg-green-600 text-white text-xs rounded-md ml-2"
            >
              {isUpdating ? 'Updating...' : 'Update'}
            </button>
            <button
              onClick={() => setEditModal(false)}
              className="p-2 px-3 bg-gray-800/40 text-white text-xs rounded-md ml-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
