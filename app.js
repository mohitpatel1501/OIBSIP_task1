console.log("hello its working fine");

const exp = document.querySelector(".exp");
const ans = document.querySelector(".ans");
const val = document.querySelectorAll(".val");

console.log(val);

for (let i = 0; i < val.length; i++) {
  val[i].addEventListener("click", () => {
    exp.value += val[i].value;
  });
}

const cls_btn = document.querySelector("#cls_btn");
cls_btn.addEventListener("click", () => {
  exp.value = "";
  ans.value = "";
});

const del_btn = document.querySelector("#del_btn");
del_btn.addEventListener("click", () => {
  exp.value = exp.value.slice(0, -1);
});

const ans_btn = document.querySelector("#ans_btn");
ans_btn.addEventListener("click", () => {
  let res = eval(exp.value);
  ans.value = res;
});

const sqrt=(x)=>{
    return Math.sqrt(x);
}

const ent = document.querySelector("#ent");
ent.addEventListener("click", () => {
    try{
        let res = eval(exp.value);
        ans.value = res;
    }catch(err){
        ans.value = "Invalid!!";
        console.log(err);
    }
  
});