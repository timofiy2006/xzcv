function addContact() {
  var contactName = document.getElementById("contactName").value;
  var phoneNumber = document.getElementById("phoneNumber").value;

  var contactId = Date.now().toString();

  var contact = {
    id: contactId,
    name: contactName,
    phone: phoneNumber,
  };

  var contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  contacts.push(contact);

  localStorage.setItem("contacts", JSON.stringify(contacts));

  displayContacts();
}

function displayContacts() {
  var contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  var contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  contacts.forEach(function (contact) {
    var listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML =
      "<strong>" + contact.name + "</strong> - " + contact.phone;
    contactList.appendChild(listItem);
  });
}

displayContacts();
