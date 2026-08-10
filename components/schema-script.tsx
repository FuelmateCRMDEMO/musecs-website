import React from 'react';

interface SchemaScriptProps {
  schema: object | object[];
}

export function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
