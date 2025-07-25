import { flag } from "flags/next";
import { vercelAdapter } from "@vercel-private/flags-adapter-native";

export const noTitle = flag<boolean>({
	key: "no-title",
	adapter: vercelAdapter(),
	defaultValue: false,
});
