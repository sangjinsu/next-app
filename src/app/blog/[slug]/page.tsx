

export default function BlogPage({params: {slug}}: {params: {slug: string}}) {
  return (
    <main>
        <h1>Blog Post</h1>
        <p>{slug}</p>
    </main>
  );
}