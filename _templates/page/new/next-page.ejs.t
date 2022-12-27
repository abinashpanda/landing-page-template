---
to: "apps/client/src/pages/<%= name === 'home' ? 'index' : `${name}` %>.tsx"
---
import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import <%= h.changeCase.pascal(name) %> from 'page-components/<%= name %>'
import type { <%= h.changeCase.pascal(name) %>Props } from 'page-components/<%= name %>'

type <%= h.changeCase.pascal(name) %>PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function <%= h.changeCase.pascal(name) %>Page({ title }: <%= h.changeCase.pascal(name) %>PageProps) {
  return (
    <<%= h.changeCase.pascal(name) %> title={title} />
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<<%= h.changeCase.pascal(name) %>Props>> {
  return {
    props: {
      title: '<%= h.changeCase.sentence(name) %>',
    }
  }
}
