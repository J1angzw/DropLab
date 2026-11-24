from pathlib import Path
import re,sys
root=Path(__file__).resolve().parent
dist=root/'dist'
html=(dist/'index.html').read_text()
css=(dist/'style.css').read_text()
order=['i18n.mjs','core.mjs','presets.mjs','diagram.mjs','gradient.mjs','gradient-diagram.mjs','app.mjs']
js='\n'.join(re.sub(r'^import .*?;\s*$', '', (dist/f).read_text(), flags=re.M).replace('export const ','const ').replace('export function ','function ') for f in order)
assert not re.search(r'^import\s',js,re.M)
assert '</script' not in js.lower()
html=html.replace('<link rel="stylesheet" href="style.css">','<style>\n'+css+'\n</style>').replace('<script type="module" src="app.mjs"></script>','<script type="module">\n'+js+'\n</script>')
assert not re.search(r'<script[^>]+src=',html)
assert not re.search(r'<link[^>]+stylesheet',html)
(dist/'DropLab.html').write_text(html)
(root/'single-file-check.mjs').write_text(js)
if len(sys.argv)>1:Path(sys.argv[1]).write_text(html)
print(f'Self-contained DropLab HTML: {len(html.encode())} bytes; inline CSS and all code modules.')
