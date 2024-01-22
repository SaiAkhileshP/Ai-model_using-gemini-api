 import { GoogleGenerativeAI } from "@google/generative-ai";
      const inp = document.getElementById("inp");
      const res = document.getElementById("res");
      const inpdis = document.getElementById("inpdis");
      const btn = document.getElementById("btn");
      const reset = document.getElementById("reset")
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyA_l0sZVDcfyU75f2pEsujMpv7D9wEWfeM');

async function run() {
  // For text-only input, use the gemini-pro model
  inpdis.innerHTML = ""
  res.innerHTML = "Genetrating Response...";
  res.style.opacity=.5
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = inp.value

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  // console.log(text);
inpdis.innerHTML ="Your prompt : "+prompt
 res.style.opacity=1
//   let i=0;
//   function typeWriter() {
//   if (i < text.length) {
//      res.innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, 10);
//   }
// }

res.innerHTML = marked.parse(text);
// res.innerHTML = ""
// typeWriter();


}
btn.onclick = () =>{
    if(inp.value.length==0){
      res.innerHTML = "-: Empty Prompt can't be acceptable :-"
    }
    else{
    run();
    inp.value = '';
    }
}
reset.onclick = () =>{
  res.innerHTML = ""
  inpdis.innerHTML = ""
}

// ------------------------------Hiding the data from users-------------------------------------------
      document.addEventListener("keydown", function (event){
          if (event.ctrlKey){
            event.preventDefault();
          }
          if(event.keyCode == 123){
            event.preventDefault();
          }
      });

      document.addEventListener('contextmenu', 
          event => event.preventDefault()
      );
// ---------------------------------------------------------------------------