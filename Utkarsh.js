function Mode(){
    document.body.classList.toggle("active")
}
function Submit() {
  let Name = document.getElementById("Name").value;
  let Email = document.getElementById("E-mail").value;
  let Phone = document.getElementById("Phone").value;
  let msg = document.getElementById("msg");

  if (Name && Email && Phone) {
    msg.innerText = `${Name}, our team will contact you soon.`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    msg.innerText = "Please fill all the fields.";
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }

  msg.style.padding = "10px";
  msg.style.borderRadius = "5px";
}
 
    AOS.init();
 function remove(){
    document.body.classList.toggle("sidebar-active")
 }
  

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_9r3s478", "template_aiwbzjb", this)
    .then(function () {
      document.getElementById("msg").innerHTML = "Message sent successfully!";
      setTimeout(() => {
        document.getElementById("msg").innerHTML = "";
      }, 5000);
      document.getElementById("contact-form").reset();
    }, function (error) {
      console.log("FAILED...", error);
      document.getElementById("msg").innerHTML = "Failed to send message.";
    });
});

