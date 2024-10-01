"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const userexamplearray = [
    { id: 1, name_user: 'Marvin Guillen' },
    { id: 2, name_user: 'Hector Sabillon' },
    { id: 3, name_user: 'Diany Barahona' },
];
const getUser = (id) => {
    return userexamplearray.find((user) => user.id === id);
};
exports.getUser = getUser;
