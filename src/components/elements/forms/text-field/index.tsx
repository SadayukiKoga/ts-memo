import fieldStyles from '~/components/elements/forms/shared/field-styles.module.css';
import { MyErrorMessage } from '~/components/elements/typographies/error-message';

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
};

export const MyTextField = ({ label, name, value, onChange, error }: Props) => {
  const errorId = `${name}-error`;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <div className={fieldStyles.field}>
      <div className={fieldStyles.label}>
        <label htmlFor={name}>{label}</label>
      </div>
      <div className={fieldStyles.input}>
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={fieldStyles.textInput}
          aria-invalid={Boolean(error)}
          aria-errormessage={error ? errorId : undefined}
        />
      </div>
      {error && <MyErrorMessage id={errorId} message={error} />}
    </div>
  );
};
