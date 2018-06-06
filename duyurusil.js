const divs = document.getElementsByClassName("entry0");
const urls = [];
const ids = [];
for (let i = 0; i < divs.length; i++) {
  const div = divs[i];
  let _ids = div.id.slice(1,8);
  ids.push(_ids);
  let base_url = "https://www.eksiduyuru.com/index.php?m=qd&id=" + _ids;
  urls.push(base_url);
}

let x = 0;

setInterval(function() {
  if (x < urls.length) {
    let url = window.open(urls[x], "_blank", 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=10, height=10, visible=none', '');
    url.focus();
    url.addEventListener('load', function() {
      let yes = url.document.getElementsByName('s');
      yes[0].click();
      },true);
  }
  else return;
  x++;
}, 5000);









    





  






















