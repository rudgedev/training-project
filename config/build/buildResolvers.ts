import { ResolveOptions } from 'webpack';
import { IBuildOptions } from './types/config';

export function buildResolvers(options: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': options.paths.src,
      '@app': options.paths.src + '/app',
      '@entities': options.paths.src + '/entities',
      '@features': options.paths.src + '/features',
      '@pages': options.paths.src + '/pages',
      '@widgets': options.paths.src + '/widgets',
      '@shared': options.paths.src + '/shared',
    },
  };
}
