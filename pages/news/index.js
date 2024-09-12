import Link from "next/link";

export default function NewsPage() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/news/nextjs">Next JS</Link>
                </li>
                <li>
                    <Link href="/news/something-else">Somthing else</Link>
                </li>
            </ul>
        </>
    )
}