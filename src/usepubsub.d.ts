declare module 'usepubsub' {
  export const DefaultPubSubContext: React.Context<UsePubSub>;
  export function usePubSub(): UsePubSub;
  type Handler = (message: unknown) => void;
  interface UsePubSub {
    PubSubContext: React.Context<UsePubSubContext>;
    publish: (channel: string, message: unknown) => void;
    subscribe: (channel: string, handler: Handler) => () => void;
    unsubscribe: (channel: string, handler: Handler) => void;
  }
}
