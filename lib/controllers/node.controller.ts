import { Request, Response } from "express";

export class NodesController {
	public index(req: Request, res: Response) {
		let id: number = req.params.id !== undefined ? parseInt(req.params.id) : 0;
		res.json({
			message: "Hello boi",
			input_id: id
		});
	}
}
