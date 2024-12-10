import { Method } from 'axios';

interface UseFetchProps<Req> {
    config: {
      endpoint: string;
      method: Method;
    };
    req: Req;
  }

    export default UseFetchProps;