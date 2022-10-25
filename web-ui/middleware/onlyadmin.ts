export default (context: any) => {
  let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!).user: {}
  const isAdmin = user.roles.includes("ADMIN");
  const authenticated = localStorage.getItem("user") !== null;
  if (!authenticated) {
    return context.redirect("/login")
  }
  if (authenticated && !isAdmin) {
    return context.redirect("/")
  }
}
