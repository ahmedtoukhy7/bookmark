

var nameInput=document.getElementById("name")
var urlInput=document.getElementById("url")
var submit=document.getElementById("submit")
var deletee=document.getElementById("btndelete")
var validation=document.querySelector(".validation")
var validation2=document.querySelector(".validation2")
var notrepeat=document.querySelector(".notrepeat")
// var arr=JSON.parse(localStorage.arr)
var modal=document.getElementById("exampleModal")



console.log(deletee)



// add bookmark
var arr=[]

if(localStorage.getItem("arr") !=null){
    arr=JSON.parse(localStorage.getItem("arr"))
    displayBookmark()
}
function addBookmark (){

    
        var bookmark={
            name:nameInput.value,
            url:urlInput.value
        }

        if(validName()==true && validURL()==true && notreapet()!=true){
        
            
                
                
                    arr.push(bookmark)
                    console.log(arr)
                    
                
                    localStorage.setItem("arr",JSON.stringify(arr))
                    displayBookmark()
        
            
           
           
        

        }
}

submit.addEventListener("click",addBookmark)


// display

function displayBookmark(){
    var temp=""
    for(var i=0;i<arr.length;i++){

        temp+=`
        <tr>
                        <td>${i}</td>
                        <td>${arr[i].name}</td>
                        <td ><a class="bg-warning btn " href="${arr[i].url}">
                            <i class="fa-solid fa-eye"></i>
                            Visit</a></td>
                        <td><button onclick="deleteBookmark(${i})" class="btn">
                            <i class="fa-solid fa-trash"></i>
                            Delete</button></td>
                    </tr>`

    }
    

    document.getElementById("tbody").innerHTML=temp
   
}


//delete bookmark


function deleteBookmark(index){
arr.splice(index,1)
localStorage.setItem("arr",JSON.stringify(arr))
displayBookmark()
}


nameInput.addEventListener("keyup",validName)
urlInput.addEventListener("keyup",validURL)
// notrepeat.addEventListener("keyup",notreapet)


console.log(nameInput)

function validName(){
    var regex=/^[A-Z][a-z]{3,15}$/
    if(regex.test(nameInput.value)==true){
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        validation.classList.add("d-none")
        validation.classList.remove("d-block")
        modal.classList.add("d-none")
        modal.classList.remove("show")
        return true
        
        
    }
    else{
        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")
        validation.classList.add("d-block")
        validation.classList.remove("d-none")
        modal.classList.add("show")
        modal.classList.remove("d-none")
        
        
        return false
    }
}
function validURL(){
    var regex=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
    if(regex.test(urlInput.value)==true){
        urlInput.classList.add("is-valid")
        urlInput.classList.remove("is-invalid")
        validation2.classList.add("d-none")
        validation2.classList.remove("d-block")
        modal.classList.add("d-none")
        modal.classList.remove("show")
        return true
        
        
    }
    else{
        urlInput.classList.add("is-invalid")
        urlInput.classList.remove("is-valid")
        validation2.classList.add("d-block")
        validation2.classList.remove("d-none")
        modal.classList.add("show")
        modal.classList.remove("d-none")
       
        
        return false
    }
}



function notreapet(){
    for(var i=0;i<arr.length;i++){
        console.log(arr)
        if(arr[i].name===nameInput.value){
            console.log(arr[i])
            console.log("yes")
            notrepeat.classList.add("d-block")
            notrepeat.classList.remove("d-none")
            modal.classList.add("show")
            modal.classList.remove("d-none")
           
            return true
        }
        
    }

    
        notrepeat.classList.add("d-none")
        notrepeat.classList.remove("d-block")
       
        modal.classList.add("d-none")
        modal.classList.remove("show")

}



console.log(arr)

console.log(arr)
