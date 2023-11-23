interface IConfig {
	port: number
	mysql: {
		database: string
		username: string
		password: string
		host: string
		port: number
	}
}

const config: IConfig = {
	port: Number(process.env["PORT"]) || 7000,
	mysql: {
		database: String(process.env["MYSQL_DATABASE"]),
		username: String(process.env["MYSQL_USER"]),
		password: String(process.env["MYSQL_PASSWORD"]),
		host: String(process.env["MYSQL_HOST"]),
		port: Number(process.env["MYSQL_PORT"])
	}
}

export default config
