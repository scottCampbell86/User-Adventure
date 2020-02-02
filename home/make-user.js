function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        madness: 100,
        bank: '$10',
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    madness: 100,
    bank: '$10',
    completed: {}
});

export default makeUser;