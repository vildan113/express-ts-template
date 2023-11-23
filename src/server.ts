import express, { type Application } from "express"
import http from "http"
import type { IController } from "types/controller.interface"

/**
 * Main Server class
 */
class Server {
	/**
	 * An instance of the express application
	 */
	private readonly app: Application
	private readonly server: http.Server

	constructor(controllers: IController[]) {
		this.app = express()
		this.app.use(express.json({ limit: "1024mb" }))
		this.server = http.createServer(this.app)

		this.initControllers(controllers)
	}

	/**
	 * Initializing controllers
	 */
	private initControllers(controllers: IController[]) {
		controllers.forEach(controller => this.app.use(controller.router))
	}

	/**
	 * Starting the server
	 * @param port Port for listening by the server
	 */
	start(port: number) {
		this.server.listen(port)

		/**
		 * Server Startup Processing
		 */
		this.server.on("listening", () =>
			console.log(`The server is running on the ${port} port...`)
		)

		/**
		 * Server Shutdown Processing
		 */
		this.server.on("close", () => console.log(`The server is disabled`))
	}
}

export default Server
