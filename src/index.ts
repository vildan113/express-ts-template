import "reflect-metadata"
import "dotenv/config"
import Server from "server"
import config from "config"
import { ExampleController } from "api"

new Server([new ExampleController()]).start(config.port)
