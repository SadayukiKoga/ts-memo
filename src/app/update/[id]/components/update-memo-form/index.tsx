import { useState } from 'react';

import { MyButton } from '~/components/elements/buttons/button';
import { MyTextField } from '~/components/elements/forms/text-field';
import { MyTextareaField } from '~/components/elements/forms/textarea-field';
import { MyPanel } from '~/components/surface/panels/panel';

import styles from './styles.module.css';

export type DefaultValues = { title: string; content: string };

type Props = {
  defaultValues: DefaultValues;
  isSubmitting: boolean;
  onSubmit: (title: string, content: string) => void;
};

export const MyUpdateMemoForm = ({ defaultValues, isSubmitting, onSubmit }: Props) => {
  const [title, setTitle] = useState(defaultValues.title);
  const [content, setContent] = useState(defaultValues.content);

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };
  const handleChangeContent = (value: string) => {
    setContent(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(title, content);
  };

  return (
    <MyPanel>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <MyTextField label="タイトル" name="title" value={title} onChange={handleChangeTitle} />
        <MyTextareaField label="内容" name="content" value={content} onChange={handleChangeContent} />
        <div>
          <MyButton type="submit" color="primary" disabled={isSubmitting}>
            {isSubmitting ? '送信中' : '保存'}
          </MyButton>
        </div>
      </form>
    </MyPanel>
  );
};
