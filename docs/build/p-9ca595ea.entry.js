import{r as t,h as e}from"./p-2d0fd055.js";let r=[],n=class{constructor(e){t(this,e),this.show="0",this.saveOperator="",this.saveNumber=0,this.saveDisplay=0,this.acc="",this.calculate=(t,e)=>{switch(this.saveOperator){case"+":return this.show=t+e;case"-":return this.show=t-e;case"*":return this.show=t*e;case"/":return this.show=t/e;case"":return this.show="0";default:return}}}handleClick(t){this.acc+=t.target.value,"number"===t.target.name&&("0"===this.show?this.show="":"*"!==this.show&&"-"!==this.show&&"/"!==this.show&&"+"!==this.show||(this.show=""),this.show+=t.target.value.toString()),"operator"===t.target.name&&(this.save=this.show,this.show=t.target.value,this.saveOperator=t.target.value),"result"===t.target.name&&("+"!==this.show&&"-"!==this.show&&"*"!==this.show&&"/"!==this.show||(this.show=this.saveNumber),this.saveDisplay=parseFloat(this.show),this.show="",this.saveNumber=parseFloat(this.save),this.calculate(this.saveNumber,this.saveDisplay),this.save=0,r.push(this.show)),"reset"===t.target.name&&(this.show="0",this.saveNumber=0,this.saveDisplay=0,r=[]),"AC"===t.target.value&&(r=[])}render(){return e("div",{class:"calculator"},e("div",{class:"calculator__container"},e("div",{class:"calculator__register"},"Register: ",r.map((t=>e("span",{class:"register__data"},t)))),e("div",{class:"calculator__screen"},this.show),e("calculator-button",null)))}};n.style=".calculator{height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column}.calculator__container{text-align:end;background-color:black;color:white;border-radius:20px;padding:30px;max-width:350px}.calculator__screen{width:100%;padding:2rem 0;background-color:rgb(255, 255, 255);font-size:2rem;font-weight:bold;color:black}.calculator__register{display:flex;padding:1.5rem;font-weight:bold;font-size:1.2rem;overflow:auto;align-items:center}.register__data{padding:5px}";let s=class{constructor(e){t(this,e)}render(){return e("div",{class:"number-button"},e("button",{name:"number",class:"number-button__key number",value:"7"},"7"),e("button",{name:"number",class:"number-button__key number",value:"8"},"8"),e("button",{name:"number",class:"number-button__key number",value:"9"},"9"),e("div",{class:"number-button__box"},e("button",{name:"resetAC",class:"number-button__key reset",value:"AC"},"AC"),e("button",{name:"reset",class:"number-button__key reset",value:"C"},"C")),e("button",{name:"number",class:"number-button__key number",value:"4"},"4"),e("button",{name:"number",class:"number-button__key number",value:"5"},"5"),e("button",{name:"number",class:"number-button__key number",value:"6"},"6"),e("button",{name:"operator",class:"number-button__key operator",value:"+"},"+"),e("button",{name:"number",class:"number-button__key number",value:"1"},"1"),e("button",{name:"number",class:"number-button__key number",value:"2"},"2"),e("button",{name:"number",class:"number-button__key number",value:"3"},"3"),e("button",{name:"operator",class:"number-button__key operator less",value:"-"},"-"),e("button",{name:"number",class:"number-button__key number",value:"0"},"0"),e("button",{name:"result",class:"number-button__key operator",value:"="},"="),e("button",{name:"operator",class:"number-button__key operator",value:"*"},"x"),e("button",{name:"operator",class:"number-button__key operator",value:"/"},"/"))}};s.style=".number-button{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr}.number-button__key{padding:30px;border:black solid 1px;display:flex;align-items:center;justify-content:center;font-size:1.5rem}.operator{background-color:rgb(245, 162, 47)}.number-button__box{width:100%}.number{background-color:rgb(70, 70, 70);color:white}.reset{font-size:1rem;padding:15px;width:100%;background-color:aqua;font-weight:bold}.less{font-weight:bold}";export{n as calculator_box,s as calculator_button}