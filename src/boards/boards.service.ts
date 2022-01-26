import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
	private boards: Board[] = [];

	getAllBoards(): Board[] {
		return this.boards;
	}

	createBoard(title: string, description: string) {
		const board: Board = {
			id: uuid(),
			title, // title: title 입력하는 것과 같다.
			description,
			status: BoardStatus.PUBLIC,
		};
		this.boards.push(board);
		return board;
	}
}
