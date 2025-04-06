import { gfm } from "https://deno.land/x/gfm@0.2.1/mod.ts";

export async function renderMarkdown(text: string): Promise<string> {
  return gfm.render(text);
}
