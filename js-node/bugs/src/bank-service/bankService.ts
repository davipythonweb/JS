interface Account {
    accountId: string;
    balance: number;
}

class BankService {
    private accounts: Account[];

    constructor() {
        this.accounts = [];
    }

    createAccount(initialBalance: number): string {
        const accountId = this.generateAccountId();
        const newAccount: Account = {
            accountId,
            balance: initialBalance,
        };
        this.accounts.push(newAccount);
        return accountId;
    }

    private generateAccountId(): string {
        // Implement your account ID generation logic here
        // For example, you can use a combination of timestamp and random characters
        return 'ACCT' + Date.now().toString();
    }
}

export default BankService;