---
to: apps/client/src/components/<%= name %>/index.ts
---
<%
  Component = h.changeCase.pascal(name)
%>
export { default } from './<%= name %>'
