import { InMemoryTablesRepository } from '@test/repositories/in-memory-tables.repository';
import { EditTableUseCase } from './edit-table.use-case';
import { makeTable } from '@test/factories/make-table';
import { UniqueEntityId } from '@core/entities/unique-entity-id';
import { randomUUID } from 'crypto';
import { ResourceNotFoundError } from '@core/errors/errors/resource-not-found.error';

describe('Edit Table', () => {
  let inMemoryTablesRepository: InMemoryTablesRepository;
  let sut: EditTableUseCase;

  beforeEach(() => {
    inMemoryTablesRepository = new InMemoryTablesRepository();
    sut = new EditTableUseCase(inMemoryTablesRepository);
  });

  it('should be able to edit an existing table', async () => {
    const id = UniqueEntityId.createFromInt(1);
    const table = makeTable({}, id);

    await inMemoryTablesRepository.create(table);

    const result = await sut.execute({
      id: id.toString(),
      activeToken: randomUUID(),
    });

    expect(result.message).toEqual('Mesa salva com sucesso!');
  });

  it('should not be able to edit a non existing table', async () => {
    const table = makeTable();

    await inMemoryTablesRepository.create(table);

    expect(async () => {
      return await sut.execute({
        id: UniqueEntityId.createFromInt(1).toString(),
        activeToken: randomUUID(),
      });
    }).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
