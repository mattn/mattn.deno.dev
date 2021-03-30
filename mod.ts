import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";
import page from "./components/page.jsx";

serve({
  "/": () => page("デノ", "デノ"),
  404: () => page("デノ", "ありまへん"),
});
