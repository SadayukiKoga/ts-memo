import React from 'react';

type Props = {
  value: string;
};

export const MyMultilineString = ({ value }: Props) => {
  const lines = value.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {index === 0 ? '' : <br />}
      {line}
    </React.Fragment>
  ));

  return <>{lines}</>;
};
