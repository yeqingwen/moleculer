"use strict";

import { Service } from "../../../";
import { Context } from "../../../";

type GreeterWelcomeParams = {
	name: string
};

class GreeterService extends Service {
	constructor(broker) {
		super(broker, null);

		this.parseServiceSchema({
			name: "greeter",
			actions: {
				hello: this.hello,
				welcome: this.welcome
			}
		});
	}

	/**
	 * Say a 'Hello'
	 *
	 * @returns
	 */
	hello() {
		return "Hello Moleculer TS";
	}

	/**
	 * Welcome a username
	 *
	 * @param {String} name - User name
	 */
	welcome(ctx: Context<GreeterWelcomeParams>) {
		return `Welcome, ${ctx.params.name}!`;
	}
};

module.exports = GreeterService;
