const fs = require('fs');
const path = require('path');

class CaseSensitiveResolver {
  constructor(source, target) {
    this.source = source;
    this.target = target;
  }

  apply(resolver) {
    const target = resolver.ensureHook(this.target);
    resolver.getHook(this.source).tapAsync(
      "CaseSensitiveResolver",
      (request, resolveContext, callback) => {
        const requestedPath = request.request;
        
        // Only process @/components paths
        if (!requestedPath.startsWith('@/components')) {
          return callback();
        }

        // Extract component name
        const parts = requestedPath.split('/');
        const componentName = parts.pop();
        const basePath = path.resolve(__dirname, '../components');
        
        // Find actual file with correct casing
        const actualPath = this.findActualCase(
          path.join(basePath, ...parts),
          componentName
        );

        if (actualPath) {
          const newRequest = {
            ...request,
            request: actualPath
          };
          return resolver.doResolve(
            target,
            newRequest,
            "Resolved with case correction: " + actualPath,
            resolveContext,
            callback
          );
        }

        callback();
      }
    );
  }

  findActualCase(directory, fileName) {
    if (!fs.existsSync(directory)) return null;
    
    const files = fs.readdirSync(directory);
    const lowerFileName = fileName.toLowerCase();
    
    for (const file of files) {
      if (file.toLowerCase() === lowerFileName) {
        return path.relative(
          path.resolve(__dirname, '..'), 
          path.join(directory, file)
        ).replace(/\\/g, '/');
      }
    }
    return null;
  }
}

module.exports = CaseSensitiveResolver;