import { Request, Response } from "express";
import { NodesController } from "../controllers/node.controller";

export class Routes {
	public nodesController: NodesController = new NodesController();

	public routes(app): void {
		app.route("/:id").get(this.nodesController.index);

		app.route("/nodes").get(this.nodesController.index);
	}
}
