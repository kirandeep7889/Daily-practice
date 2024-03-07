class BankAccount {
    constructor(accountNo, accountHolder, balance) {
        this._accountNo = accountNo;
        this._accountHolder = accountHolder;
        this._balance = balance;
    }

    deposit(amount) {
        this._balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this._balance}.`);
    }

    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrawn ${amount}. New balance is ${this._balance}.`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    displayBalance() {
        console.log(`Account No.: ${this._accountNo}, Account Holder: ${this._accountHolder}, Balance: ${this._balance}`);
    }
}

class SavingAccount extends BankAccount {
    constructor(accountNo, accountHolder, balance) {
        super(accountNo, accountHolder, balance);
        this._interestRate = 0.05;
        this._withdrawalLimit = 1000; 
        this._penaltyFee = 10; 
    }

    addInterest() {
        const interest = this._balance * this._interestRate;
        this.deposit(interest);
        console.log(`Interest of ${interest} added.`);
    }

    withdraw(amount) {
        if (amount <= this._withdrawalLimit) {
            super.withdraw(amount);
        } else {
            console.log(`Withdrawal limit exceeded. Penalty fee of ${this._penaltyFee} will be charged.`);
            const totalAmount = amount + this._penaltyFee;
            if (totalAmount <= this._balance) {
                this._balance -= totalAmount;
                console.log(`Withdrawn ${amount} with penalty fee. New balance is ${this._balance}.`);
            } else {
                console.log("Insufficient funds including penalty fee.");
            }
        }
    }
}

const account1 = new SavingAccount("191304024", "kirandeep Singh", 1000);
account1.deposit(500);
account1.withdraw(800);
account1.addInterest();
account1.displayBalance();
