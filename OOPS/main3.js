// 2. Abstraction
// Abstraction involves simplifying complex systems by modelling classes based on the essential properties and behaviours an object should have. It hides the unnecessary details from the user.

class BankAccount {
  // class constructor
  constructor(balance) {
    // Protect the constructor for being instantiated use IF
    if (this.constructor === BankAccount) {
      // throw an error if the constructor is called direcly from the object
      throw new TypeError("Cannot construct Abstract instance directly");
    }

    // Initialising the balance property

    this.balance = balance;
  }

  //Abstract methods
  //Deposit

  deposit(amount) {
    // throw an error if the abstrat method is called direcly from the object
    throw new TypeError("Cannot construct Abstract instance directly");
  }

  //withdraw
  withdraw(amount) {}
}

// Subclass (child)

class SavingsAccount extends BankAccount {
  // class constructor
  constructor(balance, interestRate) {
    // superclass the value sent to the super aka parent class
    super(balance);
    // initialising the interestrate property
    this.interestRate = interestRate;
  }

  // Implementing the deposit method for SavingsAccount
  deposit(amount) {
    // Calculate interest and update the balance
    this.balance += amount + (amount * this.interestRate) / 100;
  }

  // Implementing the withdraw method for SavingsAccount
  withdraw(amount) {
    // Check if there are sufficient funds for withdrawal
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }
}

// Subclass (child)

class BasicAccount extends BankAccount {
  // class constructor
  constructor(balance, overdraftLimit) {
    super(balance);

    // initialising the overdraftLimit property
    this.overdraftLimit = overdraftLimit;
  }

  // Implementing the deposit method for SavingsAccount
  deposit(amount) {
    // update balance with the amount
    this.balance += amount;
  }

  // withdraw
  withdraw(amount) {
    // Check if there are sufficient funds for withdrawal including overdraft
    if (amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }
}



//Create a savingaccount instance (object)

const savingsAccount = new SavingsAccount(1000, 3);
console.log("Savings Account balance: ", savingsAccount.balance);

// deposit funds into the savings account

savingsAccount.deposit(500);
console.log("Savings Account balance after deposit: ", savingsAccount.balance);

savingsAccount.withdraw(200)
console.log("Savings Account balance after withdraw: ", savingsAccount.balance);

//open new basic account
const basicAccount = new BasicAccount(1000, 100);
console.log("Basic Account balance: ", basicAccount.balance);

basicAccount.deposit(500);
console.log("Basic Account balance after deposit: ", basicAccount.balance);

basicAccount.withdraw(50);
console.log("Basic Account balance after withdraw: ", basicAccount.balance);


// try to make an OBJECT check if it is protected?

// const bankAccount = new BankAccount(1000);

