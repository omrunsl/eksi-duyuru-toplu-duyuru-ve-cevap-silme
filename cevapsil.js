const elements = document.querySelectorAll("a[title='Sil']");
let urls = [];
for (let index = 0; index < elements.length; index++) {
    const element = elements[index]["href"];
    let _element = element.replace("javascript:odd('", "");
    _element = _element.replace("')", "");
    urls.push(_element);
}

let x = 0;

setInterval(function() {
  if (x < urls.length) {
    let url = window.open(urls[x], "_blank");
    url.focus();
    url.addEventListener('load', function() {
      let yes = url.document.getElementsByName('s');
      yes[0].click();
      },true);
  }
  else return;
  x++;
}, 5000);
