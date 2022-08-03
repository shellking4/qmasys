export default (context: any) => {
  let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!).user: {}
  const isAgent = user.roles.includes("AGENT")
  const authenticated = localStorage.getItem("user") !== null;
  if (!authenticated) {
    return context.redirect("/login")
  }
  if (authenticated && !isAgent) {
    return context.redirect("/admin")
  }
}
