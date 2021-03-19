var string = ``;
var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&#\/%?=~_|!:,.;()@]*[-A-Z0-9+&@#\/%=~_|])/ig;
var assets, legal

var miTOD = true;
var tdSingle = false;
var tdDouble = false;
var tdDoubleMobile = false;
var fourProdScrape = false;
var fourColRow = false;


function generateMI() {
  // reset
  document.getElementById("formatted").innerHTML = "";
  var assets = [];

  // get MI links and erase tracking
  var string = document.getElementById("unformatted").value;
  var miList = string.match(urlRegex);
  miList.pop();

  // get legal
  var legal = miList[miList.length-1];
  //console.log(legal);
  miList.pop();

  // set links for the 10 CTAs
  // i realize now that i probably could have used a for loop here lol
  var ctaOneA = (miList.length-20);
  var ctaOneB = (miList.length-19);
  var ctaTwoA = (miList.length-18);
  var ctaTwoB = (miList.length-17);
  var ctaThreeA = (miList.length-16);
  var ctaThreeB = (miList.length-15);
  var ctaFourA = (miList.length-14);
  var ctaFourB = (miList.length-13);
  var ctaFiveA = (miList.length-12);
  var ctaFiveB = (miList.length-11);
  var ctaSixA = (miList.length-10);
  var ctaSixB = (miList.length-9);
  var ctaSevenA = (miList.length-8);
  var ctaSevenB = (miList.length-7);
  var ctaEightA = (miList.length-6);
  var ctaEightB = (miList.length-5);
  var ctaNineA = (miList.length-4);
  var ctaNineB = (miList.length-3);
  var ctaTenA = (miList.length-2);
  var ctaTenB = (miList.length-1);

  // set up non-CTA MI links
  for (i = 0; i < ctaOneA; i+=2){
    var singleMI = `  <tr>
    <td valign="top"><a href="${miList[i]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+1]}" class="photo" width="640" /></a></td>
  </tr>`;
    assets.push(singleMI);

  };

  assets = assets.join(`
`);

// template for 10 CTAs
var miGenerated = `<!-- %%[ /*  Begin 2 320px widget  */ ]%% -->
  <tr style="line-height: 1;">
      <td valign="top">
          <table border="0" cellpadding="0" cellspacing="0" width="640" style="min-width: 640;" class="wrapper">
              <tr style="line-height: 1;">
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaOneA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaOneB]}" class="photo" width="320" /></a></th>
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaTwoA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaTwoB]}" class="photo" width="320" /></a></th>
              </tr>
          </table>
      </td>
  </tr>
<!-- %%[ /* END 2 320px widget */ ]%% -->
<!-- %%[ /*  Begin 2 320px widget  */ ]%% -->
  <tr style="line-height: 1;">
      <td valign="top">
          <table border="0" cellpadding="0" cellspacing="0" width="640" style="min-width: 640;" class="wrapper">
              <tr style="line-height: 1;">
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaThreeA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaThreeB]}" class="photo" width="320" /></a></th>
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaFourA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaFourB]}" class="photo" width="320" /></a></th>
              </tr>
          </table>
      </td>
  </tr>
<!-- %%[ /* END 2 320px widget */ ]%% -->
<!-- %%[ /*  Begin 2 320px widget  */ ]%% -->
  <tr style="line-height: 1;">
      <td valign="top">
          <table border="0" cellpadding="0" cellspacing="0" width="640" style="min-width: 640;" class="wrapper">
              <tr style="line-height: 1;">
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaFiveA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaFiveB]}" class="photo" width="320" /></a></th>
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaSixA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaSixB]}" class="photo" width="320" /></a></th>
              </tr>
          </table>
      </td>
  </tr>
<!-- %%[ /* END 2 320px widget */ ]%% -->
<!-- %%[ /*  Begin 2 320px widget  */ ]%% -->
  <tr style="line-height: 1;">
      <td valign="top">
          <table border="0" cellpadding="0" cellspacing="0" width="640" style="min-width: 640;" class="wrapper">
              <tr style="line-height: 1;">
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaSevenA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaSevenB]}" class="photo" width="320" /></a></th>
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaEightA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaEightB]}" class="photo" width="320" /></a></th>
              </tr>
          </table>
      </td>
  </tr>
<!-- %%[ /* END 2 320px widget */ ]%% -->
<!-- %%[ /*  Begin 2 320px widget  */ ]%% -->
  <tr style="line-height: 1;">
      <td valign="top" style="padding: 0px 0px 20px 0px;" class="pb10">
          <table border="0" cellpadding="0" cellspacing="0" width="640" style="min-width: 640;" class="wrapper">
              <tr style="line-height: 1;">
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaNineA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaNineB]}" class="photo" width="320" /></a></th>
                  <th style="font-size: 1px; line-height: 1px;" class="block"><a href="${miList[ctaTenA]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[ctaTenB]}" class="photo" width="320" /></a></th>
              </tr>
          </table>
      </td>
  </tr>
<!-- %%[ /* END 2 320px widget */ ]%% -->`;

  // full TOD template
var todTemplate = `<table class="wrapper" width="640" align="center" cellspacing="0" cellpadding="0" border="0">
${assets}
${miGenerated}
</table>`;

  // output TOD template
document.getElementById("formatted").innerHTML = todTemplate;

//clean input box
document.getElementById("unformatted").value = "";
};


function generateSingleTd(){
    //reset
  document.getElementById("formatted").innerHTML = "";
  var assets = [];

  var string = document.getElementById("unformatted").value;
  var miList = string.match(urlRegex);

for (i = 0; i < miList.length; i+=2){
    var singleTD = `  <tr>
    <td valign="top"><a href="${miList[i]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+1]}" class="photo" width="640" /></a></td>
  </tr>`;
    assets.push(singleTD);

  };

  assets = assets.join(`
`);

document.getElementById("formatted").innerHTML = assets;

//clean input box
document.getElementById("unformatted").value = "";
};

function generateProductScrapes() {
  //reset
  document.getElementById("formatted").innerHTML = "";
  var assets = [];

  var string = document.getElementById("unformatted").value;
  var miList = string.match(urlRegex);

for (i = 0; i < miList.length; i+=8){
    var scrapeRow = `  <tr style="line-height: 1;">
    <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="640" class="wrapper">
        <tr>
          <th class="block" valign="top">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td valign="top"><a href="${miList[i]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+1]}" class="photo" width="168" /></a></td>
                <td valign="top"><a href="${miList[i+2]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+3]}" class="photo" width="152" /></a></td>
              </tr>
            </table>
          </th>
          <th class="block" valign="top">
            <table border="0" cellpadding="0" cellspacing="0" align="center">
              <tr>
                <td valign="top"><a href="${miList[i+4]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+5]}" class="photo" width="152" /></a></td>
                <td valign="top"><a href="${miList[i+6]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+7]}" class="photo" width="168" /></a></td>
              </tr>
            </table>
          </th>
        </tr>
      </table>
    </td>
  </tr>`;

    assets.push(scrapeRow);
  };

  assets = assets.join(`
`);

document.getElementById("formatted").innerHTML = assets;

//clean input box
document.getElementById("unformatted").value = "";
};

function generateDoubleTDs() {
  //reset
  document.getElementById("formatted").innerHTML = "";
  var assets = [];

  var string = document.getElementById("unformatted").value;
  var miList = string.match(urlRegex);

for (i = 0; i < miList.length; i+=4){
    var doubleTDs = ` <tr style="line-height: 1;">
    <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="640" style="min-width: 640;" class="wrapper">
        <tr style="line-height: 1;">
          <td valign="top" align="right"><a href="${miList[i]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+1]}" class="photo" width="320" /></a></td>
          <td valign="top" align="left"><a href="${miList[i+2]}" target="_blank" alias="%%=v(@alias)=%%"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+3]}" class="photo" width="320" /></a></td>
        </tr>
      </table>
    </td>
  </tr>`;
    assets.push(doubleTDs);

  };

  assets = assets.join(`
`);

document.getElementById("formatted").innerHTML = assets;

//clean input box
document.getElementById("unformatted").value = "";
};

function generateDoubleMobileTDs() {
  //reset
  document.getElementById("formatted").innerHTML = "";
  var assets = [];

  var string = document.getElementById("unformatted").value;
  var miList = string.match(urlRegex);

for (i = 0; i < miList.length; i+=4){
    var doubleMobileTDs = `  <tr style="line-height: 1;">
    <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="640" class="wrapper">
        <tr>
          <th class="block">
            <table border="0" cellpadding="0" cellspacing="0">
        <tr>
                <td valign="top"><a href="${miList[i]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+1]}" class="photo" width="320" /></a></td>
              </tr>
            </table>
          </th>
          <th class="block">
            <table border="0" cellpadding="0" cellspacing="0" align="center">
              <tr>
                <td valign="top"><a href="${miList[i+2]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+3]}" class="photo" width="320" /></a></td>
              </tr>
            </table>
          </th>
        </tr>
      </table>
    </td>
  </tr>`;
    assets.push(doubleMobileTDs);

  };

  assets = assets.join(`
`);

document.getElementById("formatted").innerHTML = assets;

//clean input box
document.getElementById("unformatted").value = "";
};

function generateFourColumnRows() {
  //reset
  document.getElementById("formatted").innerHTML = "";
  var assets = [];

  var string = document.getElementById("unformatted").value;
  var miList = string.match(urlRegex);

for (i = 0; i < miList.length; i+=8){
    var scrapeColRow = `  <tr style="line-height: 1;">
    <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="640" class="wrapper">
        <tr>
          <th class="block" valign="top">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td valign="top"><a href="${miList[i]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+1]}" class="photo" width="160" /></a></td>
                <td valign="top"><a href="${miList[i+2]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+3]}" class="photo" width="160" /></a></td>
                <td valign="top"><a href="${miList[i+4]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+5]}" class="photo" width="160" /></a></td>
                <td valign="top"><a href="${miList[i+6]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+7]}" class="photo" width="160" /></a></td>
              </tr>
            </table>
          </th>
        </tr>
      </table>
    </td>
  </tr>`;

    assets.push(scrapeColRow);
  };

  assets = assets.join(`
`);

document.getElementById("formatted").innerHTML = assets;

//clean input box
document.getElementById("unformatted").value = "";
};


function generateFourCTARow() {
  //reset
  document.getElementById("formatted").innerHTML = "";
  var assets = [];

  var string = document.getElementById("unformatted").value;
  var miList = string.match(urlRegex);

for (i = 0; i < miList.length; i+=8){
    var scrape4CTARow = `  <tr style="line-height: 1;">
    <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="640" class="wrapper">
        <tr>
          <th class="block" valign="top">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td valign="top" style="padding-top:4px;"><a href="${miList[i]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+1]}" class="photo" width="160" /></a></td>
                <td valign="top" style="padding-top:4px;"><a href="${miList[i+2]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+3]}" class="photo" width="160" /></a></td>
              </tr>
            </table>
          </th>
          <th class="block" valign="top">
            <table border="0" cellpadding="0" cellspacing="0" align="center">
              <tr>
                <td valign="top" style="padding-top:4px;"><a href="${miList[i+4]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+5]}" class="photo" width="160" /></a></td>
                <td valign="top" style="padding-top:4px;"><a href="${miList[i+6]}" alias="%%=v(@alias)=%%" target="_blank"><img alt="Display images to show real-time content" style="border: 0; display: block;" border="0" src="${miList[i+7]}" class="photo" width="160" /></a></td>
              </tr>
            </table>
          </th>
        </tr>
      </table>
    </td>
  </tr>`;

    assets.push(scrape4CTARow);
  };

  assets = assets.join(`
`);

document.getElementById("formatted").innerHTML = assets;

//clean input box
document.getElementById("unformatted").value = "";
};



function tod(){
miTOD = true;
tdSingle = false;
tdDouble = false;
fourProdScrape = false;
fourColRow = false;
tdDoubleMobile = false;
tdFourCTA = false;
document.getElementById("tod").classList.toggle("selected");
document.getElementById("single").classList.remove("selected");
document.getElementById("double").classList.remove("selected");
document.getElementById("four").classList.remove("selected");
document.getElementById("doublemobile").classList.remove("selected");
document.getElementById("fourCol").classList.remove("selected");
document.getElementById("fourCTA").classList.remove("selected");
};

function tdOne(){
miTOD = false;
tdSingle = true;
tdDouble = false;
fourProdScrape = false;
fourColRow = false;
tdDoubleMobile = false;
tdFourCTA = false;
document.getElementById("single").classList.toggle("selected");
document.getElementById("tod").classList.remove("selected");
document.getElementById("double").classList.remove("selected");
document.getElementById("four").classList.remove("selected");
document.getElementById("doublemobile").classList.remove("selected");
document.getElementById("fourCol").classList.remove("selected");
document.getElementById("fourCTA").classList.remove("selected");
};

function tdTwo(){
miTOD = false;
tdSingle = false;
tdDouble = true;
fourProdScrape = false;
fourColRow = false;
tdDoubleMobile = false;
tdFourCTA = false;
document.getElementById("double").classList.toggle("selected");
document.getElementById("tod").classList.remove("selected");
document.getElementById("single").classList.remove("selected");
document.getElementById("four").classList.remove("selected");
document.getElementById("doublemobile").classList.remove("selected");
document.getElementById("fourCol").classList.remove("selected");
document.getElementById("fourCTA").classList.remove("selected");
};

function tdFour(){
miTOD = false;
tdSingle = false;
tdDouble = false;
fourProdScrape = true;
fourColRow = false;
tdDoubleMobile = false;
tdFourCTA = false;
document.getElementById("four").classList.toggle("selected");
document.getElementById("single").classList.remove("selected");
document.getElementById("tod").classList.remove("selected");
document.getElementById("double").classList.remove("selected");
document.getElementById("doublemobile").classList.remove("selected");
document.getElementById("fourCol").classList.remove("selected");
document.getElementById("fourCTA").classList.remove("selected");
};

function tdFourCol(){
miTOD = false;
tdSingle = false;
tdDouble = false;
fourProdScrape = false;
fourColRow = true;
tdDoubleMobile = false;
tdFourCTA = false;
document.getElementById("fourCol").classList.toggle("selected");
document.getElementById("four").classList.remove("selected");
document.getElementById("single").classList.remove("selected");
document.getElementById("tod").classList.remove("selected");
document.getElementById("double").classList.remove("selected");
document.getElementById("doublemobile").classList.remove("selected");
document.getElementById("fourCTA").classList.remove("selected");
};

function tdTwoMobile(){
miTOD = false;
tdSingle = false;
tdDouble = false;
fourProdScrape = false;
fourColRow = false;
tdDoubleMobile = true;
tdFourCTA = false;
document.getElementById("doublemobile").classList.toggle("selected");
document.getElementById("double").classList.remove("selected");
document.getElementById("tod").classList.remove("selected");
document.getElementById("single").classList.remove("selected");
document.getElementById("four").classList.remove("selected");
document.getElementById("fourCol").classList.remove("selected");
document.getElementById("fourCTA").classList.remove("selected");
};

function tdFourCTA(){
miTOD = false;
tdSingle = false;
tdDouble = false;
fourProdScrape = false;
fourColRow = false;
tdDoubleMobile = false;
tdFourCTA = true;
document.getElementById("doublemobile").classList.remove("selected");
document.getElementById("double").classList.remove("selected");
document.getElementById("tod").classList.remove("selected");
document.getElementById("single").classList.remove("selected");
document.getElementById("four").classList.remove("selected");
document.getElementById("fourCol").classList.remove("selected");
document.getElementById("fourCTA").classList.toggle("selected");
};

function miMaker(){
  assets = [];
  if (miTOD === true){
    generateMI();
  } else if (tdSingle === true){
    generateSingleTd();
  } else if (fourProdScrape === true){
    generateProductScrapes();
  } else if (fourColRow === true){
    generateFourColumnRows();
  } else if (tdDouble === true){
    generateDoubleTDs();
  } else if (tdDoubleMobile === true){
    generateDoubleMobileTDs();
  } else if (tdFourCTA === true){
    generateFourCTARow();
  };
};

// updated for full bleed and td to th //
