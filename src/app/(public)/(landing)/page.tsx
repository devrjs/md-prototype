import Header from './_components/header/header'

export default function Landing() {
  return (
    <main>
      <Header />

      <div className="flex flex-col">
        {Array(60)
          .fill('>')
          .map((item, index) => (
            <span key={Number(index)}>{item}</span>
          ))}
      </div>
    </main>
  )
}
