import { ReactNode } from 'react';
import { SocketProvider } from './socket';

const AppContextProviders = ({ children }: { children: ReactNode }) => (
  <SocketProvider>{children}</SocketProvider>
);

export default AppContextProviders;