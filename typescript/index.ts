//Encapsulation
//Bank Account clas
// Depositing
//withdrawing
// Balance - hidden - encapsulated

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }
  // getter of the Balance of the Bank Account
  public get balance(): number {
    return this._balance;
  }
  // method Deposit Money
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid Amount");
      return;
    }
    this._balance += amount;
    console.log(
      amount,
      "Added to your Account. Your new Balance is ",
      this._balance
    );
  }
  public withDraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid Amount");
      return;
    }
    if (this._balance - amount <= 0) {
      console.log("Insufficent Funds");
      return;
    }
    this._balance -= amount;
    console.log(
      amount,
      "Subtracted from your Account. Your new Balance is ",
      this._balance
    );
  }
}

const myAccount = new BankAccount(4000);

myAccount.deposit(2004);
myAccount.withDraw(3310);
console.log("Current Balance is", myAccount.balance);
