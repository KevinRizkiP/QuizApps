const accessLogin = (query) => ({
  type: "Auth/AccessLogin",
  payload: query,
});

export { accessLogin };
