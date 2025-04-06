/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
// yaml.ts는 그대로 써도 되고, 버전은 0.224.0 이상이면 돼요.
import { extract } from "https://deno.land/std@0.224.0/front_matter/yaml.ts";

// markdown.ts 위치: "routes/utils/markdown.ts"
// 그래서 import 경로는 "./utils/markdown.ts"
import { renderMarkdown } from "./utils/markdown.ts";

// 여기서 가장 중요! 
// "posts" 폴더는 "routes"와 같은 레벨이니, 한 단계 올라가서 "../posts"가 돼요.
import postContent from "../posts/first-blog-post.md" with { type: "text" };

export const handler: Handlers = {
  async GET(_, ctx) {
    // postContent 안에 .md 파일의 텍스트가 이미 들어 있음
    const { attrs, body } = extract(postContent);
    const content = await renderMarkdown(body);

    // attrs에는 title, published_at 등이 들어 있고
    // content에는 HTML 변환된 본문이 들어 있어
    return ctx.render({ attrs, content });
  },
};

export default function BlogPostPage({ data }: PageProps) {
  return (
    <main class="p-6 max-w-screen-md mx-auto">
      <h1 class="text-4xl font-bold mb-4">{data.attrs.title}</h1>
      <p class="text-gray-500 text-sm mb-8">{data.attrs.published_at}</p>
      <div
        class="prose"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
}

