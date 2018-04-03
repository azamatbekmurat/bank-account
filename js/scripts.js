
function bankAccount(accountName, initialDeposit){
  this.accountName=accountName;
  this.initialDeposit=initialDeposit;
}



$(document).ready(function() {
  $("form#newAccount").submit(function(event) {

    var accountName=$("#nameBox").val();
    var initialDeposit = parseFloat($("#initialDepositBox").val());

    var newBankAccount=new bankAccount(accountName, initialDeposit);

    console.log(newBankAccount);
    event.preventDefault();

  });
});
