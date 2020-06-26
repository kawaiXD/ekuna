var quotes = ['ekuna iseti sayvareli xar rom vgijdebi shen gamo daviwye simgera shen gamo daviwye bedniredad cxvoreba shen gamo gamichnda survili rom chagexuto da bevri gakoco me admians romelsac daje shexbitac ki agebinebda maxsovs adre mkitxes ras izav romantiulss gostvis romelsac mogwonso da progrmaulad dauwer sasiyvarulo teqsts tqo me megona es iqneboda ubralod sasacilo teqsti am nu ise cxvorebashi isic ki ar vicodi marto rogor gavzlebdi megobrebtan ar cahvdivar yovel dge saxshi vgdivar da gamochndi shen mls motamashe exac maxsovs sheni poto exac maxsovs rogor iyo chemi tvalebi sheni danaxvisass','nu es tu shegxvda mashin aq minda rom shen iseti sayavareli xar rom yoveli wami shentan ertad upro da upro mayvarebs shen tavs  gushin mkitxe rato giyvravaro imtom rom iseti gogo ar xar rom ar miyvarde xar lamazi xar chkvnai xar sayvareli da zalian magari imedai yovelvtvis chemi gogo iqnebi <3'];

var btn = document.querySelector('.btn');
var quote = document.querySelector('.quote');

btn.addEventListener('click', function(){
    var randomNum = Math.floor(Math.random() * 2); 
    quote.textContent = quotes[randomNum];

    console.log(randomNum);
    console.log(quotes[randomNum]);
})


