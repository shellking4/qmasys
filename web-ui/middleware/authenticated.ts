export default (context: any) => {
  const authenticated = localStorage.getItem("user") !== null;
  if (!authenticated) {
      return context.redirect('/login')
  }
}
