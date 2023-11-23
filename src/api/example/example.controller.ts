import ExampleService from "./example.service"
import { type NextFunction, type Request, type Response, Router } from "express"

class ExampleController {
	private readonly service: ExampleService
	readonly router: Router

	constructor() {
		this.service = new ExampleService()
		this.router = Router()

		this.router.get("/greeting", (...args) => this.greeting(...args))
	}

	private async greeting(_req: Request, res: Response, _next: NextFunction) {
		try {
			const result = await this.service.greeting()
			res.json(result)
		} catch (error) {
			res.status(500).json({ error })
		}
	}
}

export default ExampleController
