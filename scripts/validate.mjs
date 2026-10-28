import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const release=JSON.parse(fs.readFileSync('release-manifest.json'));
const nav=JSON.parse(fs.readFileSync('data.json'));
const hash=f=>createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const list=dir=>fs.readdirSync(dir,{recursive:true}).filter(f=>fs.statSync(path.join(dir,f)).isFile()).map(f=>f.replaceAll('\\','/')).sort();
assert.deepEqual(list('source-docs'),Object.keys(release.sourceHashes).sort(),'Source inventory');
for(const [f,h]of Object.entries(release.sourceHashes))assert.equal(hash('source-docs/'+f),h,'Original source modified: '+f);
assert.equal(nav.filter(x=>x.kind==='section').length,49);assert.equal(nav.filter(x=>x.kind==='settings').length,17);
let fields=0,items=0,pairs=0;const expected=new Map();
for(const u of nav){const m=JSON.parse(fs.readFileSync('source-docs/'+u.path+'/manifest.json'));for(const k of ['desktop','mobile'])if(m[k])expected.set(u.slug+':'+k,path.basename(m[k]));const visit=(list,parent='')=>list.forEach((f,i)=>{parent?items++:fields++;const key=parent?parent+'.'+i:String(i);for(const [j,p]of(f.pairs||[]).entries()){pairs++;for(const k of ['panel','result'])if(p[k])expected.set(`${u.slug}:${key}:${j}:${k}`,path.basename(p[k]));}visit(f.item_fields||[],key);});visit(m.fields);}
assert.equal(fields,562);assert.equal(items,139);assert.equal(pairs,907);
assert.deepEqual([...expected].sort(),release.assignments.map(x=>[x.ref,x.file]).sort(),'Image mapping differs from original manifest');
for(const {ref,file}of release.assignments){const slug=ref.split(':')[0],html=fs.readFileSync('dist/'+slug+'/index.html','utf8');const start=html.indexOf(`data-source-ref="${ref}"`);assert.ok(start>=0,'Missing option image '+ref);const figure=html.slice(start,html.indexOf('</figure>',start));assert.ok(figure.includes(`/carmella-docs/images/${file}`),'Wrong option image '+ref);}
const images=list('source-docs/images');assert.equal(images.length,1146);assert.deepEqual(list('dist/images'),images);
for(const image of images)assert.equal(hash('dist/images/'+image),hash('source-docs/images/'+image),'Published original image changed: '+image);
const files=list('dist').filter(f=>f.endsWith('.html'));let references=0;
for(const f of files){const html=fs.readFileSync('dist/'+f,'utf8');assert.ok(!/بانتظار محتوى الثيم|واجهة الدليل جاهزة، والشروحات|سيُضاف محتوى/.test(html),'Placeholder page '+f);for(const match of html.matchAll(/(?:href|src)="(\/carmella-docs\/[^"?#]*)(?:[^"\s]*)"/g)){let target=decodeURIComponent(match[1].replace('/carmella-docs/',''));if(!target||target.endsWith('/'))target+='index.html';assert.ok(fs.existsSync('dist/'+target),f+': '+target);references++;}}
assert.equal(files.length,73);assert.ok(fs.existsSync('dist/pagefind/pagefind.js'));
console.log(JSON.stringify({pages:files.length,components:49,settingGroups:17,fields,itemFields:items,pairs,images:images.length,verifiedAssignments:expected.size,internalReferences:references,brokenReferences:0}));
