const buildObjectToSend = (
  name,
  lastName,
  nickName,
  numberPart1,
  numberPart2,
  currentDebt,
  address,
  history
) => {
  return {
    name: name,
    lastName: lastName,
    nickName: nickName,
    phoneNumber: numberPart1 + numberPart2,
    currentDebt: currentDebt,
    address: address,
    history: history,
  };
};

export { buildObjectToSend };
