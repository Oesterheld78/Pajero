var secreto="U2FsdGVkX1+n17bqE1MxKKOH5cok3j64MQY0TTBGp5HXolT8IRdcW+QAGsFMLt/yrxN1DTuWzV2ihm3fzUy4JPahsNuymmtFmSJA+QgF6lTpyw7ouIZwVZMRSVvLOaTV";
$(function(){
  $("#dejameEntrar").on("click", function(){
    var pass = $("#clave").val();
    var desencryptado = CryptoJS.AES.decrypt(secreto, pass).toString(CryptoJS.enc.Utf8);
    $("#asgard").html(desencryptado);
  });
});