export const myname: string = 'asdf';

interface IAccount {
    name: string,
    balance: number,
    status: string,
    deposit?: () => void
}

const account: IAccount = {
    name: 'Rex',
    balance: 4.50,
    status: 'Open',
    deposit: () => null
};

let accounts: IAccount[] = [];
accounts.push(account)