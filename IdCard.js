function idCard(){
    var firstName = document.getElementById("userFirstName").value;
    var lastName = document.getElementById("userLastName").value;
    var address = document.getElementById("userAddress").value;
    var age = parseInt(document.getElementById('userAge').value);
    var phoneNumber = parseInt(document.getElementById('userPhoneNum').value);
    
    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = "Addres: " + address;
    
    var numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);
    
    for(var i= 0; i < numberArray.length; i++){
      if(numberArray[i] <= 100){
        document.getElementById("postAge").innerHTML = "Age: " + age;
      }
      else if(numberArray[i] > 100){
        document.getElementById("postPhoneNum").innerHTML = "Phone: " + phoneNumber;
      }
      else{
        alert("Invalid age or phone number!");
      }
      
      
    }
  }