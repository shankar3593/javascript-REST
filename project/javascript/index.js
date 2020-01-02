
function getConfirmation() {
   // alert('Hi')
   setEmployee()

   var retVal = confirm("Do you want to submit ?");
   if (retVal == true) {
      document.write("User successfully added");
      return true;
   } else {
      document.write("User not added");
      return false;

   }
}
function setEmployee() {
   let name = document.getElementById('name').value
   let id = document.getElementById('id').value
   let salary = document.getElementById('salary').value

   var person = { 'id': id, 'name': name, 'salary': salary };
   // console.log(person)
   // alert(person);
   localStorage.setItem('person', JSON.stringify(person));
};





function getDetail() {
   console.log(localStorage)

   var obj = JSON.parse(localStorage.person);
   console.log(document.getElementById("id1"))
   document.getElementById("id1").innerHTML = obj.id;
   document.getElementById("id2").innerHTML = obj.name;
   document.getElementById("id3").innerHTML = obj.salary;
   // console.log(document.getElementById("id1"))


   function loading() {
      alert("coming");
      var allcookies = localStorage.getItem('GetData');
      alert(allcookies);

   }


}

function onPageLoad(){

   var localValue = JSON.parse(localStorage.person);
   document.getElementById("id1").value = localValue.id;
   document.getElementById("id2").value = localValue.name;
   document.getElementById("id3").value = localValue.salary;
   console.log("VALUE",localValue);

}

function saveDetailConfirmation() {
   
   

   var ret = confirm("Do you want to update the detail ?");
   if (ret == true) {
      saveDetail()
      document.write("User successfully saved");
      return true;
   } else {
      onPageLoad()
      document.write("User not saved");
      return false;

   }
}

function saveDetail() {

   var obj = JSON.parse(localStorage.person);
   obj.name = document.getElementById('id2').value;
   obj.salary = document.getElementById('id3').value;
   obj.id = document.getElementById('id1').value;
   localStorage.setItem("person", JSON.stringify(obj))

}





function deleteDetail() {
   localStorage.clear();
   window.location.reload();
}

// function previousDetail(){

// }

