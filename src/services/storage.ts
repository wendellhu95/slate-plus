import { createIdentifier } from 'wedi'

export const IStorageService = createIdentifier<IStorageService>('storage')

export interface IStorageService {
  save(key: string, value: string): void
  load(key: string): string | Promise<string>
}

export class StorageService implements IStorageService {
  save(key: string, value: string): void {}
  load(key: string): string {
    return ''
  }
}
