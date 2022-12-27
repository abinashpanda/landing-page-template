export type HomeProps = {
  title: string
}

export default function Home({ title } : HomeProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
