//VALIDATION CODE
var aadharNumber, firstName, middleName, lastName, phno, price;
var customerForm = document.getElementById('customer-info-form');

aadharNumber = document.getElementById("aadhar");
    firstName = document.getElementById("first-name")
    middleName = document.getElementById("middle-name")
    lastName = document.getElementById("last-name")

customerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var count=0;
    const namePattern = /^[A-Za-z]+$/;
    var onlyNum = /^\d+$/;
    if (aadharNumber.value.trim() === '') {
        aadharNumber.classList.add('mandatory');
        document.getElementById("aadhar-error").textContent="!Aadhar number cannot be empty";//innerHTML+='<p>Aadhar number cannot be empty</p>'
    }  
    else if(!onlyNum.test(aadharNumber.value.trim())) {
        aadharNumber.classList.add('mandatory');
        document.getElementById("aadhar-error").textContent="!Aadhar number should contain only digits";
    }
    else if(aadharNumber.value.trim().length != 12) {
        aadharNumber.classList.add('mandatory');
        document.getElementById("aadhar-error").textContent="!Aadhar number should be of 12 digits";
    }
    else {
        aadharNumber.classList.remove('mandatory');
        document.getElementById("aadhar-error").textContent="";
        count++;
    }

    if (firstName.value.trim() === '') {
        firstName.classList.add('mandatory');
        document.getElementById("first-name-error").textContent="!First name cannot be empty";
    }
    else if(!namePattern.test(firstName.value.trim())) {
      firstName.classList.add('mandatory');
        document.getElementById("first-name-error").textContent="!First name should only contains alphabets";
    }
    else {
        firstName.classList.remove('mandatory');
        document.getElementById("first-name-error").textContent="";
        count++;
    }
    
    if(middleName.value.trim()!="" && !namePattern.test(middleName.value.trim())) {
      firstName.classList.add('mandatory');
        document.getElementById("middle-name-error").textContent="!Middle name should only contains alphabets";
        count--;
    }
    else {
      middleName.classList.remove('mandatory');
        document.getElementById("middle-name-error").textContent="";
    }

    if (lastName.value.trim() === '') {
        lastName.classList.add('mandatory');
        document.getElementById("last-name-error").textContent="!Last name cannot be empty";

    }
    else if(!namePattern.test(lastName.value.trim())) {
        lastName.classList.add('mandatory');
        document.getElementById("last-name-error").textContent="!Last name should only contains alphabets";
    }
    else {
        lastName.classList.remove('mandatory');
        document.getElementById("last-name-error").textContent="";
        count++;
    }

    if(count == 3) {
        document.querySelector(".customer-info > .accordion >.item-header").classList.add("active");
        document.querySelector(".customer-info >.content").style.display = "none";

        document.querySelector(".mobile-info > .accordion >.item-header").classList.remove("active");
        document.querySelector(".mobile-info >.content").style.display = "block";
    }

    stateSummary();
});


//=======================================
var accordionItems = document.querySelectorAll(".accordion");
for(let i=0 ; i<accordionItems.length ; i++) {
    const accordionItem = accordionItems[i];
    accordionItem.addEventListener("click", function() {
        var accordionItemHeader = this.querySelector(".item-header");
        accordionItemHeader.classList.toggle("active");
        
        var contentSibling = accordionItems[i].nextElementSibling;
        console.log(contentSibling);
        console.log(contentSibling.style.display);
        if(contentSibling.style.display == "block") {
            contentSibling.style.display = "none";
        }
        else if(contentSibling.style.display == "none"){
            contentSibling.style.display = "block";
        }

    })
}

//==================================================

const vipNumbers = [
    { number: "9999999999", price: "10000" },
    { number: "8888888888", price: "8000" },
    { number: "7777777777", price: "7000" },
    { number: "6666666666", price: "6000" },
    { number: "5555555555", price: "5000" }
  ];
  
  const regularNumbers = [
    { number: "1234567890", price: "120" },
    { number: "2345678901", price: "250" },
    { number: "3456789012", price: "320" },
    { number: "4567890123", price: "170" },
    { number: "3421591234", price: "150" }
  ];
  
  const radioVip = document.getElementById("vip");
  const radioRegular = document.getElementById("regular");
  const list = document.getElementById("number");
  let priceOfNum = document.getElementById("amount");
  let priceVal = "";
  radioVip.addEventListener("change", function () {
    list.parentElement.style.display = "block";
    list.innerHTML = "";
    for (let i = 0; i < vipNumbers.length; i++) {
      let option = document.createElement("option");
      option.value = vipNumbers[i].number;
      option.text = vipNumbers[i].number;
      list.appendChild(option);
    }
    priceOfNum.parentElement.style.display = "none";
  });
  
  radioRegular.addEventListener("change", function () {
    list.parentElement.style.display = "block";
    list.innerHTML = "";
    for (let i = 0; i < regularNumbers.length; i++) {
      let option = document.createElement("option");
      option.value = regularNumbers[i].number;
      option.text = regularNumbers[i].number;
      list.appendChild(option);
    }
    priceOfNum.parentElement.style.display = "none";
  });
  
  list.addEventListener("change", function () {
    priceOfNum.parentElement.style.display = "block";
    let number = list.value;
    let type = document.querySelector('input[name="type"]:checked').value;
  
    let data = type === "vip" ? vipNumbers : regularNumbers;
    let found = data.find(item => item.number === number);
    let amount = found.price;
     priceVal=amount;
    priceOfNum.textContent = amount;
    document.querySelector(".price").style.display="block";
  });

  //==============================
  var mobileForm = document.getElementById('mobile-info-form');

  var firstNameVal = firstName.value.trim();
mobileForm.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log("hello "+priceOfNum.textContent.value)
    // if(priceOfNum.textContent=="") {
      
    //     }
    // else {

    if(priceVal=="") {

    }
    else {
    document.querySelector(".mobile-info > .accordion >.item-header").classList.add("active");
    document.querySelector(".mobile-info >.content").style.display = "none";

    document.querySelector(".summary > .accordion >.item-header").classList.remove("active");
    document.querySelector(".summary >.content").style.display = "block";
    
    stateSummary();
    }
})

//=============================

function stateSummary() {
    document.querySelector(".summary > .content > #statement > p").innerHTML = 
    `${document.getElementById("first-name").value.trim()} ${document.getElementById("middle-name").value.trim()} 
    ${document.getElementById("last-name").value.trim()} has to pay amount Rs.
    ${document.getElementById("amount").textContent.trim()}`;
}

//=================================
const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clearButton');

let painting = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

clearButton.addEventListener('click', function(e){
    e.preventDefault();
    clearCanvas();
});

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';

  ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function submitSignature() {
  const signatureImageURL = canvas.toDataURL(); 
  console.log(signatureImageURL); 
  clearCanvas(); 
}

//==============================

const submitButton = document.getElementById('summary-submit-button');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById("customer-info-form").reset();
    document.getElementById("mobile-info-form").reset();
    document.querySelector(".price").style.display="none";
    document.querySelector(".list").style.display = "none";
    document.getElementById("amount").textContent="";
    stateSummary();
    clearCanvas();
 
    document.querySelector(".customer-info > .accordion >.item-header").classList.remove("active");
    document.querySelector(".customer-info >.content").style.display = "block";

    document.querySelector(".mobile-info > .accordion >.item-header").classList.add("active");
    document.querySelector(".mobile-info > .content").style.display = "none";

    document.querySelector(".summary > .accordion >.item-header").classList.add("active");
    document.querySelector(".summary > .content").style.display = "none";

})