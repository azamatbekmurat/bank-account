var accounts=[];


function bankAccount(accountName, initialDeposit){
  this.accountName=accountName;
  this.balance=initialDeposit;
}

function searchForAccount(searchName) {
  var currentBalance = "";
  accounts.forEach(function(account){
    if (account.accountName === searchName) {
      currentBalance=account.balance;
      console.log(account.balance);
      console.log("ACCOUNT FOUND");
    }
  });
  return currentBalance;
}

function deposit(inputValue, currentBalance) {
  currentBalance+=inputValue;
}

function depositByName(searchName, depositAmount) {
  var currentBalance = "";
  accounts.forEach(function(account){
    if (account.accountName === searchName) {
      account.balance = account.balance+depositAmount;
      console.log(account.balance);
      console.log("ACCOUNT FOUND by deposit");
    }
  });
  //return currentBalance;
}

function withdrawByName(searchName, withdrawalAmount) {
  var currentBalance = "";
  accounts.forEach(function(account){
    if (account.accountName === searchName) {
      account.balance = account.balance-withdrawalAmount;
      console.log(account.balance);
      console.log("ACCOUNT FOUND by deposit");
    }
  });
  //return currentBalance;
}

bankAccount.prototype.deposit = function() {
  this.balance += inputDeposit;
  // if (this.accountName===inputName) {
  //   this.balance += depositAmount;
  // } else{
  //   alert("Customer account not found. Please register");
  // }
}

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

    var foundAccount= searchForAccount(currentAccountName);
    $("#currentBalance").append(foundAccount);

    $("#signIn").toggle();
    $("#newAccount").toggle();
    $("#deposit").toggle();
    $("#withdrawal").toggle();
    $("#currentBalance").toggle();

    //console.log(curBalance);
    //$("#currentBalance").getBalance(currentAccountName);
    //$("#currentBalance").append(accounts.find(""));
    $("form#deposit").submit(function(event) {
      event.preventDefault();
      var depositAmount=parseFloat($("#depositBox").val());
      console.log("LOGIN NAME: "+currentAccountName);

      depositByName(currentAccountName, depositAmount);
      var foundAccount= searchForAccount(currentAccountName);
      $("#currentBalance").text(foundAccount);

    });

    $("form#withdrawal").submit(function(event) {
      event.preventDefault();
      var withdrawalAmount=parseFloat($("#withdrawalBox").val());
      console.log("LOGIN NAME: "+currentAccountName);

      withdrawByName(currentAccountName, withdrawalAmount);
      var foundAccount= searchForAccount(currentAccountName);
      $("#currentBalance").text(foundAccount);

    });
  });
});
