import app from "./app";

// Comment
const server = app.listen(app.get("port"), (): void => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

export default server;
