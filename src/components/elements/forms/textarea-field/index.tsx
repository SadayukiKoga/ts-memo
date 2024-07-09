import clsx from 'clsx';

import fieldStyles from '~/components/elements/forms/shared/field-styles.module.css';
import { MyErrorMessage } from '~/components/elements/typographies/error-message';

import styles from './styles.module.css';

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
};

export const MyTextareaField = ({ label, name, value, onChange, error }: Props) => {
  const errorId = `${name}-error`;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <div className={fieldStyles.field}>
      <div className={fieldStyles.label}>
        <label htmlFor={name}>{label}</label>
      </div>
      <div className={fieldStyles.input}>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={clsx([fieldStyles.textInput, styles.textarea])}
          aria-invalid={Boolean(error)}
          aria-errormessage={error ? errorId : undefined}
        />
      </div>
      {error && <MyErrorMessage id={errorId} message={error} />}
    </div>
  );
};
