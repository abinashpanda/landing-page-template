export type HomeProps = {
  title: string
  heroDescription: string
}

export default function Home({ title, heroDescription } : HomeProps) {
  return (
    <div className='p-4'>
      <h1>{title}</h1>
      <p>{heroDescription}</p>
    </div>
  )
}
