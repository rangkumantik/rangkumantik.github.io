function clickTest() {
  alert("Tombol terklik!");
}

//Uber
let cssUber = (document.getElementById("btnCssUber").innerHTML = `
.uber{
    <br>
    &nbsp;&nbsp;background-color: black;
    <br>
    &nbsp;&nbsp;padding: 12px 20px;;
    <br>
    &nbsp;&nbsp;color: white;
    <br>
    &nbsp;&nbsp;border: none;
    <br>
}`);
let htmlUber = (document.getElementById("btnHtmlUber").innerHTML = `
    &lt;button class=&quot;uber&quot;&gt;Request now&lt;/button&gt;
`);


let uberHtmlCode = (document.innerHTML = `
<button class="uber">Request now</button>
`);
const copyHtmlUber = async () => {
  try {
    await navigator.clipboard.writeText(uberHtmlCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};



let uberCssCode = (document.innerHTML = `
.uber{
    background-color: black;
    padding: 12px 20px;;
    color: white;
    border: none;
  }
`);
const uberCssCopy = async () => {
  try {
    await navigator.clipboard.writeText(uberCssCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};

//Amazon
let htmlAma = (document.getElementById("btnHtmlAma").innerHTML =
  "&lt;button class=&quot;amazon&quot;&gt;Add to Cart&lt;/button&gt;");
let cssAma = (document.getElementById("btnCssAma").innerHTML = `
.amazon{
    <br>
    &nbsp;&nbsp;background-color: rgb(64, 164, 79);
    <br>
    &nbsp;&nbsp;padding: 12px 160px;
    <br>
    &nbsp;&nbsp;color: black;
    <br>
    &nbsp;&nbsp;border: none;
    <br>
    &nbsp;&nbsp;border-radius: 30px;
    <br>
}`);
let amaHtmlCode = (document.innerHTML = `
<button class="amazon">Add to Cart</button>
`);
const copyAmaCode = async () => {
  try {
    await navigator.clipboard.writeText(amaHtmlCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};
let amaCssCode = (document.innerHTML = `
.amazon{
    background-color: rgb(64, 164, 79);
    padding: 12px 160px;
    color: black;
    border: none;
    border-radius: 30px;
  }
`);
const amaCssCopy = async () => {
  try {
    await navigator.clipboard.writeText(amaCssCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};

//Github
let htmlGit = (document.getElementById("btnHtmlGit").innerHTML =
  "&lt;button class=&quot;github&quot;&gt;Sign up&lt;/button&gt;");
let cssGit = (document.getElementById("btnCssGit").innerHTML = `
.github{
    <br>
    &nbsp;&nbsp;background-color: rgb(64, 164, 79);
    <br>
    &nbsp;&nbsp;padding: 12px 160px;
    <br>
    &nbsp;&nbsp;color: white;
    <br>
    &nbsp;&nbsp;border: none;
    <br>
    &nbsp;&nbsp;border-radius: 5px;
    <br>
}`);
let gitHtmlCode = (document.innerHTML = `
<button class="github">Sign up</button>
`);
const copyGitCode = async () => {
  try {
    await navigator.clipboard.writeText(gitHtmlCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};
let gitCssCode = (document.innerHTML = `
.github{
    background-color: rgb(64, 164, 79);
    padding: 12px 160px;
    color: white;
    border: none;
    border-radius: 5px;
  }
`);
const gitCssCopy = async () => {
  try {
    await navigator.clipboard.writeText(gitCssCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};

//Boostrap
let htmlBootsGet = (document.getElementById("btnHtmlBootsGet").innerHTML =
  "&lt;button class=&quot;getStarted&quot;&gt;Get started&lt;/button&gt;");
let htmlBootsDwn = (document.getElementById("btnHtmlBootsDwn").innerHTML =
  "&lt;button class=&quot;download&quot;&gt;Download&lt;/button&gt;");
let cssBoots = (document.getElementById("btnCssBoots").innerHTML = `
.getStarted{
    <br>
    &nbsp;&nbsp;background-color: rgb(121, 82, 179);
    <br>
    &nbsp;&nbsp;padding: 12px 24px;
    <br>
    &nbsp;&nbsp;color: white;
    <br>
    &nbsp;&nbsp;border: none;
    <br>
    &nbsp;&nbsp;border-radius: 5px;
    <br>
}<br>
.download{
    <br>
    &nbsp;&nbsp;padding: 12px 160px;
    <br>
    &nbsp;&nbsp;color: rgb(121, 82, 179);
    <br>
    &nbsp;&nbsp;border: 1px solid rgb(108, 117, 125);
    <br>
    &nbsp;&nbsp;border-radius: 5px;
    <br>
}
`);
let bootsHtmlCode = (document.innerHTML = `
<button class="getStarted">Get started</button>
<button class="download">Download</button>
`);
const copyBootsCode = async () => {
  try {
    await navigator.clipboard.writeText(bootsHtmlCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};
let bootsCssCode = (document.innerHTML = `
.getStarted{
    background-color: rgb(121, 82, 179);
    padding: 12px 24px;
    color: white;
    border: none;
    border-radius: 5px;
  }
  .download{
    padding: 12px 160px;
    color: rgb(121, 82, 179);
    border: 1px solid rgb(108, 117, 125);
    border-radius: 5px;
  }
`);
const bootsCssCopy = async () => {
  try {
    await navigator.clipboard.writeText(bootsCssCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};

//LinkedIn
let htmlLinkApply = (document.getElementById("btnHtmlLinkApply").innerHTML =
  "&lt;button class=&quot;apply&quot;&gt;Apply on compant website&lt;/button&gt;");
let htmlLinkSave = (document.getElementById("btnHtmlLinkSave").innerHTML =
  "&lt;button class=&quot;save&quot;&gt;Save&lt;/button&gt;");
let cssLinkedIn = (document.getElementById("btnCssLinked").innerHTML = `
.apply{
    <br>
    &nbsp;&nbsp;background-color: rgb(10, 102, 194);
    <br>
    &nbsp;&nbsp;padding: 12px 24px;
    <br>
    &nbsp;&nbsp;color: white;
    <br>
    &nbsp;&nbsp;border: none;
    <br>
    &nbsp;&nbsp;border-radius: 100px;
    <br>
}<br>
.save{
    <br>
    &nbsp;&nbsp;padding: 12px 160px;
    <br>
    &nbsp;&nbsp;color: rgb(10, 102, 194);
    <br>
    &nbsp;&nbsp;border: 1px solid rgb(10, 102, 194);
    <br>
    &nbsp;&nbsp;border-radius: 100px;
    <br>
}
`);
let linkHtmlCode = (document.innerHTML = `
<button class="apply">Apply on compant website</button>
<button class="save">Save</button>
`);
const copyLinkCode = async () => {
  try {
    await navigator.clipboard.writeText(linkHtmlCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};
let linkCssCode = (document.innerHTML = `
.apply{
    background-color: rgb(10, 102, 194);
    padding: 12px 24px;
    color: white;
    border: none;
    border-radius: 100px;
}
.save{
    padding: 12px 160px;
    color: rgb(10, 102, 194);
    border: 1px solid rgb(10, 102, 194);
    border-radius: 100px;
  }
`);
const linkCssCopy = async () => {
  try {
    await navigator.clipboard.writeText(linkCssCode);
    alert("Udah kecopy!");
  } catch (err) {
    alert("eh ga bisa dicopy, coba hubungin gua biar dapet codenya!");
  }
};
