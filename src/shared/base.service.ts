import { Repository, ObjectLiteral, DeepPartial } from 'typeorm';

export abstract class BaseService<T extends ObjectLiteral> {
  constructor(protected readonly repository: Repository<T>) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id } as any);
  }

  create(data: DeepPartial<T>) {
    return this.repository.save(data);
  }

  update(id: string, data: Partial<T>) {
    return this.repository.update(id, data as any);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }
}
