import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

serve({
  "/": () => new Response("デノ"),
  404: () => new Response("ありまへん"),
});
