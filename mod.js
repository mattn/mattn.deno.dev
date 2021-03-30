import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

serve({
  "/": "Hello!",
  404: "Not Found",
});
