import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
	async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
		const { title, description } = createBoardDto;

		const board = this.create({
			title,
			description,
			status: BoardStatus.PUBLIC,
		});

		await this.save(board);
		return board;
	}

	async getBoardById(id: number): Promise<Board> {
		const found = await this.findOne(id);

		if (!found) {
			throw new NotFoundException(`Can't find Board with id: ${id}`);
		}
		return found;
	}

	async getAllBoards(): Promise<Board[]> {
		return this.find();
	}

	async deleteBoard(id: number): Promise<void> {
		const result = await this.delete(id);

		if (result.affected === 0) {
			throw new NotFoundException(`Can't find board with id: ${id}`);
		}
	}

	async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
		const board = await this.getBoardById(id);

		board.status = status;
		await this.save(board);

		return board;
	}
}
