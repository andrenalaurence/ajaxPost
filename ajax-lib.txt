<script>
function send(input){
  var sendData = {
      key: "password123",
      data: input
  };
  alert(JSON.stringify(sendData));

  $.ajax({
     type: 'POST',
     crossDomain : true,
     url: "http://70.36.109.14:3002/sendStatitics",
     contentType: 'application/json',
     data: JSON.stringify(sendData),
     success: function (data) {
       alert(JSON.stringify(data, null, " "));
     },
     error: function (e) {
       alert(e.responseText);
     }
 });
}
</script>
