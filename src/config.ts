interface IConfig {
  port: string;
}

const config: IConfig = {
  port: process.env.PORT || "8888",
};

export default config;
