module.exports = {
  apps: [
    {
      name: "Roomly",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
