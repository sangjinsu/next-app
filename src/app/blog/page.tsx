import Link from "next/link";


export default function BlogPostPage() {
    return (
        <main>
            <h1>Blog Post</h1>
            <div>
                <Link href={'/blog/post-1'}>blog 1</Link>
                <Link href={'/blog/post-2'}>blog 2</Link>
            </div>
        </main>
    );
}