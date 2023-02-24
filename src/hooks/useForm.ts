import { useState, ChangeEvent } from 'react';

export const useForm = <T>(initalState: T) => {
  const [text, setText] = useState(initalState);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const addTextList = (name: keyof typeof text, value: string) => {
    if (!value) return;
    // @ts-ignore
    setText((prev) => ({ ...prev, [name]: prev[name].concat(value) }));
  };

  const removeTextList = (name: keyof typeof text, removeIndex: number) => {
    setText((prev) => ({
      ...prev,
      // @ts-ignore
      [name]: prev[name].filter((e, idx) => removeIndex !== idx),
    }));
  };

  return {
    text,
    setText,
    handleOnChange,
    addTextList,
    removeTextList,
  };
};
