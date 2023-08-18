# TypeScript 笔记


## 制作对象编辑工具

```typescript

type Optional<T,K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

```