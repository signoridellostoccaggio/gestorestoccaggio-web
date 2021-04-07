import { Logger }  from '@nestjs/common';
import * as morgan from 'morgan';


const stream: morgan.StreamOptions = {
  write: (message) => Logger.log(message.replace('\n', ''))
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);

export function useRequestLogging(app) {
  app.use(morganMiddleware);
}
