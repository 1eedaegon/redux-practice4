declare class Queue<T> {
    list: T[];
    get length(): number;
    enqueue(item: T): void;
    dequeue(): T | undefined;
}
declare const queue: Queue<number>;
