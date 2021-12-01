

const btn = document.querySelectorAll('span');


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
    if(this.innerHTML === '+'){
      this.innerHTML = '-'
      this.style.background='#cd0000';
    }
    else{
      this.innerHTML="+";
      this.style.background='#6a6a6a';
    }
    
    });
}
