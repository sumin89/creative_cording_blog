/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "https://deno.land/std@0.224.0/front_matter/yaml.ts";
import { renderMarkdown } from "../../utils/markdown.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const slug = ctx.params.slug;
    const text = await Deno.readTextFile(`./posts/${slug}.md`);
    const { attrs, body } = extract(text);
    const content = await renderMarkdown(body);
    return ctx.render({ attrs, content });
  },
};

export default function BlogPostPage({ data }: PageProps) {
  return (
    <main class="p-6 max-w-screen-md mx-auto">
      <h1 class="text-4xl font-bold mb-4">{data.attrs.title}</h1>
      <p class="text-gray-500 text-sm mb-8">{data.attrs.published_at}</p>
      <div class="prose" dangerouslySetInnerHTML={{ __html: data.content }} />
    </main>
  );
}
