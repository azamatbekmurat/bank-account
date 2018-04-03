var accounts=[];


function bankAccount(accountName, initialDeposit){
  this.accountName=accountName;
  this.balance=initialDeposit;
}

bankAccount.prototype.getBalance = function(inputName) {
  if (this.accountName===inputName){
    return this.balance;
  }
}

// function searchForAccount(searchName) {
//   accounts.forEach(function(account){
//     if (account.accountName === searchName)
//     {
//       return account;
//     }
//   });
// }

// bankAccount.prototype.deposit = function() {
//   if (this.accountName===inputName) {
//     this.balance += depositAmount;
//   } else{
//     alert("Customer account not found. Please register");
//   }
// }
//
// bankAccount.prototype.withdrawal = function() {
//   return this.balance
//   if (this.accountName===inputName) {
//     this.balance -= withdrawalAmount;
//   } else{
//     alert("Customer account not found. Please register");
//   }
// }



$(document).ready(function() {
  $("form#newAccount").submit(function(event) {
    var accountName=$("#nameBox").val();
    var initialDeposit = parseFloat($("#initialDepositBox").val());
    var newBankAccount=new bankAccount(accountName, initialDeposit);

    event.preventDefault();
    accounts.push(newBankAccount);

    console.log(accounts);

  });

  $("form#signIn").submit(function(event) {
    event.preventDefault();
    var currentAccountName=$("#signInNameBox").val();
    console.log("LOGIN NAME: "+currentAccountName);
    var foundAccount = searchForAccount(currentAccountName);

  //  var curBalance = newBankAccount.getBalance(currentAccountName);
  accounts.forEach(function(account){
    if (account.accountName === currentAccountName)
    {
      console.log(account.balance);
      console.log("ACCOUNT FOUND");
    }
    // else{
    //   console.log("name not found");
    // }
  });

    $("#signIn").toggle();
    $("#newAccount").toggle();
    $("#deposit").toggle();
    $("#withdrawal").toggle();
    $("#currentBalance").toggle();


    //console.log(curBalance);

    //$("#currentBalance").getBalance(currentAccountName);
    //$("#currentBalance").append(accounts.find(""));

  });




});
