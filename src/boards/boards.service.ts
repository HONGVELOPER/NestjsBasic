import { Injectable } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
// import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
	constructor(
		@InjectRepository(BoardRepository)
		private boardRepository: BoardRepository,
	) {}

	createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
		return this.boardRepository.createBoard(createBoardDto);
	}

	getBoardById(id: number): Promise<Board> {
		return this.boardRepository.getBoardById(id);
	}

	getAllBoards(): Promise<Board[]> {
		return this.boardRepository.getAllBoards();
	}

	deleteBoard(id: number): Promise<void> {
		return this.boardRepository.deleteBoard(id);
	}

	updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
		return this.boardRepository.updateBoardStatus(id, status);
	}
	// getAllBoards(): Board[] {
	// 	return this.boards;
	// }
	// createBoard(createBoardDto: CreateBoardDto) {
	// 	const { title, description } = createBoardDto;
	// 	const board: Board = {
	// 		id: uuid(),
	// 		title, // title: title 입력하는 것과 같다.
	// 		description,
	// 		status: BoardStatus.PUBLIC,
	// 	};
	// 	this.boards.push(board);
	// 	return board;
	// }
	// getBoardById(id: string): Board {
	// 	const found = this.boards.find((board) => board.id === id);
	// 	if (!found) {
	// 		throw new NotFoundException(`Can't find Board with id: ${id}`);
	// 	}
	// 	return found;
	// }
	// deleteBoard(id: string): void {
	// 	const found = this.getBoardById(id); // getBoardById에 이미 예외처리 존재
	// 	this.boards = this.boards.filter((board) => board.id !== found.id);
	// }
	// updateBoardStatus(id: string, status: BoardStatus): Board {
	// 	const board = this.getBoardById(id);
	// 	board.status = status;
	// 	return board;
	// }
}
