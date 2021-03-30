import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";

const style = {
  'margin': '50vh auto 0',
  'transform': 'translateY(-50%)',
  'padding': '15px 30px',
  'text-align': 'center',
  'font-size': '10em',
  'text-transform': 'uppercase',
};

export default function page({ title, children }) {
  return new Response(<html>
<title>{title}</title>
<meta charset="utf-8"/>
<main style={style}>
{children}
</main>
</html>, {header: {'content-type': 'text/html; charset=utf-8'}});
}
