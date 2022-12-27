---
to: apps/client/src/page-components/<%= name %>/<%= name %>.tsx
---
export type <%= h.changeCase.pascal(name) %>Props = {
  title: string
}

export default function <%= h.changeCase.pascal(name) %>({ title } : <%= h.changeCase.pascal(name) %>Props) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
