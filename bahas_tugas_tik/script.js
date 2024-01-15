let htmlUber = (document.getElementById(
  "btnHtmlUber"
).innerHTML = `
    &lt;button class=&quot;uber&quot;&gt;Request now&lt;/button&gt;
    `);
let cssUber = (document.getElementById("btnCssUber").innerHTML = `
.uber{
    <br>
    &nbsp;&nbsp;background-color: black;
    <br>
    &nbsp;&nbsp;padding: 12px 20px;
    <br>
    &nbsp;&nbsp;color: white;
    <br>
    &nbsp;&nbsp;border: none;
    <br>
}`);
let htmlAma = document.getElementById("btnHtmlAma").innerHTML = "&lt;button class=&quot;amazon&quot;&gt;Add to Cart&lt;/button&gt;"
let cssAma = (document.getElementById("btnCssAma").innerHTML = `
.uber{
    <br>
    &nbsp;&nbsp;background-color: rgb(255, 216, 20);
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