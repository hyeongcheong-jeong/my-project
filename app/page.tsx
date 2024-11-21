
export default function Home() {
  const texts = ['hello', 'world'].map((text, index) => <p key={index}>{text}</p>)
  return (
    <main>
      { texts }
    </main>
  );
}
