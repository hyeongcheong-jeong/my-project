import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-full items-center justify-center flex-col">
      <h1>react project</h1>
      <section>
        <ul className="flex justify-center py-12">
          <li>
            <Link href="/study/1" className="flex justify-center items-center border-2 bg-slate-300 px-4 py-4">react hook 활용 예제</Link>
          </li>
          <li>
            <Link href="/study" className="flex justify-center items-center border-2 bg-slate-300 px-4 py-4">Redux toolkit 활용 예제</Link>
          </li>
        </ul>
        </section>
    </main>
  );
}
