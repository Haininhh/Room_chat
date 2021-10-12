export const authLogin = (user: {
  name: string | null;
  avatar: string | null;
  id: string | null;
  email: string | null;
}) => {
  return { type: "AUTH_LOGIN", payload: user };
};
