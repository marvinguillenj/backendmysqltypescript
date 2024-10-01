"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const users = [
    { id: 1, name: 'Marvin Guillen' },
    { id: 2, name: 'Hector Sabillon' },
    { id: 3, name: 'Diany Barahona' },
];
const getUser = (id) => {
    console.log('Function of get user with value ' + id.toString());
    return users.find((user) => user.id === id);
};
exports.getUser = getUser;
