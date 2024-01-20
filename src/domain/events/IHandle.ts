// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { IDomainEvent } from './IDomainEvent';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface IHandle<IDomainEvent> {
  setupSubscriptions(): void;
}
