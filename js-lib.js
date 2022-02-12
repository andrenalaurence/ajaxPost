var send = function(input){
  var sendData = {
      key: "password123",
      data: input
  };
  alert(JSON.stringify(sendData));
  var url = "http://70.36.109.14:3002/sendStatitics";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.responseText);
     }};
  
  xhr.send(sendData);

};
