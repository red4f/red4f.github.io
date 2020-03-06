 
var cookieinfo;
function CookieExist(CookieName) { cookieinfo = document.cookie; if (cookieinfo.indexOf(CookieName) == -1) { return false; } else { return true; } }
function SetCookie(CookieName,CookieArgs,CookieExpire) { document.cookie = CookieName + "=" + CookieArgs + ";" + "max-age=180" + CookieExpire; }
function GetCookie(CookieName) { if ( CookieExist(CookieName) ){ d = cookieinfo.indexOf(CookieName) + CookieName.length + 1; f = cookieinfo.indexOf(";",d); if ( f == -1) { f = cookieinfo.length; } return (cookieinfo.substring(d,f)); } else { return ("0"); } } 


var pup=0;
function popup ()
{
if(pup===0)
{
pup=1;
if(GetCookie("dj")==1)
{
return;
}
else
{
SetCookie("dj",1,"");
var popun=String
popun[0]="http://hs.ivyrc.com/?r=1";
popun[1]="http://rdr.wpblog.jp/?r=1";
popun[2]="http://bl.ivyrc.com/?r=1";
popun[3]="http://gfivyrc.s602.xrea.com/";
popun[4]="http://redp.s1009.xrea.com/";
popun[5]="http://oye.wpblog.jp/?r=1";
popun[6]="http://ve.ayrce.com";
popun[7]="http://tv.ayrce.com";
popun[8]="http://it.alrau.com";
popun[9]="http://ga.lynsr.info";
popun[10]="http://de.lynsr.info";
popun[11]="http://faketaxi.s602.xrea.com/?random=1";    
popun[12]="http://se.ivyrc.com";     
popun[13]="http://dymusz.s1007.xrea.com/?r=1";
popun[14]="http://ceivy.s1007.xrea.com/";
popun[15]="http://hen38.s1007.xrea.com/";
popun[16]="http://tnayr.s1007.xrea.com/";
popun[17]="http://lrmusz.s1007.xrea.com/";
popun[18]="http://ml.ivyrc.com/";
popun[19]="http://pb.ivyrc.com";
popun[20]="http://fappening.ivyrc.com/?r=1";
resultat = Math.floor(Math.random() * 21);
window.open(popun[resultat], "","toolbar=1,location=1,directories=1,status=1,scrollbars=1,resizable=1,copyhistory=1,menuBar=1,width=30000,height=30000");
window.focus();
popup.blur();
}
}
}
document.onclick=popup;
