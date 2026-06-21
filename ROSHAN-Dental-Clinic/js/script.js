function sendWhatsApp() {

    // Get form values
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let treatment = document.getElementById("treatment").value;
    let problem = document.getElementById("problem").value.trim();

    // Check if any field is empty
    if (!name || !phone || !date || !time || !treatment || !problem) {
        alert("Please fill all the fields!");
        return;
    }

    // Check for past dates
    let selectedDate = new Date(date);
    let today = new Date();
    today.setHours(0,0,0,0);

    if (selectedDate < today) {
        alert("Please select a valid future date!");
        return;
    }

    // Create WhatsApp message
    let message = `Hello, I would like to book a dental appointment:

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Treatment: ${treatment}
Problem: ${problem}`;

    // Encode message
    let encodedMessage = encodeURIComponent(message);

    // WhatsApp number
    let whatsappNumber = "+91xxxxxxxxxx";

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
}
function openService(service){

let title="";
let items=[];

if(service==="diagnostic"){
title="Diagnostic Procedures";
items=[
"Dental Consultation / Oral Examination",
"Dental X-ray (IOPA)",
"OPG (Orthopantomogram)",
"CBCT Scan",
"Bitewing X-ray",
"Study models / impressions",
"Oral cancer screening",
"Vitality test for tooth"
];
}

if(service==="preventive"){
title="Preventive Dentistry";
items=[
"Oral prophylaxis (scaling & polishing)",
"Fluoride application",
"Pit & fissure sealants",
"Dental check-up",
"Oral hygiene instruction",
"Desensitization treatment"
];
}

if(service==="restorative"){
title="Restorative Procedures";
items=[
"Dental fillings",
"Temporary fillings",
"Inlays & Onlays",
"Core build-up",
"Tooth bonding"
];
}

if(service==="endodontic"){
title="Endodontic Procedures";
items=[
"Root Canal Treatment (RCT)",
"Single-sitting RCT",
"Re-Root Canal Treatment",
"Pulpectomy",
"Pulpotomy",
"Apicoectomy"
];
}

if(service==="implant"){
title="Implant Dentistry";
items=[
"Dental implants",
"Immediate implants",
"Implant-supported crown",
"Implant-supported bridge",
"Full mouth implant rehabilitation"
];
}

if(service==="ortho"){
title="Orthodontic Treatments";
items=[
"Metal braces",
"Ceramic braces",
"Self-ligating braces",
"Clear aligners",
"Retainers"
];
}

if(service==="cosmetic"){
title="Cosmetic Dentistry";
items=[
"Teeth whitening",
"Veneers",
"Smile designing",
"Composite bonding"
];
}

if(service==="pediatric"){
title="Pediatric Dentistry";
items=[
"Pediatric fillings",
"Pulpotomy / Pulpectomy",
"Space maintainers",
"Fluoride treatment",
"Habit breaking appliances"
];
}

document.getElementById("popupTitle").innerText=title;

let list=document.getElementById("popupList");
list.innerHTML="";

items.forEach(function(item){
let li=document.createElement("li");
li.textContent=item;
list.appendChild(li);
});

document.getElementById("servicePopup").style.display="flex";
}

function closeService(){
document.getElementById("servicePopup").style.display="none";
}
/*-------------------------FAQs-----------------------*/
const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(q){

q.addEventListener("click", function(){

this.classList.toggle("active");

const answer = this.nextElementSibling;

if(answer.style.maxHeight){
answer.style.maxHeight = null;
}
else{
answer.style.maxHeight = answer.scrollHeight + "px";
}

});

});
/*-----------------services-----------------*/
function toggleOverlay(card){

let overlay = card.querySelector(".service-overlay");

overlay.classList.toggle("active");

}
/*-----------------------appointment-----------------*/
function sendToWhatsApp(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
let problem = document.getElementById("problem").value;

// Validation (optional but recommended)
if(!name || !phone || !date || !time || !problem){
    alert("Please fill all fields!");
    return;
}

let message =
"Appointment Request - Roshan Dental Clinic%0A%0A" +
"Name: " + name + "%0A" +
"Phone: " + phone + "%0A" +
"Preferred Date: " + date + "%0A" +
"Preferred Time: " + time + "%0A" +
"Concern: " + problem + "%0A%0A" +
"This is a request for appointment. Kindly confirm availability.";

let whatsappURL = "https://wa.me/91xxxxxxxxxx?text=" + message;

// Open WhatsApp
window.open(whatsappURL, "_blank");

// ✅ Reset form
document.getElementById("name").value = "";
document.getElementById("phone").value = "";
document.getElementById("date").value = "";
document.getElementById("time").value = "";
document.getElementById("problem").value = "";

// ✅ Show popup
showPopup();
}
function showPopup(){
    document.getElementById("successPopup").style.display = "flex";
}

function closePopup(){
    document.getElementById("successPopup").style.display = "none";
}