import { Request, Response } from "express";

export class NodesController {
	public index(req: Request, res: Response) {
		let id = req.params.id;
		console.log(id);
		res.json({
			message: "Hello boi"
		});
	}
}
