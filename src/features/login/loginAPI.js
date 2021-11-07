export function fetchLogin(username = "", password = "") {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: { username, password } }), 500)
  );
}
