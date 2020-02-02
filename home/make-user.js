function makeUser(formData) {
  const user = {
      name: formData.get('name'),
      hp: 35,
      gold: 0,
      completed: {}
  };

  return user;
}

export const newMakeUser = (formData) => ({
  name: formData.get('name'),
  hp: 35,
  gold: 0,
  completed: {}
});

export default makeUser;