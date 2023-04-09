import React from 'react';

export const Article = ({ title, text, date }) => {
  const dateISO = date.toISOString().slice(0, 10);
  const dateLocaleString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <h2 data-cy="title">{title}</h2>

      <time dateTime={dateISO} data-cy="date">
        {dateLocaleString}
      </time>

      <p data-cy="text">{text}</p>
    </>
  );
};