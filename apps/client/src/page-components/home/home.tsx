export type HomeProps = {
  title: string
  heroDescription: string
  activePrograms: { id: number; title: string; description: string }[]
}

export default function Home({ title, heroDescription, activePrograms }: HomeProps) {
  return (
    <div className="p-4">
      <h1>{title}</h1>
      <p>{heroDescription}</p>
      <div>
        {activePrograms.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
