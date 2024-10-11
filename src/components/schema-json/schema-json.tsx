interface SchemaJsonProps {
  schema: Record<string, unknown>;
}

export const SchemaJson = ({ schema }: SchemaJsonProps) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        ...schema,
      }),
    }}
  />
);
