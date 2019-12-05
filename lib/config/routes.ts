import { Request, Response } from "express";
import { Nodes } from "../controllers/node.controller";
import { Vr } from "../controllers/vr.controller";

export class Routes {
	public nodesController: Nodes = new Nodes();
	public vrController: Vr = new Vr();

	public routes(app): void {
		app.route("/").get(this.nodesController.index);

		app.route("/vr").get(this.vrController.index);

		app.route("/nodes").get(this.nodesController.index);

		app.route("/:id").get(this.nodesController.index);
	}
}
