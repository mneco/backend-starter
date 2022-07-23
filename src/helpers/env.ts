import * as dotenv from "dotenv";
import { cleanEnv, num, str } from "envalid";
import { resolve } from "path";
import { cwd } from "process";

dotenv.config({ path: resolve(cwd(), ".env") });

// eslint-disable-next-line node/no-process-env
export default cleanEnv(process.env, {
	PORT: num({ default: 1337 }),
	FACEBOOK_APP_ID: str(),
	FACEBOOK_APP_SECRET: str(),
	JWT: str(),
	MONGO: str(),
	TELEGRAM_LOGIN_TOKEN: str(),
});
