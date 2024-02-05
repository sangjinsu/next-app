import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Hello NextJS</h1>
            <p><Link href={'/about'}>link</Link></p>
        </main>
    );
}
