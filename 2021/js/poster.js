if (window.location.hash !== undefined && window.location.hash.includes("adventure")) {
const posterid = window.location.pathname.split("/").splice(-1)[0].split(".")[0];
document.documentElement.classList.add("poster");
const tabs = document.createElement("div");
tabs.id = "tabs";
// Main tab
const main = document.getElementById("main");
const tab1 = document.createElement("input"); tab1.type = "radio"; tab1.name = "tabs"; tab1.id = "tab1"; tab1.checked = true;
const lab1 = document.createElement("label"); lab1.htmlFor = "tab1"; lab1.textContent = "Poster";
tabs.appendChild(tab1); tabs.appendChild(lab1);
// YouTube video tab
const vid = document.createElement("iframe"); vid.id = "video"; vid.style.display = "none";
const tabv = document.createElement("input"); tabv.type = "radio"; tabv.name = "tabs"; tabv.id = "tabv";
const labv = document.createElement("label"); labv.htmlFor = "tabv"; labv.textContent = "Video Presentation";
var videoURL = null;
var as = main.getElementsByTagName("a");
for (i = 0; i < as.length; i++) {
  if (as[i].textContent.includes("Recording") || as[i].textContent.includes("Video")) {
    videoURL = as[i].href;
    as[i].target="_blank";
    break;
  }
}
if (videoURL != null) {
  videoURL = videoURL.replace("youtu.be/", "youtube.com/embed/");
  videoURL = videoURL.replace(/youtube.com\/watch\?v=([^&]*)(?:\&.*)?/, "youtube.com/embed/$1");
  main.parentNode.appendChild(vid);
  tabs.appendChild(tabv); tabs.appendChild(labv);
}
// PDF poster tab
const pdf = document.createElement("iframe"); pdf.id = "pdfposter"; pdf.style.display = "none";
const tabp = document.createElement("input"); tabp.type = "radio"; tabp.name = "tabs"; tabp.id = "tabp";
const labp = document.createElement("label"); labp.htmlFor = "tabp"; labp.textContent = "Poster";
var posterURL = null;
var as = main.getElementsByTagName("a");
for (i = 0; i < as.length; i++) {
  if (as[i].textContent == "Poster") {
    posterURL = as[i].href;
    as[i].target="_blank";
    break;
  }
}
if (posterURL != null) {
  console.log(posterURL);
  if (posterURL.endsWith(".pdf")) posterURL = posterURL.replace("/2021/poster/","/2021/poster/viewpdf.html#");
  main.parentNode.appendChild(pdf);
  lab1.textContent = "Abstract";
  tabs.appendChild(tabp); tabs.appendChild(labp);
}
// PDF preprint
var pdfpreprint = document.createElement("iframe"); pdfpreprint.id = "pdfpreprint"; pdfpreprint.style.display = "none";
const tabt = document.createElement("input"); tabt.type = "radio"; tabt.name = "tabs"; tabt.id = "tabt";
const labt = document.createElement("label"); labt.htmlFor = "tabt"; labt.textContent = "Preprint";
var preprintURL = null;
var as = main.getElementsByTagName("a");
for (i = 0; i < as.length; i++) {
  if (as[i].textContent == "Preprint") {
    preprintURL = as[i].href;
    as[i].target="_blank";
    break;
  }
}
if (preprintURL != null) {
  if (navigator.userAgent.indexOf("Chrome") > -1) {
    pdfpreprint = document.createElement("div");pdfpreprint.id = "pdfpreprint"; pdfpreprint.style.display = "none";
    pdfpreprint.innerHTML = "Chrome cannot embed the password-protected preprints. <a href=\""+preprintURL+"\" target=\"_blank\">Open preprint in a new browser tab or download.</a>.";
  } else {
    preprintURL = preprintURL.replace("2021/preprints/","2021/preprints/viewpdf.html#");
  }
  main.parentNode.appendChild(pdfpreprint);
  tabs.appendChild(tabt); tabs.appendChild(labt);
}
// Jitsi Tab
const iframe = document.createElement("iframe"); iframe.id = "jitsi";
iframe.allow = "camera; microphone; display-capture; fullscreen; autoplay; clipboard-write";
iframe.allowfullscreen = true;
iframe.style.display = "none";
main.parentNode.appendChild(iframe);
const tabj = document.createElement("input"); tabj.type = "radio"; tabj.name = "tabs"; tabj.id = "tabj";
const labj = document.createElement("label"); labj.htmlFor = "tabj"; labj.textContent = "Jitsi";
tabs.appendChild(tabj); tabs.appendChild(labj);
// Event handler
function ch(e) {
  main.style.display = (e.target === tab1) ? "block" : "none";
  vid.style.display = (videoURL && e.target === tabv) ? "block" : "none";
  pdf.style.display = (posterURL && e.target === tabp) ? "block" : "none";
  pdfpreprint.style.display = (preprintURL && e.target === tabt) ? "block" : "none";
  iframe.style.display = (e.target === tabj) ? "block" : "none";
  if (e.target === tabv && (vid.src === undefined || vid.src == "")) 
    vid.src = videoURL;
  if (e.target === tabp && (pdf.src === undefined || pdf.src == "")) 
    pdf.src = posterURL;
  if (e.target === tabt && (pdfpreprint.src === undefined || pdfpreprint.src == "")) 
    pdfpreprint.src = preprintURL;
  if (e.target === tabj && (iframe.src === undefined || iframe.src == ""))
    iframe.src = "https://meet.kif.rocks/sisapposter"+posterid+"#jitsi_meet_external_api_id=0&config.startWithAudioMuted=false&config.startWithVideoMuted=false&config.prejoinPageEnabled=false&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&interfaceConfig.MOBILE_APP_PROMO=false&interfaceConfig.HIDE_INVITE_MORE_HEADER=true&interfaceConfig.DISABLE_JOIN_LEAVE_NOTIFICATIONS=true&interfaceConfig.DISABLE_VIDEO_BACKGROUND=true&interfaceConfig.SHOW_BRAND_WATERMARK=false&interfaceConfig.SHOW_JITSI_WATERMARK=false&interfaceConfig.SHOW_POWERED_BY=false&interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE=false&interfaceConfig.SHOW_WATERMARK_FOR_GUESTS=false&interfaceConfig.TOOLBAR_BUTTONS=%5B%22microphone%22%2C%22camera%22%2C%22closedcaptions%22%2C%22desktop%22%2C%22fullscreen%22%2C%22fodeviceselection%22%2C%22hangup%22%2C%22profile%22%2C%22chat%22%2C%22recording%22%2C%22livestreaming%22%2C%22etherpad%22%2C%22sharedvideo%22%2C%22settings%22%2C%22raisehand%22%2C%22videoquality%22%2C%22filmstrip%22%2C%22feedback%22%2C%22stats%22%2C%22shortcuts%22%2C%22tileview%22%2C%22videobackgroundblur%22%2C%22download%22%2C%22help%22%2C%22mute-everyone%22%5D&appData.localStorageContent=null"
}
tab1.onchange = tabv.onchange = tabp.onchange = tabt.onchange = tabj.onchange = ch;
main.parentNode.insertBefore(tabs, main);
}
