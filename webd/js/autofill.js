/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction() {
  if (document.getElementById("same").checked){
    document.getElementById("billingName").value = document.getElementById("shippingName").value;
    document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    document.getElementById('billingName').setAttribute('required',true);
    document.getElementById('billingZip').setAttribute('required',true);
  }
  else {
    document.getElementById("billingName").required = false;
    document.getElementById("billingZip").required = false;
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
  }
}