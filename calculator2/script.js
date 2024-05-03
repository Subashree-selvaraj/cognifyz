const outputScreen = document.getElementById("output-screen");

function display(num){
      outputScreen.value+=num;
}

function Calculate(){
  try{
    outputScreen.value=eval(outputScreen.value);
  }
  catch(err){
    alert("Invalid")
  }
}

function Clear(){
  outputScreen.value="";
}

function del(){
  outputScreen.value=outputScreen.value.slice(0,-1)
}





// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((res)=>res.json())
// .then((msg)=>console.log(msg[0].setup,msg[0].punchline))
// .catch((err)=>console.log(err))


fetch('https://jsonplaceholder.typicode.com/todos',{
method:'POST',
headers:{'content-type':'application/json'},
body:JSON.stringify({
  userId:22,
  id:456,
  title:'test',
  completed:false
})
})

.then(response => response.json())
.then(json => console.log(json))