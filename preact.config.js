import dotenv from "dotenv";
dotenv.config();
import { DefinePlugin } from "webpack";

console.log("DOTENV WORKING?", process.env.API_URL, process.env.MAPBOX_API_KEY);

export default {
  webpack(config, env, helpers, options) {
    config.plugins.push(
      new DefinePlugin({
        "process.env.API_URL": JSON.stringify(process.env.API_URL),
      })
    );
    config.plugins.push(
      new DefinePlugin({
        "process.env.MAPBOX_API_KEY": JSON.stringify(
          process.env.MAPBOX_API_KEY
        ),
      })
    );
  },
};
