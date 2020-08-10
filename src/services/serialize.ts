import { Node } from 'slate'
import { createIdentifier } from 'wedi'

export const ISerializeService = createIdentifier<ISerializeService>(
  'serialize'
)

export interface ISerializeService {
  serialize(nodes: Node[]): string
  deserialize(val: string): Node[]
}

export class SerializeService implements ISerializeService {
  serialize(nodes: Node[]): string {
    return ''
  }

  deserialize(val: string): Node[] {
    return []
  }
}
