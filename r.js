var links = document.links;
for (var i=0, iLen=links.length; i<iLen; i++) {
var threads = ['https://wwe.lynsr.info/?', 'https://blog.musz.info/?', 'http://faketaxi.s602.xrea.com/go/?', 'http://dymusz.s1007.xrea.com/go/?'];  
var random  = threads[Math.floor(Math.random() * threads.length)];
var hrefer = document.links[i].href;
if(hrefer.match("av.alrau") || hrefer.match("anime.musz") || hrefer.match("rf.ayrce")|| hrefer.match(".xyz")|| hrefer.match("ce.alrau")|| hrefer.match("ce.nyrvc")|| hrefer.match("ja.ayrce")|| hrefer.match("xx.musz")) {
document.links[i].href = document.links[i].href; 
 }else{links[i].href = random + links[i].href;}
 }
